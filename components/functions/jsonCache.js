import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import bundledManifest from "../../data/jsons/manifest.json";

const CACHE_DIR = `${FileSystem.documentDirectory}json-cache/`;
const MANIFEST_KEY = "json-cache-manifest";
const MAX_RETRY = 2;
const MANIFEST_FETCH_TIMEOUT_MS = 15000;
const memoryCache = new Map();
let updateInFlight = null;
let preferBundledJson = false;

export function setPreferBundledJson(value) {
  preferBundledJson = !!value;
}

export function getPreferBundledJson() {
  return preferBundledJson;
}

const ensureDir = async (dir) => {
  try {
    await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
  } catch (err) {
    if (err?.message?.includes("exists")) return;
    throw err;
  }
};

const withTimeout = (promise, timeoutMs, label) => {
  if (!timeoutMs) return promise;
  let timeoutId;
  const timeoutPromise = new Promise((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error(`${label} timed out after ${timeoutMs}ms`));
    }, timeoutMs);
  });
  return Promise.race([promise, timeoutPromise]).finally(() => {
    if (timeoutId) clearTimeout(timeoutId);
  });
};

const loadCachedManifest = async () => {
  const raw = await AsyncStorage.getItem(MANIFEST_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const saveCachedManifest = async (manifest) => {
  await AsyncStorage.setItem(MANIFEST_KEY, JSON.stringify(manifest));
};

export const clearCachedManifest = async () => {
  await AsyncStorage.removeItem(MANIFEST_KEY);
};

const getCachePath = (relativePath) => `${CACHE_DIR}${relativePath}`;

const ensureParentDir = async (filePath) => {
  const dir = filePath.slice(0, filePath.lastIndexOf("/"));
  if (dir) await ensureDir(dir);
};

const fetchJson = async (url) => {
  const hasAbortController = typeof AbortController !== "undefined";
  const controller = hasAbortController ? new AbortController() : null;
  const fetchPromise = fetch(url, controller ? { signal: controller.signal } : undefined);
  let res;
  if (controller) {
    const timeoutId = setTimeout(() => controller.abort(), MANIFEST_FETCH_TIMEOUT_MS);
    try {
      res = await fetchPromise;
    } catch (err) {
      if (err?.name === "AbortError") {
        throw new Error(`Failed to fetch ${url}: request timed out`);
      }
      throw err;
    } finally {
      clearTimeout(timeoutId);
    }
  } else {
    res = await withTimeout(fetchPromise, MANIFEST_FETCH_TIMEOUT_MS, `fetch ${url}`);
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status}`);
  }
  return res.json();
};

const buildManifestIndex = (manifest) => {
  const files = Array.isArray(manifest?.files) ? manifest.files : [];
  const index = new Map();
  files.forEach((entry) => {
    if (entry?.path) index.set(entry.path, entry);
  });
  return index;
};

const warmupCache = async (paths) => {
  if (!Array.isArray(paths)) return;
  const warmed = [];
  for (const relPath of paths) {
    try {
      await readJsonFromCache(relPath);
      warmed.push(relPath);
    } catch (err) {
      console.warn(`jsonCache: warmup failed for ${relPath}`, err);
    }
  }
  if (warmed.length) {
    console.log(`jsonCache: warmed ${warmed.length} files`, warmed);
  }
};

const runUpdate = (remoteBaseUrl, { preUpdate } = {}) => {
  if (updateInFlight) {
    return { promise: updateInFlight, started: false };
  }
  updateInFlight = (async () => {
    if (preUpdate) {
      await preUpdate();
    }
    return updateJsonCache(remoteBaseUrl);
  })().finally(() => {
    updateInFlight = null;
  });
  return { promise: updateInFlight, started: true };
};

export async function initJsonCache({
  remoteBaseUrl,
  warmupPaths,
  onStatus,
} = {}) {
  await ensureDir(CACHE_DIR);
  const cachedManifest = await loadCachedManifest();
  if (!cachedManifest) {
    await saveCachedManifest(bundledManifest);
  }

  if (remoteBaseUrl) {
    let started = false;
    try {
      const { promise, started: didStart } = runUpdate(remoteBaseUrl);
      started = didStart;
      if (started) onStatus?.({ phase: "update-start" });
      const result = await promise;
      if (started) {
        onStatus?.({ phase: "update-success", updated: result.updated });
      }
    } catch (err) {
      if (started) {
        onStatus?.({ phase: "update-error", error: err });
      }
      console.warn("jsonCache: update failed", err);
    }
  }
  await warmupCache(warmupPaths);
}

export function clearJsonMemoryCache() {
  memoryCache.clear();
}

export async function refreshJsonCache({
  remoteBaseUrl,
  warmupPaths,
  onStatus,
  forceManifest,
} = {}) {
  if (!remoteBaseUrl) {
    throw new Error("refreshJsonCache: remoteBaseUrl is required");
  }
  let started = false;
  try {
    const { promise, started: didStart } = runUpdate(remoteBaseUrl, {
      preUpdate: forceManifest ? clearCachedManifest : null,
    });
    started = didStart;
    if (started) onStatus?.({ phase: "update-start" });
    const result = await promise;
    clearJsonMemoryCache();
    await warmupCache(warmupPaths);
    if (started) {
      onStatus?.({ phase: "update-success", updated: result.updated });
    }
    return result;
  } catch (err) {
    if (started) {
      onStatus?.({ phase: "update-error", error: err });
    }
    throw err;
  }
}

export async function updateJsonCache(remoteBaseUrl) {
  const manifestUrl = `${remoteBaseUrl.replace(/\/+$/, "")}/manifest.json`;
  const remoteManifest = await fetchJson(manifestUrl);
  const cachedManifest = (await loadCachedManifest()) || bundledManifest;

  const remoteIndex = buildManifestIndex(remoteManifest);
  const cachedIndex = buildManifestIndex(cachedManifest);

  const downloads = [];
  for (const [relPath, remoteEntry] of remoteIndex.entries()) {
    const cachedEntry = cachedIndex.get(relPath);
    const targetPath = getCachePath(relPath);
    const info = await FileSystem.getInfoAsync(targetPath);
    const missingOnDisk = !info.exists;
    const changed =
      !cachedEntry ||
      cachedEntry.hash !== remoteEntry.hash ||
      cachedEntry.size !== remoteEntry.size ||
      missingOnDisk;
    if (!changed) continue;
    downloads.push({ relPath, entry: remoteEntry });
  }

  for (const { relPath } of downloads) {
    const url = `${remoteBaseUrl.replace(/\/+$/, "")}/${relPath}`;
    const targetPath = getCachePath(relPath);
    await ensureParentDir(targetPath);
    let attempts = 0;
    while (true) {
      try {
        await FileSystem.downloadAsync(url, targetPath);
        break;
      } catch (err) {
        attempts += 1;
        if (attempts > MAX_RETRY) throw err;
      }
    }
  }

  await saveCachedManifest(remoteManifest);
  return { updated: downloads.map((d) => d.relPath) };
}

export async function readJsonFromCache(relPath) {
  if (preferBundledJson) return null;
  const filePath = getCachePath(relPath);
  const info = await FileSystem.getInfoAsync(filePath);
  if (!info.exists) return null;
  const raw = await FileSystem.readAsStringAsync(filePath);
  try {
    const parsed = JSON.parse(raw);
    memoryCache.set(relPath, parsed);
    return parsed;
  } catch {
    return null;
  }
}

export async function getJson(relPath, fallback) {
  if (preferBundledJson) {
    return fallback ?? null;
  }
  const cached = await readJsonFromCache(relPath);
  if (cached !== null) {
    //console.log(`jsonCache: loaded ${relPath} from cache`);
    return cached;
  }
  console.log(`jsonCache: using bundled fallback for ${relPath}`);
  if (fallback !== undefined && fallback !== null) {
    memoryCache.set(relPath, fallback);
  }
  return fallback ?? null;
}

export function getJsonSync(relPath, fallback) {
  if (preferBundledJson) {
    return fallback ?? null;
  }
  if (memoryCache.has(relPath)) {
    return memoryCache.get(relPath);
  }
  return fallback ?? null;
}
