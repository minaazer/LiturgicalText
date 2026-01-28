import React, { useCallback, useLayoutEffect, useRef } from "react";

const MAX_LINES = 10;

const resizeTextarea = (el) => {
  if (!el) return;
  el.style.height = "auto";
  const lineHeight = Number.parseFloat(window.getComputedStyle(el).lineHeight) || 20;
  const maxHeight = lineHeight * MAX_LINES;
  const nextHeight = Math.min(el.scrollHeight, maxHeight);
  el.style.height = `${nextHeight}px`;
  el.style.overflowY = el.scrollHeight > maxHeight ? "auto" : "hidden";
};

const CellValueTextarea = ({ value, onChange, dir }) => {
  const textareaRef = useRef(null);

  const handleResize = useCallback((event) => {
    resizeTextarea(event.target);
  }, []);

  useLayoutEffect(() => {
    resizeTextarea(textareaRef.current);
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className="hw-cell-textarea"
      rows={1}
      value={value ?? ""}
      dir={dir}
      onChange={(e) => onChange(e.target.value)}
      onInput={handleResize}
      onFocus={handleResize}
    />
  );
};

export default CellValueTextarea;
