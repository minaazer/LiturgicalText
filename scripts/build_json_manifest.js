const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const rootDir = path.resolve(__dirname, "..");
const jsonRoot = path.join(rootDir, "data", "jsons");
const outputPath = path.join(jsonRoot, "manifest.json");
const tableIdKey = "table_id";

const hashFile = (filePath) => {
  const data = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(data).digest("hex");
};

const shouldAssignTableIds = (filePath) => {
  const relPath = path
    .relative(jsonRoot, filePath)
    .replace(/\\/g, "/");
  if (relPath === "manifest.json") return false;
  if (relPath.startsWith("_schemas/")) return false;
  return true;
};

const slugify = (value) =>
  String(value || "")
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const isTableObject = (node) =>
  node && typeof node === "object" && Array.isArray(node.tbodies);

const collectTableIds = (node, ids, duplicates) => {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach((item) => collectTableIds(item, ids, duplicates));
    return;
  }
  if (isTableObject(node)) {
    const existing = node[tableIdKey];
    if (typeof existing === "string" && existing.trim()) {
      const trimmed = existing.trim();
      if (ids.has(trimmed)) {
        duplicates.add(trimmed);
      }
      ids.add(trimmed);
    }
  }
  Object.values(node).forEach((value) => collectTableIds(value, ids, duplicates));
};

const assignMissingTableIds = (node, ctx) => {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach((item) => assignMissingTableIds(item, ctx));
    return;
  }
  if (isTableObject(node)) {
    const existing = node[tableIdKey];
    if (!(typeof existing === "string" && existing.trim())) {
      const prefix = ctx.filePrefix || "table";
      let candidate;
      do {
        candidate = `${prefix}_${crypto.randomBytes(5).toString("hex")}`;
      } while (ctx.fileIds.has(candidate) || ctx.globalIds.has(candidate));
      node[tableIdKey] = candidate;
      ctx.fileIds.add(candidate);
      ctx.globalIds.add(candidate);
      ctx.changed = true;
      ctx.added += 1;
    }
  }
  Object.values(node).forEach((value) => assignMissingTableIds(value, ctx));
};

const ensureTableIdsInFile = (filePath, globalIds) => {
  if (!shouldAssignTableIds(filePath)) return false;
  const raw = fs.readFileSync(filePath, "utf8");
  let data;
  try {
    data = JSON.parse(raw);
  } catch (error) {
    console.warn(`Skipping invalid JSON: ${filePath}`);
    return false;
  }

  const relPath = path
    .relative(jsonRoot, filePath)
    .replace(/\\/g, "/");
  const fileBase = path.basename(relPath, ".json");
  const filePrefix = slugify(fileBase).replace(/-/g, "_");
  const fileIds = new Set();
  const duplicates = new Set();
  collectTableIds(data, fileIds, duplicates);

  if (duplicates.size > 0) {
    console.warn(
      `Duplicate table_id values in ${relPath}: ${Array.from(duplicates).join(", ")}`
    );
  }

  fileIds.forEach((id) => {
    if (globalIds.has(id)) {
      console.warn(`Duplicate table_id across files: ${id} (${relPath})`);
    }
    globalIds.add(id);
  });

  const ctx = {
    filePrefix: filePrefix || "table",
    fileIds,
    globalIds,
    changed: false,
    added: 0,
  };
  assignMissingTableIds(data, ctx);

  if (ctx.changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
    console.log(`Added ${ctx.added} table_id entries to ${relPath}`);
  }
  return ctx.changed;
};

const walkJsonFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      if (path.basename(fullPath) !== "manifest.json") {
        files.push(fullPath);
      }
    }
  });
  return files;
};

const jsonFiles = walkJsonFiles(jsonRoot).sort((a, b) =>
  a.localeCompare(b)
);
const globalTableIds = new Set();
jsonFiles.forEach((filePath) => {
  ensureTableIdsInFile(filePath, globalTableIds);
});
const files = jsonFiles
  .map((filePath) => {
    const relPath = path
      .relative(jsonRoot, filePath)
      .replace(/\\/g, "/");
    const stat = fs.statSync(filePath);
    return {
      path: relPath,
      hash: hashFile(filePath),
      size: stat.size,
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

const manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  files,
};

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(`Wrote manifest with ${files.length} files to ${outputPath}`);
