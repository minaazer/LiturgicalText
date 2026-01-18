/** @format */

import english from "./jsons/bible/english_full.json";
import arabic from "./jsons/bible/arabic_full.json";
import coptic from "./jsons/bible/coptic.json";

export const bibleVersions = [
  {
    id: "lxx2012",
    label: "English (LXX2012 OT + NKJV NT)",
    data: english,
    rtl: false,
    language: "english",
  },
  {
    id: "arabic",
    label: "Arabic (Smith & Van Dyck)",
    data: arabic,
    rtl: !!arabic.rtl,
    language: "arabic",
  },
  {
    id: "coptic",
    label: "Coptic (OT+NT)",
    data: coptic,
    rtl: false,
    language: "coptic",
  },
];

export const getVersionById = (id) =>
  bibleVersions.find((v) => v.id === id) || bibleVersions[0];
