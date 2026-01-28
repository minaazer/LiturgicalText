import {
  BASE_REPEATED_VAR_OPTIONS,
  CELL_FIELD_OPTIONS,
  REPEATED_PRAYER_SOURCES,
  REPEATED_VAR_OPTIONS,
  ROW_ARRAY_FIELDS,
  ROW_BOOLEAN_FIELDS,
  ROW_CLASS_OPTIONS,
  ROW_FIELD_LABELS,
  ROW_FIELD_OPTIONS,
  ROW_OPTIONAL_FIELDS,
  TABLE_ARRAY_FIELDS,
  TABLE_BOOLEAN_FIELDS,
  TABLE_FIELD_OPTIONS,
  TABLE_FIELD_LABELS,
  TABLE_OPTIONAL_FIELDS,
  getCategoryOptionsForSource,
} from "./editorDropdowns.js";

export const emptyArray = [];

export const rowClassOptions = ROW_CLASS_OPTIONS;

export const tableOptionalFields = TABLE_OPTIONAL_FIELDS;

export const tableBooleanFields = TABLE_BOOLEAN_FIELDS;

export const tableArrayFields = TABLE_ARRAY_FIELDS;

export const tableFieldOptions = TABLE_FIELD_OPTIONS;

export const tableFieldLabels = TABLE_FIELD_LABELS;

export const cellFieldOptions = CELL_FIELD_OPTIONS;

export const rowOptionalFields = ROW_OPTIONAL_FIELDS;

export const rowBooleanFields = ROW_BOOLEAN_FIELDS;

export const rowArrayFields = ROW_ARRAY_FIELDS;

export const rowFieldOptions = ROW_FIELD_OPTIONS;

export const rowFieldLabels = ROW_FIELD_LABELS;

export const repeatedVarOptions = REPEATED_VAR_OPTIONS;

export const baseRepeatedVarOptions = BASE_REPEATED_VAR_OPTIONS;

export const getOptionalDefaultValue = (field) => {
  if (tableBooleanFields.includes(field)) return false;
  if (tableArrayFields.includes(field)) return [];
  return "";
};

export const repeatedPrayerSources = REPEATED_PRAYER_SOURCES;

export { getCategoryOptionsForSource };
