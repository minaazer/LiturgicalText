import doxologiesData from "./jsons/psalmody/doxologies.json";
import { renderHtml } from "./renderHtml";
import { getJsonSync } from "../components/functions/jsonCache";

const intersects = (left = [], right = []) =>
  left.some((value) => right.includes(value));

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

const buildSaintVisibilityMap = (settings) =>
  new Map(
    (settings?.saintSettings || []).map((saint) => [
      normalizeSaintName(saint.saintName),
      saint.doxology === true,
    ])
  );

const shouldIncludeDoxology = ({
  table,
  seasons,
  saintNames,
  saintVisibilityMap,
  source,
  adamWatos,
}) => {
  if (!table?.english_title) {
    return false;
  }

  if (table.service && table.service !== source) {
    console.log("source mismatch", { tableSource: table.service, source });
    return false;
  }

  if (Array.isArray(table.seasons) && table.seasons.length > 0) {
    if (!intersects(table.seasons, seasons)) {
      return false;
    }
  }

  if (table.adamWatos && table.adamWatos !== adamWatos) {
    return false;
  }

  if (
    Array.isArray(table.excludedSeasons) &&
    intersects(table.excludedSeasons, seasons)
  ) {
    return false;
  }

  if (Array.isArray(table.saints) && table.saints.length > 0) {
    const tableSaints = table.saints.map(normalizeSaintName).filter(Boolean);
    if (intersects(tableSaints, saintNames)) {
      return true;
    }

    return tableSaints.some((saint) => saintVisibilityMap.get(saint) === true);
  }

  return true;
};

export const doxologiesHtml = (settings, source) => {
  const selectedDateProperties = settings?.selectedDateProperties || {};
  const seasons = selectedDateProperties.copticSeason || [];
  const saintFeasts = selectedDateProperties.saintFeast || [];
  const adamWatos = selectedDateProperties.adamOrWatos;
  const saintNames = saintFeasts
    .map((feast) => normalizeSaintName(feast.saintName))
    .filter(Boolean);
  const resolvedSource = source || "midnightPraises";
  const saintVisibilityMap = buildSaintVisibilityMap(settings);

  const doxologiesJson = getJsonSync(
    "psalmody/doxologies.json",
    doxologiesData
  );
  const visibleDoxologies = doxologiesJson.filter((table) =>
    shouldIncludeDoxology({
      table,
      seasons,
      saintNames,
      saintVisibilityMap,
      source: resolvedSource,
      adamWatos,
    })
  );

  return renderHtml(visibleDoxologies, "Doxologies", "", "", {});
};
