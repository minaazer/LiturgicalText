import React from "react";
import { cellFieldOptions } from "../../editorConfig.js";
import CellValueTextarea from "./CellValueTextarea.jsx";

const isRtlKey = (key) => key === "arabic" || key === "arabicLink";

const CellsEditor = ({
  cells,
  onAddCellEntry,
  onSetCellEntry,
  onRemoveCellEntry,
  addCellLabel = "Add cell field",
  emptyCellLabel = "Add cell field",
}) => {
  const cellList = Array.isArray(cells) ? cells : [];

  return (
    <div className="hw-cells">
      {cellList.map((cell, cellIdx) => {
        const entries = Object.entries(cell || {});
        const displayEntries = entries.length ? entries : [["english", ""]];

        return (
          <div key={`cell-${cellIdx}`} className="hw-cell">
            <div className="hw-cell-header">
              <div className="hw-cell-title">Cell {cellIdx + 1}</div>
              <button
                type="button"
                className="hw-add-cell-entry hw-add-cell-icon"
                title={addCellLabel}
                aria-label={addCellLabel}
                onClick={() => onAddCellEntry(cellIdx)}
              >
                +
              </button>
            </div>
            {displayEntries.map(([k, v], entryIdx) => (
              <div key={`cell-entry-${entryIdx}`} className="hw-cell-entry">
                <select value={k} onChange={(e) => onSetCellEntry(cellIdx, entryIdx, e.target.value, v)}>
                  {cellFieldOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <CellValueTextarea
                  value={v}
                  dir={isRtlKey(k) ? "rtl" : "ltr"}
                  onChange={(nextValue) => onSetCellEntry(cellIdx, entryIdx, k, nextValue)}
                />
                <button type="button" className="hw-remove hw-remove-cell-field" onClick={() => onRemoveCellEntry(cellIdx, entryIdx)}>
                  🗑
                </button>
              </div>
            ))}
          </div>
        );
      })}
      {!cellList.length && (
        <button type="button" className="secondary hw-add-cell-entry" onClick={() => onAddCellEntry(cellList.length)}>
          {emptyCellLabel}
        </button>
      )}
    </div>
  );
};

export default CellsEditor;
