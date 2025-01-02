import React, { useRef, useState } from "react";
import RightMenuDrawer from "../../navigation/BookDrawer";
import { useDynamicStyles } from "../../css/cssStyles";
import { htmlRenderScript } from "../../functions/jsScripts";
import { getHtml, handleDrawerItemPress } from "../../functions/renderFunctions";
import { renderChapter } from "../../../data/bible/renderChapter";
import bible from "../../../data/bible/bible.json";

const ChapterScreen = ({ route }) => {
  const { bookTitle, chapterNumber } = route.params; // Assume these are passed via navigation
  const [drawerItems, setDrawerItems] = useState([]);
  const [currentTable, setCurrentTable] = useState("");
  const webviewRef = useRef(null);

  const dynamicStyles = useDynamicStyles(webviewRef);

  // Find the book and chapter in the JSON
  const book = bible.find((b) => b.title === bookTitle);
  const chapter = book.chapters.find((c) => c.chapter === chapterNumber);

  // Generate HTML dynamically
  const body = renderChapter(bookTitle, chapterNumber, chapter.verses);
  const script = htmlRenderScript;
  const html = getHtml(dynamicStyles, body, script);

  return (
    <RightMenuDrawer
      currentTable={currentTable}
      drawerItems={drawerItems}
      handleDrawerItemPress={handleDrawerItemPress}
      webviewRef={webviewRef}
      setDrawerItems={setDrawerItems}
      setCurrentTable={setCurrentTable}
      html={html}
    />
  );
};

export default ChapterScreen;
