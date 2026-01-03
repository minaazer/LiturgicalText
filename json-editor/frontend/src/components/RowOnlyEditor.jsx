import React, { useCallback } from "react";
import { cellFieldOptions } from "../editorConfig.js";

const RowOnlyEditor = ({
  rowOnlyData,
  rowClassOptions,
  rowArrayDrafts,
  setRowArrayDrafts,
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
  const rowOptionalFields = ["seasons"];

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
              {rows.map((row, rowIdx) => {
                const otherFields = Object.entries(row || {}).filter(([k]) => k !== "row-class" && k !== "cells");
                const missingOptionals = rowOptionalFields.filter((f) => row?.[f] === undefined);
                return (
                  <div key={`rowonly-${rowIdx}`} className="hw-row">
                    <div className="hw-row-header">
                      <button
                        type="button"
                        className="hw-remove hw-remove-row"
                        title="Delete row"
                        onClick={() => removeRow(rowIdx)}
                      >
                        -
                      </button>
                      <label>
                        row-class
                        <select value={row?.["row-class"] || rowClassOptions[0] || ""} onChange={(e) => setRowField(rowIdx, "row-class", e.target.value)}>
                          {rowClassOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </label>
                      <button type="button" className="secondary hw-add-row inline" onClick={() => addRow(rowIdx)}>
                        + row above
                      </button>
                    </div>

                    {otherFields.map(([key, val]) => {
                      const isArray = Array.isArray(val);
                      if (isArray) {
                        const draftKey = `row-${rowIdx}-${key}`;
                        const arr = val;
                        const draftVal = rowArrayDrafts[draftKey] || "";
                        const addValue = () => {
                          const next = draftVal.trim();
                          if (!next) return;
                          setRowField(rowIdx, key, [...arr, next]);
                          setRowArrayDrafts((prev) => ({ ...prev, [draftKey]: "" }));
                        };
                        return (
                          <div key={key} className="hw-array-field">
                            <div className="hw-array-label">
                              <span>{key}</span>
                              <button type="button" className="hw-remove" onClick={() => removeField(rowIdx, key)}>
                                -
                              </button>
                            </div>
                            <div className="hw-chips">
                              {arr.map((chip, chipIdx) => (
                                <span key={`${key}-${chipIdx}`} className="chip">
                                  {chip}
                                  <button
                                    type="button"
                                    className="chip-remove"
                                    onClick={() => setRowField(rowIdx, key, arr.filter((_, i) => i !== chipIdx))}
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                            <div className="hw-chip-input">
                              <input
                                value={draftVal}
                                placeholder="Add value"
                                onChange={(e) => setRowArrayDrafts((prev) => ({ ...prev, [draftKey]: e.target.value }))}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    e.preventDefault();
                                    addValue();
                                  }
                                }}
                              />
                              <button type="button" className="secondary" onClick={addValue}>
                                Add
                              </button>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <label key={key} className="hw-field-with-remove">
                          <span>{key}</span>
                          <input value={val ?? ""} onChange={(e) => setRowField(rowIdx, key, e.target.value)} />
                          <button type="button" className="hw-remove" onClick={() => removeField(rowIdx, key)}>
                            -
                          </button>
                        </label>
                      );
                    })}

                    {missingOptionals.length > 0 && (
                      <div className="hw-optional">
                        <select onChange={(e) => setRowField(rowIdx, e.target.value, "")} defaultValue="">
                          <option value="" disabled>
                            Add optional field
                          </option>
                          {missingOptionals.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => {
                            const opt = missingOptionals[0];
                            if (opt) setRowField(rowIdx, opt, "");
                          }}
                        >
                          Add field
                        </button>
                      </div>
                    )}

                    <div className="hw-cells">
                      {(row?.cells || []).map((cell, cellIdx) => {
                        const entries = Object.entries(cell || {});
                        const displayEntries = entries.length ? entries : [["english", ""]];
                        return (
                          <div key={`cell-${cellIdx}`} className="hw-cell">
                            <div className="hw-cell-title">Cell {cellIdx + 1}</div>
                            {displayEntries.map(([k, v], entryIdx) => (
                              <div key={`cell-entry-${entryIdx}`} className="hw-cell-entry">
                                <select value={k} onChange={(e) => setCellEntry(rowIdx, cellIdx, entryIdx, e.target.value, v)}>
                                  {cellFieldOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                      {opt}
                                    </option>
                                  ))}
                                </select>
                                <input value={v ?? ""} onChange={(e) => setCellEntry(rowIdx, cellIdx, entryIdx, k, e.target.value)} />
                                <button type="button" className="hw-remove hw-remove-cell-field" onClick={() => removeCellEntry(rowIdx, cellIdx, entryIdx)}>
                                  -
                                </button>
                              </div>
                            ))}
                            <button type="button" className="secondary hw-add-cell-entry" onClick={() => addCellEntry(rowIdx, cellIdx)}>
                              Add cell field
                            </button>
                          </div>
                        );
                      })}
                      {!(row?.cells || []).length && (
                        <button type="button" className="secondary hw-add-cell-entry" onClick={() => addCellEntry(rowIdx, (row?.cells || []).length)}>
                          Add cell field
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
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
