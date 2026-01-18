/** @format */

import React, { useRef, useState } from "react";
import RightMenuDrawer from "../../navigation/BookDrawer";
import { useDynamicStyles } from "../../css/cssStyles";
import { htmlRenderScript } from "../../functions/jsScripts";
import {
  getHtml,
  handleDrawerItemPress,
} from "../../functions/renderFunctions";
import { renderChapter } from "../../../data/renderBibleChapter";
import { getVersionById } from "../../../data/bibleVersions";

const ChapterScreen = ({ route }) => {
  const {
    bookTitle,
    chapterNumber,
    versionId = "lxx2012",
    versionIds,
  } = route.params;
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);

  const resolvedVersionIds = (
    versionIds && versionIds.length ? versionIds : [versionId]
  ).filter(Boolean);
  const versions = resolvedVersionIds
    .map((id) => getVersionById(id))
    .filter(Boolean);

  const findBook = (v) => {
    const books = v?.data?.books || [];
    return (
      books.find((b) => b.title === bookTitle) ||
      books.find((b) => b.slug === bookTitle) ||
      null
    );
  };

  const baseVersion =
    versions.find((v) => findBook(v)) ||
    versions[0] ||
    getVersionById(versionId);
  const baseBooks = baseVersion?.data?.books || [];
  const baseBook = findBook(baseVersion) || baseBooks[0];
  const baseBookIndex = baseBooks.findIndex(
    (b) => b?.title === baseBook?.title
  );
  const baseChapter =
    baseBook?.chapters.find((c) => c.chapter === chapterNumber) ||
    baseBook?.chapters[0];

  const languageOrder = ["english", "coptic", "arabic"];
  const sections = versions
    .map((v) => {
      const books = v?.data?.books || [];
      let bookForVersion =
        books.find((b) => b.title === baseBook?.title) ||
        books.find((b) => b.slug === baseBook?.slug);
      if (!bookForVersion && baseBookIndex >= 0 && books[baseBookIndex]) {
        bookForVersion = books[baseBookIndex];
      }
      if (!bookForVersion) return null;
      const chapterForVersion =
        bookForVersion.chapters.find((c) => c.chapter === chapterNumber) ||
        bookForVersion.chapters[0];
      if (!chapterForVersion) return null;
      return {
        label: v.label || v.id,
        languageClass: v.language || "english",
        rtl: !!v.rtl,
        verses: chapterForVersion.verses || [],
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aIndex = languageOrder.indexOf(a.languageClass);
      const bIndex = languageOrder.indexOf(b.languageClass);
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

  const body = renderChapter(
    baseBook?.title || "",
    baseChapter?.chapter || 1,
    sections
  );
  const script = htmlRenderScript;
  const rtl = !!baseVersion?.rtl;
  const html = getHtml(dynamicStyles, body, script, rtl);

  return (
    <RightMenuDrawer
      currentTable={currentTable}
      drawerItems={drawerItems}
      handleDrawerItemPress={handleDrawerItemPress}
      webviewRef={webviewRef}
      setDrawerItems={setDrawerItems}
      setCurrentTable={setCurrentTable}
      html={html}
      versionId={baseVersion?.id || versionId}
    />
  );
};

export default ChapterScreen;
