import React, { useCallback } from "react";
import {
  cellFieldOptions,
  getCategoryOptionsForSource,
  getOptionalDefaultValue,
  repeatedPrayerSources,
} from "../editorConfig.js";
import RowEditor from "./baseTable/RowEditor.jsx";

const HolyWeekEditor = ({
  formData,
  setFormData,
  rowClassOptions,
  tableOptionalFields,
  repeatedVarOptions,
  hwServiceIndex,
  setHwServiceIndex,
  hwHourIndex,
  setHwHourIndex,
  hwSectionIndex,
  setHwSectionIndex,
  hwOptionalSelect,
  setHwOptionalSelect,
  hwTablesMenuOpen,
  setHwTablesMenuOpen,
  holyWeekSelection,
  tableRefs,
  setIsDirty,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
}) => {
  const updateHolyWeekTable = useCallback(
    (tableIndex, updater) => {
      setFormData((prev) => {
        if (!Array.isArray(prev)) return prev;
        const next = [...prev];
        next[hwServiceIndex] = { ...(next[hwServiceIndex] || {}) };
        const nextService = next[hwServiceIndex];
        nextService.hours = Array.isArray(nextService.hours) ? [...nextService.hours] : [];
        nextService.hours[hwHourIndex] = { ...(nextService.hours[hwHourIndex] || {}) };
        const nextHour = nextService.hours[hwHourIndex];
        nextHour.sections = Array.isArray(nextHour.sections) ? [...nextHour.sections] : [];
        nextHour.sections[hwSectionIndex] = { ...(nextHour.sections[hwSectionIndex] || {}) };
        const section = nextHour.sections[hwSectionIndex];
        section.tables = Array.isArray(section.tables) ? [...section.tables] : [];
        section.tables[tableIndex] = updater(section.tables[tableIndex] || {});
        return next;
      });
      setIsDirty(true);
    },
    [hwHourIndex, hwSectionIndex, hwServiceIndex, setFormData, setIsDirty]
  );

  const setTableField = useCallback(
    (tableIndex, field, value) => {
      updateHolyWeekTable(tableIndex, (tbl) => ({ ...tbl, [field]: value }));
    },
    [updateHolyWeekTable]
  );

  const removeTableField = useCallback(
    (tableIndex, field) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        if (field in next) delete next[field];
        return next;
      });
    },
    [updateHolyWeekTable]
  );

  const addOptionalTableField = useCallback(
    (tableIndex, field) => {
      if (!field) return;
      updateHolyWeekTable(tableIndex, (tbl) => ({ ...tbl, [field]: getOptionalDefaultValue(field) }));
      setHwOptionalSelect((prev) => ({ ...prev, [tableIndex]: "" }));
    },
    [setHwOptionalSelect, updateHolyWeekTable]
  );

  const setRowField = useCallback(
    (tableIndex, tbodyIndex, rowIndex, field, value) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        const tbody = next.tbodies[tbodyIndex] || { rows: [] };
        tbody.rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];
        const row = { ...(tbody.rows[rowIndex] || {}) };
        row[field] = value;
        tbody.rows[rowIndex] = row;
        next.tbodies[tbodyIndex] = tbody;
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  const removeRowField = useCallback(
    (tableIndex, tbodyIndex, rowIndex, field) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        const tbody = next.tbodies[tbodyIndex] || { rows: [] };
        tbody.rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];
        const row = { ...(tbody.rows[rowIndex] || {}) };
        if (field in row) delete row[field];
        tbody.rows[rowIndex] = row;
        next.tbodies[tbodyIndex] = tbody;
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  const addCellEntry = useCallback(
    (tableIndex, tbodyIndex, rowIndex, cellIndex) => {
      const chosenKey =
        cellFieldOptions.find(
          (opt) =>
            !(formData?.[hwServiceIndex]?.hours?.[hwHourIndex]?.sections?.[hwSectionIndex]?.tables?.[tableIndex]?.tbodies?.[tbodyIndex]?.rows?.[rowIndex]?.cells?.[cellIndex] || {})[opt]
        ) || cellFieldOptions[0];
      setCellEntry(tableIndex, tbodyIndex, rowIndex, cellIndex, Number.MAX_SAFE_INTEGER, chosenKey, "");
    },
    [formData, hwHourIndex, hwSectionIndex, hwServiceIndex]
  );

  const addRow = useCallback(
    (tableIndex, tbodyIndex, position) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        const tbody = next.tbodies[tbodyIndex] || { rows: [] };
        const rows = Array.isArray(tbody.rows) ? [...tbody.rows.map((r) => ({ ...r }))] : [];
        const newRow = { "row-class": rowClassOptions[0] || "", cells: [{ english: "" }] };
        if (position <= 0) {
          rows.unshift(newRow);
        } else if (position >= rows.length) {
          rows.push(newRow);
        } else {
          rows.splice(position, 0, newRow);
        }
        tbody.rows = rows;
        next.tbodies[tbodyIndex] = tbody;
        return next;
      });
      setIsDirty(true);
    },
    [rowClassOptions, setIsDirty, updateHolyWeekTable]
  );

  const removeTbody = useCallback(
    (tableIndex, tbodyIndex) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        next.tbodies.splice(tbodyIndex, 1);
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  const addTbody = useCallback(
    (tableIndex, position) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        const newTbody = { rows: [] };
        if (position <= 0) {
          next.tbodies.unshift(newTbody);
        } else if (position >= next.tbodies.length) {
          next.tbodies.push(newTbody);
        } else {
          next.tbodies.splice(position, 0, newTbody);
        }
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  const removeRow = useCallback(
    (tableIndex, tbodyIndex, rowIndex) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        const tbody = next.tbodies[tbodyIndex] || { rows: [] };
        const rows = Array.isArray(tbody.rows) ? [...tbody.rows] : [];
        rows.splice(rowIndex, 1);
        tbody.rows = rows;
        next.tbodies[tbodyIndex] = tbody;
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  const removeCellEntry = useCallback(
    (tableIndex, tbodyIndex, rowIndex, cellIndex, entryIndex) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        const tbody = next.tbodies[tbodyIndex] || { rows: [] };
        tbody.rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];
        const row = tbody.rows[rowIndex] || {};
        const cells = Array.isArray(row.cells) ? row.cells.map((c) => ({ ...c })) : [];
        const cell = cells[cellIndex] || {};
        const entries = Object.entries(cell);
        entries.splice(entryIndex, 1);
        const rebuilt = entries.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
        cells[cellIndex] = rebuilt;
        row.cells = cells;
        tbody.rows[rowIndex] = row;
        next.tbodies[tbodyIndex] = tbody;
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  const setCellEntry = useCallback(
    (tableIndex, tbodyIndex, rowIndex, cellIndex, entryIndex, newKey, newValue) => {
      const safeKey = cellFieldOptions.includes(newKey) ? newKey : "english";
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        next.tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];
        const tbody = next.tbodies[tbodyIndex] || { rows: [] };
        tbody.rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];
        const row = tbody.rows[rowIndex] || {};
        const cells = Array.isArray(row.cells) ? row.cells.map((c) => ({ ...c })) : [];
        const cell = cells[cellIndex] || {};
        const entries = Object.entries(cell);
        if (entryIndex < entries.length) {
          entries[entryIndex] = [safeKey, newValue];
        } else {
          entries.push([safeKey, newValue]);
        }
        const rebuilt = entries.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
        cells[cellIndex] = rebuilt;
        row.cells = cells;
        tbody.rows[rowIndex] = row;
        next.tbodies[tbodyIndex] = tbody;
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );


  const setRepeatedVariable = useCallback(
    (tableIndex, key, value) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        const vars = { ...(tbl.repeated_prayer_variables || {}) };
        vars[key] = value;
        next.repeated_prayer_variables = vars;
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  const removeRepeatedVariable = useCallback(
    (tableIndex, key) => {
      updateHolyWeekTable(tableIndex, (tbl) => {
        const next = { ...tbl };
        if (next.repeated_prayer_variables) {
          const vars = { ...next.repeated_prayer_variables };
          delete vars[key];
          next.repeated_prayer_variables = vars;
        }
        return next;
      });
      setIsDirty(true);
    },
    [setIsDirty, updateHolyWeekTable]
  );

  return (
    <div className="holyweek">
      <div className="hw-selects">
        <label>
          Service
          <select
            value={hwServiceIndex}
            onChange={(e) => {
              const next = Number(e.target.value);
              setHwServiceIndex(next);
              setHwHourIndex(0);
              setHwSectionIndex(0);
            }}
          >
            {(formData || []).map((svc, idx) => (
              <option key={`svc-${idx}`} value={idx}>
                {svc?.service?.[0] || `Service ${idx + 1}`}
              </option>
            ))}
          </select>
        </label>
        <label>
          Hour
          <select
            value={hwHourIndex}
            onChange={(e) => {
              const next = Number(e.target.value);
              setHwHourIndex(next);
              setHwSectionIndex(0);
            }}
          >
            {(holyWeekSelection.hours || []).map((hr, idx) => (
              <option key={`hr-${idx}`} value={idx}>
                {hr?.hour?.[0] || `Hour ${idx + 1}`}
              </option>
            ))}
          </select>
        </label>
        <label>
          Section
          <select value={hwSectionIndex} onChange={(e) => setHwSectionIndex(Number(e.target.value))}>
            {(holyWeekSelection.sections || []).map((sec, idx) => (
              <option key={`sec-${idx}`} value={idx}>
                {sec?.title || `Section ${idx + 1}`}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="hw-tables">
        <div className="hw-tables-header">
          <div className="hw-table-header-left">
            <h4>{holyWeekSelection.section?.title || "Section"} tables</h4>
            <button
              type="button"
              className="secondary hw-table-menu-toggle"
              onClick={() => setHwTablesMenuOpen((prev) => !prev)}
            >
              Tables
            </button>
          </div>
          <div className="hw-table-header-actions">
            <button type="button" className="secondary" onClick={onUndo} disabled={!canUndo} title="Undo">
              ⟲
            </button>
            <button type="button" className="secondary" onClick={onRedo} disabled={!canRedo} title="Redo">
              ⟳
            </button>
          </div>
          <div className={`hw-table-buttons ${hwTablesMenuOpen ? "open" : ""}`}>
            {(holyWeekSelection.section?.tables || []).map((tbl, idx) => {
              const label = tbl?.english_title || tbl?.repeated_prayer_title || tbl?.title || `Table ${idx + 1}`;
              return (
                <button
                  key={`tbl-btn-${idx}`}
                  type="button"
                  className="secondary"
                  onClick={() => {
                    tableRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });
                    setHwTablesMenuOpen(false);
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="hw-table-list">
          {(holyWeekSelection.section?.tables || []).map((tbl, idx) => {
            const label = tbl?.english_title || tbl?.repeated_prayer_title || tbl?.title || `Table ${idx + 1}`;
            const optionalKey = `table-${idx}`;
            const optionalChoices = tableOptionalFields.filter((f) => tbl?.[f] === undefined);
            const optionalSelected = hwOptionalSelect[optionalKey] || "";
            const isPlaceholder = Boolean(tbl?.repeated_prayer_title);
            return (
              <div
                key={`tbl-${idx}`}
                className="hw-table-card"
                ref={(el) => {
                  tableRefs.current[idx] = el;
                }}
              >
                <div className="hw-table-card-header">
                  <strong>{label}</strong>
                  <span className="muted">#{idx + 1}</span>
                </div>
                <div className="hw-table-fields">
                  {!isPlaceholder && (
                    <>
                      <label>
                        English title
                        <input
                          value={tbl?.english_title || ""}
                          onChange={(e) => setTableField(idx, "english_title", e.target.value)}
                          placeholder="Required"
                        />
                      </label>
                      {["coptic_title", "arabic_title", "title", "explanation_button", "image_button", "caption_class"].map(
                        (field) =>
                          tbl?.[field] === undefined ? null : (
                            <label key={field} className="hw-field-with-remove">
                              <span>{field}</span>
                              <input value={tbl?.[field] ?? ""} onChange={(e) => setTableField(idx, field, e.target.value)} />
                              <button type="button" className="hw-remove" onClick={() => removeTableField(idx, field)}>
                                -
                              </button>
                            </label>
                          )
                      )}
                      {tbl?.nonTraditionalPascha !== undefined && (
                        <label className="hw-checkbox">
                          <input
                            type="checkbox"
                            checked={Boolean(tbl.nonTraditionalPascha)}
                            onChange={(e) => setTableField(idx, "nonTraditionalPascha", e.target.checked)}
                          />
                          nonTraditionalPascha
                          <button type="button" className="hw-remove" onClick={() => removeTableField(idx, "nonTraditionalPascha")}>
                            -
                          </button>
                        </label>
                      )}
                      {optionalChoices.length > 0 && (
                        <div className="hw-optional">
                          <select
                            value={optionalSelected}
                            onChange={(e) => setHwOptionalSelect((prev) => ({ ...prev, [optionalKey]: e.target.value }))}
                          >
                            <option value="" disabled>
                              Choose a field
                            </option>
                            {optionalChoices.map((f) => (
                              <option key={f} value={f}>
                                {f}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => addOptionalTableField(idx, optionalSelected)}
                          >
                            Add variable
                          </button>
                        </div>
                      )}
                    </>
                  )}
                  {isPlaceholder && (
                    <>
                      <label>
                        repeated_prayer_title
                        <input
                          value={tbl?.repeated_prayer_title || ""}
                          onChange={(e) => setTableField(idx, "repeated_prayer_title", e.target.value)}
                        />
                      </label>
                      <label>
                        source
                        <select value={tbl?.source || ""} onChange={(e) => setTableField(idx, "source", e.target.value)}>
                          <option value="">Select source</option>
                          {repeatedPrayerSources.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                          {tbl?.source && !repeatedPrayerSources.find((s) => s.value === tbl.source) && (
                            <option value={tbl.source}>{tbl.source}</option>
                          )}
                        </select>
                      </label>
                      <label>
                        category
                        <select value={tbl?.category || ""} onChange={(e) => setTableField(idx, "category", e.target.value)}>
                          <option value="">Select category</option>
                          {getCategoryOptionsForSource(tbl?.source).map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                          {tbl?.category && !getCategoryOptionsForSource(tbl?.source).includes(tbl.category) && (
                            <option value={tbl.category}>{tbl.category}</option>
                          )}
                        </select>
                      </label>
                      <div className="hw-repeated-vars">
                        <div className="muted">repeated_prayer_variables</div>
                        {(tbl?.repeated_prayer_variables && Object.entries(tbl.repeated_prayer_variables))?.map(([key, val]) => (
                          <label key={key} className="hw-field-with-remove">
                            <span>{key}</span>
                            <input value={val ?? ""} onChange={(e) => setRepeatedVariable(idx, key, e.target.value)} />
                            <button type="button" className="hw-remove" onClick={() => removeRepeatedVariable(idx, key)}>
                              -
                            </button>
                          </label>
                        ))}
                        <div className="hw-optional">
                          <select
                            value={hwOptionalSelect[`rep-${idx}`] || ""}
                            onChange={(e) => setHwOptionalSelect((prev) => ({ ...prev, [`rep-${idx}`]: e.target.value }))}
                          >
                            <option value="" disabled>
                              Choose a field
                            </option>
                            {repeatedVarOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            className="secondary"
                            onClick={() => setRepeatedVariable(idx, hwOptionalSelect[`rep-${idx}`], "")}
                          >
                            Add variable
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="hw-tbody-list">
                  {(tbl?.tbodies || []).map((tbody, tbodyIdx) => (
                    <div key={`tbody-${tbodyIdx}`} className="hw-tbody">
                      <div className="hw-tbody-title">
                        <button
                          type="button"
                          className="hw-remove hw-remove-tbody"
                          title="Delete tbody"
                          onClick={() => removeTbody(idx, tbodyIdx)}
                        >
                          -
                        </button>
                        <div className="hw-tbody-label">Tbody {tbodyIdx + 1}</div>
                      </div>
                      {(tbody?.rows || []).map((row, rowIdx) => (
                        <RowEditor
                          key={`row-${rowIdx}`}
                          row={row}
                          rowClassOptions={rowClassOptions}
                          onRemoveRow={() => removeRow(idx, tbodyIdx, rowIdx)}
                          onAddRowAbove={() => addRow(idx, tbodyIdx, rowIdx)}
                          onRowClassChange={(value) => setRowField(idx, tbodyIdx, rowIdx, "row-class", value)}
                          onSetRowField={(field, value) => setRowField(idx, tbodyIdx, rowIdx, field, value)}
                          onRemoveRowField={(field) => removeRowField(idx, tbodyIdx, rowIdx, field)}
                          onAddCellEntry={(cellIdx) => addCellEntry(idx, tbodyIdx, rowIdx, cellIdx)}
                          onSetCellEntry={(cellIdx, entryIdx, key, value) =>
                            setCellEntry(idx, tbodyIdx, rowIdx, cellIdx, entryIdx, key, value)
                          }
                          onRemoveCellEntry={(cellIdx, entryIdx) => removeCellEntry(idx, tbodyIdx, rowIdx, cellIdx, entryIdx)}
                          addRowAboveLabel="+ row above"
                          removeRowLabel="-"
                          addCellLabel="Add cell field"
                          emptyCellLabel="Add cell field"
                        />
                      ))}

                      {(tbody?.rows || []).length > 0 && (
                        <div className="hw-row-footer">
                          <button type="button" className="secondary hw-add-row" onClick={() => addRow(idx, tbodyIdx, (tbody?.rows || []).length)}>
                            + row below
                          </button>
                        </div>
                      )}
                      {!((tbody?.rows || []).length > 0) && (
                        <div className="hw-row-footer">
                          <button type="button" className="secondary hw-add-row" onClick={() => addRow(idx, tbodyIdx, 0)}>
                            + row
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="hw-row-footer">
                  <button type="button" className="secondary hw-add-row" onClick={() => addTbody(idx, (tbl?.tbodies || []).length)}>
                    + tbody
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HolyWeekEditor;
