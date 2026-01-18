import React, { useCallback } from "react";

import {

  baseRepeatedVarOptions,

  cellFieldOptions,

  getCategoryOptionsForSource,

  getOptionalDefaultValue,

  tableArrayFields,

  tableBooleanFields,

  tableOptionalFields,

  repeatedPrayerSources,

} from "../editorConfig.js";

import PassToTableEditor from "./baseTable/PassToTableEditor.jsx";

import RepeatedPrayerVariablesEditor from "./baseTable/RepeatedPrayerVariablesEditor.jsx";

















const BaseTableEditor = ({







  tables,







  heading,







  rowClassOptions,







  baseOptionalSelect,







  setBaseOptionalSelect,







  baseArrayDrafts,







  setBaseArrayDrafts,







  tableRefs,







  baseTablesMenuOpen,







  setBaseTablesMenuOpen,







  setIsDirty,







  setFormData,







  isCategoryFile,







  baseCategoryIndex,







  canUndo,







  canRedo,







  onUndo,







  onRedo,







}) => {







  const updateTable = useCallback(







    (tableIndex, updater) => {







      setFormData((prev) => {







        if (!Array.isArray(prev)) return prev;







        const next = [...prev];







        if (isCategoryFile) {







          const category = { ...(next[baseCategoryIndex] || {}) };







          const catTables = Array.isArray(category.tables) ? [...category.tables] : [];







          catTables[tableIndex] = updater(catTables[tableIndex] || {});







          category.tables = catTables;







          next[baseCategoryIndex] = category;







          return next;







        }







        next[tableIndex] = updater(next[tableIndex] || {});







        return next;







      });







      setIsDirty(true);







    },







    [baseCategoryIndex, isCategoryFile, setFormData, setIsDirty]







  );















  const setTableField = useCallback((tableIndex, field, value) => {







    updateTable(tableIndex, (tbl) => ({ ...tbl, [field]: value }));







  }, [updateTable]);















  const removeTableField = useCallback((tableIndex, field) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      if (field in next) delete next[field];







      return next;







    });







  }, [updateTable]);















  const addOptionalField = useCallback(







    (tableIndex, field) => {







      if (!field) return;







      updateTable(tableIndex, (tbl) => ({ ...tbl, [field]: getOptionalDefaultValue(field) }));







      setBaseOptionalSelect((prev) => ({ ...prev, [tableIndex]: "" }));







    },







    [setBaseOptionalSelect, updateTable]







  );















  const setRowField = useCallback((tableIndex, tbodyIndex, rowIndex, field, value) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







      const tbody = tbodies[tbodyIndex] || { rows: [] };







      const rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];







      rows[rowIndex] = { ...(rows[rowIndex] || {}), [field]: value };







      tbody.rows = rows;







      tbodies[tbodyIndex] = tbody;







      next.tbodies = tbodies;







      return next;







    });







  }, [updateTable]);















  const addTbody = useCallback((tableIndex, position) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







      const newTbody = { rows: [] };







      if (position <= 0) tbodies.unshift(newTbody);







      else if (position >= tbodies.length) tbodies.push(newTbody);







      else tbodies.splice(position, 0, newTbody);







      next.tbodies = tbodies;







      return next;







    });







  }, [updateTable]);















  const removeTbody = useCallback((tableIndex, tbodyIndex) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







      tbodies.splice(tbodyIndex, 1);







      next.tbodies = tbodies;







      return next;







    });







  }, [updateTable]);















  const addRow = useCallback((tableIndex, tbodyIndex, position) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







      const tbody = tbodies[tbodyIndex] || { rows: [] };







      const rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];







      const newRow = { "row-class": rowClassOptions[0] || "", cells: [{ english: "" }] };







      if (position <= 0) rows.unshift(newRow);







      else if (position >= rows.length) rows.push(newRow);







      else rows.splice(position, 0, newRow);







      tbody.rows = rows;







      tbodies[tbodyIndex] = tbody;







      next.tbodies = tbodies;







      return next;







    });







  }, [rowClassOptions, updateTable]);















  const removeRow = useCallback((tableIndex, tbodyIndex, rowIndex) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







      const tbody = tbodies[tbodyIndex] || { rows: [] };







      const rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];







      rows.splice(rowIndex, 1);







      tbody.rows = rows;







      tbodies[tbodyIndex] = tbody;







      next.tbodies = tbodies;







      return next;







    });







  }, [updateTable]);















  const addCellEntry = useCallback((tableIndex, tbodyIndex, rowIndex, cellIndex) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







      const tbody = tbodies[tbodyIndex] || { rows: [] };







      const rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];







      const row = rows[rowIndex] || { "row-class": rowClassOptions[0] || "", cells: [] };







      const cells = Array.isArray(row.cells) ? row.cells.map((c) => ({ ...c })) : [];







      const cell = cells[cellIndex] || {};







      const existingKeys = new Set(Object.keys(cell));







      const firstFree = cellFieldOptions.find((opt) => !existingKeys.has(opt)) || cellFieldOptions[0];







      cell[firstFree] = "";







      cells[cellIndex] = cell;







      row.cells = cells;







      rows[rowIndex] = row;







      tbody.rows = rows;







      tbodies[tbodyIndex] = tbody;







      next.tbodies = tbodies;







      return next;







    });







  }, [rowClassOptions, updateTable]);















  const setCellEntry = useCallback((tableIndex, tbodyIndex, rowIndex, cellIndex, entryIndex, newKey, newValue) => {







    const safeKey = cellFieldOptions.includes(newKey) ? newKey : "english";







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







      const tbody = tbodies[tbodyIndex] || { rows: [] };







      const rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];







      const row = rows[rowIndex] || { cells: [] };







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







      rows[rowIndex] = row;







      tbody.rows = rows;







      tbodies[tbodyIndex] = tbody;







      next.tbodies = tbodies;







      return next;







    });







  }, [updateTable]);















  const removeCellEntry = useCallback(







    (tableIndex, tbodyIndex, rowIndex, cellIndex, entryIndex) => {







      updateTable(tableIndex, (tbl) => {







        const next = { ...tbl };







        const tbodies = Array.isArray(tbl.tbodies) ? tbl.tbodies.map((tb) => ({ ...tb })) : [];







        const tbody = tbodies[tbodyIndex] || { rows: [] };







        const rows = Array.isArray(tbody.rows) ? tbody.rows.map((r) => ({ ...r })) : [];







        const row = rows[rowIndex] || { cells: [] };







        const cells = Array.isArray(row.cells) ? row.cells.map((c) => ({ ...c })) : [];







        const cell = cells[cellIndex] || {};







        const entries = Object.entries(cell);







        entries.splice(entryIndex, 1);







        const rebuilt = entries.reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});







        cells[cellIndex] = rebuilt;







        row.cells = cells;







        rows[rowIndex] = row;







        tbody.rows = rows;







        tbodies[tbodyIndex] = tbody;







        next.tbodies = tbodies;







        return next;







      });







    },







    [updateTable]







  );















  const setRepeatedVariable = useCallback((tableIndex, key, value) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const vars = { ...(tbl.repeated_prayer_variables || {}) };







      if (key === "passToTable.dayOfTheWeek") {







        const pass = { ...(vars.passToTable || {}) };







        pass.dayOfTheWeek = value;







        vars.passToTable = pass;







      } else {







        vars[key] = value;







      }







      next.repeated_prayer_variables = vars;







      return next;







    });







  }, [updateTable]);















  const removeRepeatedVariable = useCallback((tableIndex, key) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      if (next.repeated_prayer_variables) {







        const vars = { ...next.repeated_prayer_variables };







        if (key.startsWith("passToTable.") && vars.passToTable) {







          const subKey = key.replace("passToTable.", "");







          const pass = { ...vars.passToTable };







          delete pass[subKey];







          vars.passToTable = pass;







        } else if (key === "passToTable") {







          delete vars.passToTable;







        } else {







          delete vars[key];







        }







        next.repeated_prayer_variables = vars;







      }







      return next;







    });







  }, [updateTable]);















  const setRepeatedPassToTable = useCallback((tableIndex, key, value) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const vars = { ...(tbl.repeated_prayer_variables || {}) };







      const pass = { ...(vars.passToTable || {}) };







      pass[key] = value;







      vars.passToTable = pass;







      next.repeated_prayer_variables = vars;







      return next;







    });







  }, [updateTable]);















  const removeRepeatedPassToTable = useCallback((tableIndex, key) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const vars = { ...(tbl.repeated_prayer_variables || {}) };







      if (vars.passToTable) {







        const pass = { ...vars.passToTable };







        delete pass[key];







        vars.passToTable = pass;







        next.repeated_prayer_variables = vars;







      }







      return next;







    });







  }, [updateTable]);















  const setPassToTable = useCallback((tableIndex, key, value) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      const pass = { ...(tbl.passToTable || {}) };







      pass[key] = value;







      next.passToTable = pass;







      return next;







    });







  }, [updateTable]);















  const removePassToTable = useCallback((tableIndex, key) => {







    updateTable(tableIndex, (tbl) => {







      const next = { ...tbl };







      if (next.passToTable) {







        const pass = { ...next.passToTable };







        delete pass[key];







        next.passToTable = pass;







      }







      return next;







    });







  }, [updateTable]);















  const getValueType = useCallback(







    (key, value) => {







      if (Array.isArray(value)) return "array";







      if (tableArrayFields.includes(key)) return "array";







      if (typeof value === "boolean") return "boolean";







      if (tableBooleanFields.includes(key)) return "boolean";







      return "string";







    },







    []







  );















  if (!Array.isArray(tables)) return null;















  return (







    <div className="hw-tables">







      <div className="hw-tables-header">







        <div className="hw-table-header-left">







          <h4>{heading || "Tables"}</h4>







          <button type="button" className="secondary hw-table-menu-toggle" onClick={() => setBaseTablesMenuOpen((prev) => !prev)}>







            Tables menu







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







        <div className={`hw-table-buttons ${baseTablesMenuOpen ? "open" : ""}`}>







          {tables.map((tbl, idx) => {







            const label =







              tbl?.english_title ||







              tbl?.repeated_prayer_title ||







              tbl?.repeated_prayer_placement ||







              tbl?.title ||







              tbl?.link ||







              `Table ${idx + 1}`;







            return (







              <button







                key={`tbl-btn-${idx}`}







                type="button"







                className="secondary"







                onClick={() => {







                  tableRefs.current[idx]?.scrollIntoView({ behavior: "smooth" });







                  setBaseTablesMenuOpen(false);







                }}







              >







                {label}







              </button>







            );







          })}







        </div>







      </div>







      <div className="hw-table-list">







        {tables.map((tbl, idx) => {







          const label =







            tbl?.english_title ||







            tbl?.repeated_prayer_title ||







            tbl?.repeated_prayer_placement ||







            tbl?.title ||







            tbl?.link ||







            `Table ${idx + 1}`;







          const optionalKey = `base-${idx}`;







          const optionalChoices = tableOptionalFields.filter((f) => tbl?.[f] === undefined);







          const optionalSelected = baseOptionalSelect[optionalKey] || optionalChoices[0] || "";







          const tbodiesList = Array.isArray(tbl?.tbodies) && tbl.tbodies.length ? tbl.tbodies : [{ rows: [] }];







          const isRepeatedPlacement = "repeated_prayer_placement" in (tbl || {});







          const isRepeatedTitle = "repeated_prayer_title" in (tbl || {});







          const isLink = "link" in (tbl || {});







          const isPlaceholder = isRepeatedPlacement || isRepeatedTitle || isLink;







          const existingRepVars = tbl?.repeated_prayer_variables || {};







          const repVarKeyOptions = ["season", "passToTable", ...tableOptionalFields];







          const repVarChoices = repVarKeyOptions.filter((key) => {







            if (key === "season") return existingRepVars.season === undefined;







            if (key === "passToTable") return existingRepVars.passToTable === undefined;







            return existingRepVars[key] === undefined;







          });







          const repVarSelected = baseOptionalSelect[`rep-${idx}`] || repVarChoices[0] || "";







          const placementChoices = tbl?.passToTable?.dayOfTheWeek === undefined ? ["passToTable.dayOfTheWeek"] : [];







          const placementSelected = baseOptionalSelect[`placement-${idx}`] || placementChoices[0] || "";







          const passKeyOptions = tableOptionalFields;







          const passKeyDraft = baseOptionalSelect[`passKey-${idx}`] || passKeyOptions[0] || "";















          const renderPassToTable = () => {







            const entries = Object.entries(tbl?.passToTable || {});







            return (







              <div className="hw-repeated-vars">







                <div className="muted">passToTable</div>







                {entries.map(([k, v]) => {







                  const valueType = getValueType(k, v);







                  const isArray = valueType === "array";







                  const isBool = valueType === "boolean";







                  const draftKey = `pass-${idx}-${k}`;







                  const draftVal = baseArrayDrafts[draftKey] || "";







                  const addChip = () => {







                    const nextVal = draftVal.trim();







                    if (!nextVal) return;







                    const arr = Array.isArray(v) ? v : [];







                    setPassToTable(idx, k, [...arr, nextVal]);







                    setBaseArrayDrafts((prev) => ({ ...prev, [draftKey]: "" }));







                  };







                  if (isBool) {







                    return (







                      <label key={k} className="hw-field-with-remove hw-checkbox-inline">







                        <span>{`passToTable.${k}`}</span>







                        <input







                          type="checkbox"







                          checked={Boolean(v)}







                          onChange={(e) => setPassToTable(idx, k, e.target.checked)}







                        />







                        <button type="button" className="hw-remove" onClick={() => removePassToTable(idx, k)}>







                          dY-`







                        </button>







                      </label>







                    );







                  }







                  if (isArray) {







                    return (







                      <div key={k} className="hw-array-field">







                        <div className="hw-array-label">







                          <span>{`passToTable.${k}`}</span>







                          <button type="button" className="hw-remove" onClick={() => removePassToTable(idx, k)}>







                            dY-`







                          </button>







                        </div>







                        <div className="hw-chips">







                          {v.map((val, chipIdx) => (







                            <span key={`${k}-${chipIdx}`} className="chip">







                              {val}







                              <button







                                type="button"







                                className="chip-remove"







                                onClick={() => setPassToTable(idx, k, v.filter((_, i) => i !== chipIdx))}







                              >







                                A-







                              </button>







                            </span>







                          ))}







                        </div>







                        <div className="hw-chip-input">







                          <input







                            value={draftVal}







                            placeholder={`Add ${k}`}







                            onChange={(e) => setBaseArrayDrafts((prev) => ({ ...prev, [draftKey]: e.target.value }))}







                            onKeyDown={(e) => {







                              if (e.key === "Enter") {







                                e.preventDefault();







                                addChip();







                              }







                            }}







                          />







                          <button type="button" className="secondary" onClick={addChip}>







                            Add







                          </button>







                        </div>







                      </div>







                    );







                  }







                  return (







                    <label key={k} className="hw-field-with-remove hw-field-inline">







                      <span>{`passToTable.${k}`}</span>







                      <input







                        value={v == null ? "" : String(v)}







                        onChange={(e) => setPassToTable(idx, k, e.target.value)}







                      />







                      <button type="button" className="hw-remove" onClick={() => removePassToTable(idx, k)}>







                        dY-`







                      </button>







                    </label>







                  );







                })}







                <div className="hw-optional">







                  <select







                    value={passKeyDraft}







                    onChange={(e) => setBaseOptionalSelect((prev) => ({ ...prev, [`passKey-${idx}`]: e.target.value }))}







                  >







                    {passKeyOptions.map((opt) => (







                      <option key={opt} value={opt}>







                        {opt}







                      </option>







                    ))}







                  </select>







                  <button







                    type="button"







                    className="secondary"







                    onClick={() => {







                      const key = (passKeyDraft || "").trim();







                      if (!key) return;







                      const type = getValueType(key);







                      const defaultVal = type === "array" ? [] : type === "boolean" ? false : "";







                      setPassToTable(idx, key, defaultVal);







                      setBaseOptionalSelect((prev) => ({ ...prev, [`passKey-${idx}`]: "" }));







                    }}







                  >







                    Add passToTable key







                  </button>







                </div>







              </div>







            );







          };















          const renderOptionalInput = (field) => {







            const value = tbl?.[field];







            const isBool = tableBooleanFields.includes(field);







            const isArray = tableArrayFields.includes(field);







            if (isBool) {







              return (







                <label key={field} className="hw-field-with-remove hw-checkbox-inline">







                  <span>{field}</span>







                  <input







                    type="checkbox"







                    checked={Boolean(value)}







                    onChange={(e) => setTableField(idx, field, e.target.checked)}







                  />







                  <button type="button" className="hw-remove" onClick={() => removeTableField(idx, field)}>







                    🗑







                  </button>







                </label>







              );







            }







            if (isArray) {







              const arr = Array.isArray(value) ? value : [];







              const draftKey = `base-${idx}-${field}`;







              const draftValue = baseArrayDrafts[draftKey] || "";







              const addValue = () => {







                const nextVal = draftValue.trim();







                if (!nextVal) return;







                setTableField(idx, field, [...arr, nextVal]);







                setBaseArrayDrafts((prev) => ({ ...prev, [draftKey]: "" }));







              };







              return (







                <div key={field} className="hw-array-field">







                  <div className="hw-array-label">







                    <span>{field}</span>







                    <button type="button" className="hw-remove" onClick={() => removeTableField(idx, field)}>







                      🗑







                    </button>







                  </div>







                  <div className="hw-chips">







                    {arr.map((val, chipIdx) => (







                      <span key={`${field}-${chipIdx}`} className="chip">







                        {val}







                        <button







                          type="button"







                          className="chip-remove"







                          onClick={() => setTableField(idx, field, arr.filter((_, i) => i !== chipIdx))}







                        >







                          ×







                        </button>







                      </span>







                    ))}







                  </div>







                  <div className="hw-chip-input">







                    <input







                      value={draftValue}







                      placeholder="Add value"







                      onChange={(e) => setBaseArrayDrafts((prev) => ({ ...prev, [draftKey]: e.target.value }))}







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







              <label key={field} className="hw-field-with-remove hw-field-inline">







                <span>{field}</span>







                <input value={value == null ? "" : String(value)} onChange={(e) => setTableField(idx, field, e.target.value)} />







                <button type="button" className="hw-remove" onClick={() => removeTableField(idx, field)}>







                  🗑







                </button>







              </label>







            );







          };















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







                    {tableOptionalFields.map((field) => (tbl?.[field] === undefined ? null : renderOptionalInput(field)))}







                    {optionalChoices.length > 0 && (







                      <div className="hw-optional">







                        <select







                          value={optionalSelected}







                          onChange={(e) => setBaseOptionalSelect((prev) => ({ ...prev, [optionalKey]: e.target.value }))}







                        >







                          {optionalChoices.map((f) => (







                            <option key={f} value={f}>







                              {f}







                            </option>







                          ))}







                        </select>







                        <button







                          type="button"







                          className="secondary"







                          onClick={() => addOptionalField(idx, optionalSelected || optionalChoices[0])}







                        >







                          Add variable







                        </button>







                      </div>







                    )}







                  </>







                )}







                {isRepeatedTitle && (







                  <>







                    <label>







                      repeated_prayer_title







                      <input value={tbl?.repeated_prayer_title || ""} onChange={(e) => setTableField(idx, "repeated_prayer_title", e.target.value)} />







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







                                      <RepeatedPrayerVariablesEditor

                    variables={tbl?.repeated_prayer_variables || {}}

                    onChangeVar={(key, val) => setRepeatedVariable(idx, key, val)}

                    onRemoveVar={(key) => removeRepeatedVariable(idx, key)}

                    onChangePass={(key, val) => setRepeatedPassToTable(idx, key, val)}

                    onRemovePass={(key) => removeRepeatedPassToTable(idx, key)}

                    addVarOptions={repVarKeyOptions}

                    arrayKeys={tableArrayFields}

                    boolKeys={tableBooleanFields}

                  />

                  </>







                )}







                {isRepeatedPlacement && (



                  <>



                    <label>



                      repeated_prayer_placement



                      <input value={tbl?.repeated_prayer_placement || ""} onChange={(e) => setTableField(idx, "repeated_prayer_placement", e.target.value)} />



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



                    <RepeatedPrayerVariablesEditor



                      variables={tbl?.repeated_prayer_variables || {}}



                      onChangeVar={(key, val) => setRepeatedVariable(idx, key, val)}



                      onRemoveVar={(key) => removeRepeatedVariable(idx, key)}



                      onChangePass={(key, val) => setRepeatedPassToTable(idx, key, val)}



                      onRemovePass={(key) => removeRepeatedPassToTable(idx, key)}



                      addVarOptions={repVarKeyOptions}



                      arrayKeys={tableArrayFields}



                      boolKeys={tableBooleanFields}



                    />



                  </>



                )}





                {isLink && (








                  <>







                    <label>







                      link







                      <input value={tbl?.link || ""} onChange={(e) => setTableField(idx, "link", e.target.value)} />







                    </label>







                    <PassToTableEditor

                    data={tbl?.passToTable || {}}

                    onChange={(key, val) => setPassToTable(idx, key, val)}

                    onRemove={(key) => removePassToTable(idx, key)}

                    addKeyOptions={tableOptionalFields}

                    arrayKeys={tableArrayFields}

                    boolKeys={tableBooleanFields}

                  />







                  </>







                )}







              </div>















              {!isPlaceholder && (







                <div className="hw-tbody-list">







                  {tbodiesList.map((tbody, tbodyIdx) => {







                    const rows = tbody?.rows || [];







                    return (







                      <div key={`tbody-${tbodyIdx}`} className="hw-tbody black-bg">







                        <div className="hw-tbody-title">







                          <button







                            type="button"







                            className="hw-remove hw-remove-tbody"







                            title="Delete tbody"







                            onClick={() => removeTbody(idx, tbodyIdx)}







                          >







                            🗑







                          </button>







                          <div className="hw-tbody-label">Tbody {tbodyIdx + 1}</div>







                          <button type="button" className="secondary hw-add-row inline" onClick={() => addTbody(idx, tbodyIdx)}>







                            + Tbody ▴







                          </button>







                        </div>







                        {rows.map((row, rowIdx) => (







                          <div key={`row-${rowIdx}`} className="hw-row">







                            <div className="hw-row-header">







                              <button







                                type="button"







                                className="hw-remove hw-remove-row"







                                title="Delete row"







                                onClick={() => removeRow(idx, tbodyIdx, rowIdx)}







                              >







                                🗑







                              </button>







                              <label>







                                row-class







                                <select







                                  value={row?.["row-class"] || rowClassOptions[0] || ""}







                                  onChange={(e) => setRowField(idx, tbodyIdx, rowIdx, "row-class", e.target.value)}







                                >







                                  {rowClassOptions.map((opt) => (







                                    <option key={opt} value={opt}>







                                      {opt}







                                    </option>







                                  ))}







                                </select>







                              </label>







                              <button type="button" className="secondary hw-add-row inline" onClick={() => addRow(idx, tbodyIdx, rowIdx)}>







                                + Row ▴







                              </button>







                            </div>







                            <div className="hw-cells">







                              {(row?.cells || []).map((cell, cellIdx) => {







                                const entries = Object.entries(cell || {});







                                const displayEntries = entries.length ? entries : [["english", ""]];







                                return (







                                  <div key={`cell-${cellIdx}`} className="hw-cell">







                                    <div className="hw-cell-title">Cell {cellIdx + 1}</div>







                                    {displayEntries.map(([k, v], entryIdx) => (







                                      <div key={`cell-entry-${entryIdx}`} className="hw-cell-entry">







                                        <select value={k} onChange={(e) => setCellEntry(idx, tbodyIdx, rowIdx, cellIdx, entryIdx, e.target.value, v)}>







                                          {cellFieldOptions.map((opt) => (







                                            <option key={opt} value={opt}>







                                              {opt}







                                            </option>







                                          ))}







                                        </select>







                                        <input value={v ?? ""} onChange={(e) => setCellEntry(idx, tbodyIdx, rowIdx, cellIdx, entryIdx, k, e.target.value)} />







                                        <button type="button" className="hw-remove hw-remove-cell-field" onClick={() => removeCellEntry(idx, tbodyIdx, rowIdx, cellIdx, entryIdx)}>







                                          🗑







                                        </button>







                                      </div>







                                    ))}







                                    <button type="button" className="secondary hw-add-cell-entry" onClick={() => addCellEntry(idx, tbodyIdx, rowIdx, cellIdx)}>







                                      + Cell







                                    </button>







                                  </div>







                                );







                              })}







                              {!(row?.cells || []).length && (







                                <button type="button" className="secondary hw-add-cell-entry" onClick={() => addCellEntry(idx, tbodyIdx, rowIdx, (row?.cells || []).length)}>







                                  Add cell field







                                </button>







                              )}







                            </div>







                          </div>







                        ))}







                        {rows.length > 0 && (







                          <div className="hw-row-footer">







                            <button type="button" className="secondary hw-add-row" onClick={() => addRow(idx, tbodyIdx, rows.length)}>







                              + Row ▾







                            </button>







                          </div>







                        )}







                        {!rows.length && (







                          <div className="hw-row-footer">







                            <button type="button" className="secondary hw-add-row" onClick={() => addRow(idx, tbodyIdx, 0)}>







                              + Row







                            </button>







                          </div>







                        )}







                      </div>







                    );







                  })}







                  <div className="hw-row-footer">







                    <button type="button" className="secondary hw-add-row" onClick={() => addTbody(idx, tbodiesList.length)}>







                      + Tbody ▾







                    </button>







                  </div>







                </div>







              )}







            </div>







          );







        })}







      </div>







    </div>







  );







};















export default BaseTableEditor;








