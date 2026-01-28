import React, { useEffect, useMemo, useState } from "react";
import CellsEditor from "./CellsEditor.jsx";
import RowFieldsEditor from "./RowFieldsEditor.jsx";
import { rowArrayFields, rowBooleanFields, rowFieldLabels, rowOptionalFields } from "../../editorConfig.js";

const RowEditor = ({
  row,
  rowClassOptions,
  onRemoveRow,
  onAddRowAbove,
  onRowClassChange,
  onSetRowField,
  onRemoveRowField,
  onAddCellEntry,
  onSetCellEntry,
  onRemoveCellEntry,
  addRowAboveLabel = "+ Row",
  removeRowLabel = "🗑",
  addCellLabel = "Add cell field",
  emptyCellLabel = "Add cell field",
}) => {
  const optionalChoices = useMemo(
    () => rowOptionalFields.filter((f) => row?.[f] === undefined),
    [row]
  );
  const [selectedOptional, setSelectedOptional] = useState("");

  useEffect(() => {
    setSelectedOptional("");
  }, [optionalChoices]);

  const addOptionalField = () => {
    const field = selectedOptional;
    if (!field) return;
    const defaultValue = rowBooleanFields.includes(field)
      ? false
      : rowArrayFields.includes(field)
        ? []
        : "";
    onSetRowField(field, defaultValue);
    setSelectedOptional("");
  };

  return (
    <div className="hw-row">
      <div className="hw-row-header">
        <button type="button" className="hw-remove hw-remove-row" title="Delete row" onClick={onRemoveRow}>
          {removeRowLabel}
        </button>
        <label className="hw-row-class">
          <span>{rowFieldLabels?.["row-class"] || "row-class"}</span>
          <select value={row?.["row-class"] || rowClassOptions[0] || ""} onChange={(e) => onRowClassChange(e.target.value)}>
            {rowClassOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
        {optionalChoices.length > 0 && (
          <div className="hw-row-add-field">
            <select value={selectedOptional} onChange={(e) => setSelectedOptional(e.target.value)}>
              <option value="" disabled>
                Choose a field
              </option>
              {optionalChoices.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
            <button type="button" className="secondary hw-add-row-field-btn" onClick={addOptionalField}>
              Add row field
            </button>
          </div>
        )}
        <button type="button" className="hw-add-row inline" onClick={onAddRowAbove}>
          {addRowAboveLabel}
        </button>
      </div>

      <RowFieldsEditor row={row} onSetField={onSetRowField} onRemoveField={onRemoveRowField} />

      <CellsEditor
        cells={row?.cells || []}
        onAddCellEntry={onAddCellEntry}
        onSetCellEntry={onSetCellEntry}
        onRemoveCellEntry={onRemoveCellEntry}
        addCellLabel={addCellLabel}
        emptyCellLabel={emptyCellLabel}
      />
    </div>
  );
};

export default RowEditor;
