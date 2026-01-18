import actsResponseData from "../data/jsons/repeatedPrayers/actsResponses.json";
import gospelResponseData from "../data/jsons/repeatedPrayers/gospelResponses.json";
import intercessionsData from "../data/jsons/repeatedPrayers/intercessions.json";
import versesOfCymbalsData from "../data/jsons/repeatedPrayers/versesOfCymbals.json";
import distributionPraisesData from "../data/jsons/repeatedPrayers/distributionPraises.json";
import doxologiesData from "../data/jsons/psalmody/doxologies.json";
import { copticSaintFeasts } from "../components/functions/synexarium.js";
import { getJsonSync } from "../components/functions/jsonCache";

const normalizeSaintName = (name) => {
  if (!name) {
    return "";
  }

  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const isExcludedSaintName = (name) => {
  const key = normalizeSaintName(name);
  return key === "any apostle";
};

const collectSaintEntries = (node, entries = []) => {
  if (Array.isArray(node)) {
    node.forEach((child, index) =>
      collectSaintEntries(child, entries)
    );
    return entries;
  }

  if (node && typeof node === "object") {
    if (Array.isArray(node.saints) && node.saints.length > 0) {
      entries.push({
        saints: node.saints,
        defaultVisibility: node.defaultVisibility === true,
      });
    }

    Object.entries(node).forEach(([key, value]) => {
      if (key === "saints" || key === "defaultVisibility") {
        return;
      }

      collectSaintEntries(value, entries);
    });
  }

  return entries;
};

const buildSaintList = (feasts) => {
  const saintsByName = new Map();

  feasts.forEach((feast) => {
    if (!feast || typeof feast !== "object") {
      return;
    }

    const hasSaintName = Object.prototype.hasOwnProperty.call(
      feast,
      "saintName"
    );
    if (!hasSaintName) {
      return;
    }

    if (!feast.saintName || isExcludedSaintName(feast.saintName)) {
      return;
    }

    const key = normalizeSaintName(feast.saintName);
    if (!key) {
      return;
    }

    const feastTypes = Array.isArray(feast.type)
      ? feast.type
      : feast.type
      ? [feast.type]
      : [];

    if (!saintsByName.has(key)) {
      saintsByName.set(key, {
        saintName: feast.saintName,
        type: feastTypes,
      });
      return;
    }

    const existing = saintsByName.get(key);
    const mergedTypes = new Set([...(existing.type || []), ...feastTypes]);
    existing.type = Array.from(mergedTypes);
  });

  return Array.from(saintsByName.values());
};

const addSaintFlag = (map, saintName, categoryKey, defaultVisible) => {
  if (isExcludedSaintName(saintName)) {
    return;
  }

  const key = normalizeSaintName(saintName);
  if (!key) {
    return;
  }

  const existing = map.get(key) || {};
  const current = existing[categoryKey] || {
    hasHymn: false,
    defaultVisible: false,
  };
  current.hasHymn = true;
  current.defaultVisible = current.defaultVisible || defaultVisible === true;
  existing[categoryKey] = current;
  map.set(key, existing);
};

const buildSaintCategoryIndex = (sources) => {
  const bySaint = new Map();

  sources.forEach(({ key, data }) => {
    const entries = collectSaintEntries(data);

    entries.forEach(({ saints, defaultVisibility, hymnInfo }) => {
      saints.forEach((saintName) => {
        addSaintFlag(bySaint, saintName, key, defaultVisibility === true);
      });
    });
  });

  return bySaint;
};

const buildSaintSettingFlag = (categoryIndex, saintName, categoryKey) => {
  const key = normalizeSaintName(saintName);
  if (!key) {
    return undefined;
  }

  const saintEntry = categoryIndex.get(key);
  const entry = saintEntry?.[categoryKey];
  if (!entry?.hasHymn) {
    return undefined;
  }

  return entry.defaultVisible === true;
};

const sources = [
  {
    key: "verseOfCymbals",
    data: getJsonSync(
      "repeatedPrayers/versesOfCymbals.json",
      versesOfCymbalsData
    ),
  },
  {
    key: "intercession",
    data: getJsonSync(
      "repeatedPrayers/intercessions.json",
      intercessionsData
    ),
  },
  {
    key: "actsResponse",
    data: getJsonSync(
      "repeatedPrayers/actsResponses.json",
      actsResponseData
    ),
  },
  {
    key: "gospelResponse",
    data: getJsonSync(
      "repeatedPrayers/gospelResponses.json",
      gospelResponseData
    ),
  },
  {
    key: "distributionPraise",
    data: getJsonSync(
      "repeatedPrayers/distributionPraises.json",
      distributionPraisesData
    ),
  },
  {
    key: "doxology",
    data: getJsonSync(
      "psalmody/doxologies.json",
      doxologiesData
    ),
  },
];

const categoryIndex = buildSaintCategoryIndex(sources);

export const saintSettingsList = buildSaintList(copticSaintFeasts).map(
  (saint) => {
    const verseOfCymbals = buildSaintSettingFlag(
      categoryIndex,
      saint.saintName,
      "verseOfCymbals"
    );
    const intercession = buildSaintSettingFlag(
      categoryIndex,
      saint.saintName,
      "intercession"
    );
    const actsResponse = buildSaintSettingFlag(
      categoryIndex,
      saint.saintName,
      "actsResponse"
    );
    const gospelResponse = buildSaintSettingFlag(
      categoryIndex,
      saint.saintName,
      "gospelResponse"
    );
    const distributionPraise = buildSaintSettingFlag(
      categoryIndex,
      saint.saintName,
      "distributionPraise"
    );
    const doxology = buildSaintSettingFlag(
      categoryIndex,
      saint.saintName,
      "doxology"
    );

    return {
      saintName: saint.saintName,
      type: saint.type,
      ...(typeof verseOfCymbals === "boolean" ? { verseOfCymbals } : {}),
      ...(typeof intercession === "boolean" ? { intercession } : {}),
      ...(typeof actsResponse === "boolean" ? { actsResponse } : {}),
      ...(typeof gospelResponse === "boolean" ? { gospelResponse } : {}),
      ...(typeof distributionPraise === "boolean"
        ? { distributionPraise }
        : {}),
      ...(typeof doxology === "boolean" ? { doxology } : {}),
    };
  }
);
