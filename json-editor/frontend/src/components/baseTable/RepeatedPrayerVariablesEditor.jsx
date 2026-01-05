import React, { useMemo, useState } from "react";
import PassToTableEditor from "./PassToTableEditor.jsx";

const getValueType = (key, value, arrayKeys, boolKeys) => {
  if (Array.isArray(value)) return "array";
  if (arrayKeys.includes(key)) return "array";
  if (typeof value === "boolean") return "boolean";
  if (boolKeys.includes(key)) return "boolean";
  return "string";
};

const RepeatedPrayerVariablesEditor = ({
  variables = {},
  onChangeVar,
  onRemoveVar,
  onChangePass,
  onRemovePass,
  addVarOptions = [],
  arrayKeys = [],
  boolKeys = [],
}) => {
  const [varKeyDraft, setVarKeyDraft] = useState("");
  const [chipDrafts, setChipDrafts] = useState({});

  const availableVarKeys = useMemo(
    () => addVarOptions.filter((k) => !(k in (variables || {}))),
    [addVarOptions, variables]
  );

  const addVar = () => {
    const key = (varKeyDraft || availableVarKeys[0] || "").trim();
    if (!key) return;
    if (key === "passToTable") {
      onChangeVar("passToTable", {});
    } else {
      const type = getValueType(key, undefined, arrayKeys, boolKeys);
      const defaultVal = type === "array" ? [] : type === "boolean" ? false : "";
      onChangeVar(key, defaultVal);
    }
    setVarKeyDraft("");
  };

  const addChip = (key, draftVal, current) => {
    const nextVal = (draftVal || "").trim();
    if (!nextVal) return;
    const arr = Array.isArray(current) ? current : [];
    onChangeVar(key, [...arr, nextVal]);
    setChipDrafts((prev) => ({ ...prev, [key]: "" }));
  };

  return (
    <div className="hw-repeated-vars">
      <div className="muted">repeated_prayer_variables</div>
      {Object.entries(variables || {}).map(([k, v]) => {
        if (k === "passToTable") {
          return (
            <PassToTableEditor
              key={k}
              title="passToTable"
              data={v || {}}
              onChange={(subKey, val) => onChangePass(subKey, val)}
              onRemove={(subKey) => onRemovePass(subKey)}
              addKeyOptions={addVarOptions}
              arrayKeys={arrayKeys}
              boolKeys={boolKeys}
            />
          );
        }

        const valueType = getValueType(k, v, arrayKeys, boolKeys);
        const draftVal = chipDrafts[k] || "";

        if (valueType === "boolean") {
          return (
            <label key={k} className="hw-field-with-remove hw-checkbox-inline">
              <span>{k}</span>
              <input type="checkbox" checked={Boolean(v)} onChange={(e) => onChangeVar(k, e.target.checked)} />
              <button type="button" className="hw-remove" onClick={() => onRemoveVar(k)}>
                🗑
              </button>
            </label>
          );
        }

        if (valueType === "array") {
          const arr = Array.isArray(v) ? v : [];
          return (
            <div key={k} className="hw-array-field">
              <div className="hw-array-label">
                <span>{k}</span>
                <button type="button" className="hw-remove" onClick={() => onRemoveVar(k)}>
                  🗑
                </button>
              </div>
              <div className="hw-chips">
                {arr.map((val, chipIdx) => (
                  <span key={`${k}-${chipIdx}`} className="chip">
                    {val}
                    <button
                      type="button"
                      className="chip-remove"
                      onClick={() => onChangeVar(k, arr.filter((_, i) => i !== chipIdx))}
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
              <div className="hw-chip-input">
                <input
                  value={draftVal}
                  placeholder={`Add ${k}`}
                  onChange={(e) => setChipDrafts((prev) => ({ ...prev, [k]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addChip(k, draftVal, v);
                    }
                  }}
                />
                <button type="button" className="secondary" onClick={() => addChip(k, draftVal, v)}>
                  Add
                </button>
              </div>
            </div>
          );
        }

        return (
          <label key={k} className="hw-field-with-remove hw-field-inline">
            <span>{k}</span>
            <input value={v == null ? "" : String(v)} onChange={(e) => onChangeVar(k, e.target.value)} />
            <button type="button" className="hw-remove" onClick={() => onRemoveVar(k)}>
              🗑
            </button>
          </label>
        );
      })}

      {availableVarKeys.length > 0 && (
        <div className="hw-optional">
          <select value={varKeyDraft || availableVarKeys[0]} onChange={(e) => setVarKeyDraft(e.target.value)}>
            {availableVarKeys.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button type="button" className="secondary" onClick={addVar}>
            Add variable
          </button>
        </div>
      )}
    </div>
  );
};

export default RepeatedPrayerVariablesEditor;
