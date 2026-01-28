import React, { useCallback } from "react";
import { cellFieldOptions } from "../editorConfig.js";
import RowEditor from "./baseTable/RowEditor.jsx";

const RowOnlyEditor = ({
  rowOnlyData,
  rowClassOptions,
  setFormData,
  setIsDirty,
}) => {
  const updateRows = useCallback(
    (updater) => {
      setFormData((prev) => {
        if (!Array.isArray(prev)) return prev;
        const next = [...prev];
        next[0] = updater(next[0] || {});
        return next;
      });
      setIsDirty(true);
    },
    [setFormData, setIsDirty]
  );

  const setRowField = useCallback((rowIndex, field, value) => {
    updateRows((root) => {
      const rows = Array.isArray(root.rows) ? root.rows.map((r) => ({ ...r })) : [];
      rows[rowIndex] = { ...(rows[rowIndex] || {}), [field]: value };
      return { ...root, rows };
    });
  }, [updateRows]);

  const addRow = useCallback((position) => {
    updateRows((root) => {
      const rows = Array.isArray(root.rows) ? root.rows.map((r) => ({ ...r })) : [];
      const newRow = { "row-class": rowClassOptions[0] || "", cells: [{ english: "" }] };
      if (position <= 0) rows.unshift(newRow);
      else if (position >= rows.length) rows.push(newRow);
      else rows.splice(position, 0, newRow);
      return { ...root, rows };
    });
  }, [rowClassOptions, updateRows]);

  const removeRow = useCallback((rowIndex) => {
    updateRows((root) => {
      const rows = Array.isArray(root.rows) ? root.rows.map((r) => ({ ...r })) : [];
      rows.splice(rowIndex, 1);
      return { ...root, rows };
    });
  }, [updateRows]);

  const removeField = useCallback((rowIndex, field) => {
    updateRows((root) => {
      const rows = Array.isArray(root.rows) ? root.rows.map((r) => ({ ...r })) : [];
      const row = { ...(rows[rowIndex] || {}) };
      if (field in row) {
        delete row[field];
      }
      rows[rowIndex] = row;
      return { ...root, rows };
    });
  }, [updateRows]);

  const addCellEntry = useCallback((rowIndex, cellIndex) => {
    updateRows((root) => {
      const rows = Array.isArray(root.rows) ? root.rows.map((r) => ({ ...r })) : [];
      const row = rows[rowIndex] || { cells: [] };
      const cells = Array.isArray(row.cells) ? row.cells.map((c) => ({ ...c })) : [];
      const cell = cells[cellIndex] || {};
      const existingKeys = new Set(Object.keys(cell));
      const firstFree = cellFieldOptions.find((opt) => !existingKeys.has(opt)) || cellFieldOptions[0];
      cell[firstFree] = "";
      cells[cellIndex] = cell;
      row.cells = cells;
      rows[rowIndex] = row;
      return { ...root, rows };
    });
  }, [updateRows]);

  const setCellEntry = useCallback((rowIndex, cellIndex, entryIndex, newKey, newValue) => {
    const safeKey = cellFieldOptions.includes(newKey) ? newKey : "english";
    updateRows((root) => {
      const rows = Array.isArray(root.rows) ? root.rows.map((r) => ({ ...r })) : [];
      const row = rows[rowIndex] || { cells: [] };
      const cells = Array.isArray(row.cells) ? row.cells.map((c) => ({ ...c })) : [];
      const cell = cells[cellIndex] || {};
      const entries = Object.entries(cell);
      if (entryIndex < entries.length) entries[entryIndex] = [safeKey, newValue];
      else entries.push([safeKey, newValue]);
      const rebuilt = entries.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
      cells[cellIndex] = rebuilt;
      row.cells = cells;
      rows[rowIndex] = row;
      return { ...root, rows };
    });
  }, [updateRows]);


  const removeCellEntry = useCallback((rowIndex, cellIndex, entryIndex) => {
    updateRows((root) => {
      const rows = Array.isArray(root.rows) ? root.rows.map((r) => ({ ...r })) : [];
      const row = rows[rowIndex] || { cells: [] };
      const cells = Array.isArray(row.cells) ? row.cells.map((c) => ({ ...c })) : [];
      const cell = cells[cellIndex] || {};
      const entries = Object.entries(cell);
      entries.splice(entryIndex, 1);
      const rebuilt = entries.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
      cells[cellIndex] = rebuilt;
      row.cells = cells;
      rows[rowIndex] = row;
      return { ...root, rows };
    });
  }, [updateRows]);

  if (!rowOnlyData) return null;
  const rows = Array.isArray(rowOnlyData.rows) ? rowOnlyData.rows : [];

  return (
    <div className="hw-tables">
      <div className="hw-table-list">
        <div className="hw-table-card">
          <div className="hw-table-card-header">
            <strong>Rows</strong>
            <span className="muted">{rows.length} items</span>
          </div>
          <div className="hw-tbody-list">
            <div className="hw-tbody">
              {rows.map((row, rowIdx) => (
                <RowEditor
                  key={`rowonly-${rowIdx}`}
                  row={row}
                  rowClassOptions={rowClassOptions}
                  onRemoveRow={() => removeRow(rowIdx)}
                  onAddRowAbove={() => addRow(rowIdx)}
                  onRowClassChange={(value) => setRowField(rowIdx, "row-class", value)}
                  onSetRowField={(field, value) => setRowField(rowIdx, field, value)}
                  onRemoveRowField={(field) => removeField(rowIdx, field)}
                  onAddCellEntry={(cellIdx) => addCellEntry(rowIdx, cellIdx)}
                  onSetCellEntry={(cellIdx, entryIdx, key, value) =>
                    setCellEntry(rowIdx, cellIdx, entryIdx, key, value)
                  }
                  onRemoveCellEntry={(cellIdx, entryIdx) => removeCellEntry(rowIdx, cellIdx, entryIdx)}
                  addRowAboveLabel="+ row above"
                  removeRowLabel="-"
                  addCellLabel="Add cell field"
                  emptyCellLabel="Add cell field"
                />
              ))}
{rows.length > 0 && (
                <div className="hw-row-footer">
                  <button type="button" className="secondary hw-add-row" onClick={() => addRow(rows.length)}>
                    + row below
                  </button>
                </div>
              )}
              {!rows.length && (
                <div className="hw-row-footer">
                  <button type="button" className="secondary hw-add-row" onClick={() => addRow(0)}>
                    + row
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowOnlyEditor;
