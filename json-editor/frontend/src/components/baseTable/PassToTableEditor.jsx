import React, { useMemo, useState } from "react";

const getValueType = (key, value, arrayKeys, boolKeys) => {
  if (Array.isArray(value)) return "array";
  if (arrayKeys.includes(key)) return "array";
  if (typeof value === "boolean") return "boolean";
  if (boolKeys.includes(key)) return "boolean";
  return "string";
};

const PassToTableEditor = ({
  title = "passToTable",
  data = {},
  onChange,
  onRemove,
  addKeyOptions = [],
  arrayKeys = [],
  boolKeys = [],
}) => {
  const [selectedKey, setSelectedKey] = useState("");
  const [chipDrafts, setChipDrafts] = useState({});

  const availableKeys = useMemo(
    () => addKeyOptions.filter((k) => !(k in (data || {}))),
    [addKeyOptions, data]
  );

  const addKey = () => {
    const key = (selectedKey || "").trim();
    if (!key) return;
    const type = getValueType(key, undefined, arrayKeys, boolKeys);
    const defaultVal = type === "array" ? [] : type === "boolean" ? false : "";
    onChange(key, defaultVal);
    setSelectedKey("");
  };

  const addChip = (key, draftVal) => {
    const nextVal = (draftVal || "").trim();
    if (!nextVal) return;
    const arr = Array.isArray(data?.[key]) ? data[key] : [];
    onChange(key, [...arr, nextVal]);
    setChipDrafts((prev) => ({ ...prev, [key]: "" }));
  };

  const renderEntry = (key, value) => {
    const valueType = getValueType(key, value, arrayKeys, boolKeys);
    if (valueType === "boolean") {
      return (
        <label key={key} className="hw-field-with-remove hw-checkbox-inline">
          <span>{`${title}.${key}`}</span>
          <input
            type="checkbox"
            checked={Boolean(value)}
            onChange={(e) => onChange(key, e.target.checked)}
          />
          <button type="button" className="hw-remove" onClick={() => onRemove(key)}>
            🗑
          </button>
        </label>
      );
    }

    if (valueType === "array") {
      const draftVal = chipDrafts[key] || "";
      const arr = Array.isArray(value) ? value : [];
      return (
        <div key={key} className="hw-array-field">
          <div className="hw-array-label">
            <span>{`${title}.${key}`}</span>
            <button type="button" className="hw-remove" onClick={() => onRemove(key)}>
              🗑
            </button>
          </div>
          <div className="hw-chips">
            {arr.map((val, chipIdx) => (
              <span key={`${key}-${chipIdx}`} className="chip">
                {val}
                <button
                  type="button"
                  className="chip-remove"
                  onClick={() => onChange(key, arr.filter((_, i) => i !== chipIdx))}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
          <div className="hw-chip-input">
            <input
              value={draftVal}
              placeholder={`Add ${key}`}
              onChange={(e) => setChipDrafts((prev) => ({ ...prev, [key]: e.target.value }))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addChip(key, draftVal);
                }
              }}
            />
            <button type="button" className="secondary" onClick={() => addChip(key, draftVal)}>
              Add
            </button>
          </div>
        </div>
      );
    }

    return (
      <label key={key} className="hw-field-with-remove hw-field-inline">
        <span>{`${title}.${key}`}</span>
        <input value={value == null ? "" : String(value)} onChange={(e) => onChange(key, e.target.value)} />
        <button type="button" className="hw-remove" onClick={() => onRemove(key)}>
          🗑
        </button>
      </label>
    );
  };

  return (
    <div className="hw-repeated-vars">
      <div className="muted">{title}</div>
      {Object.entries(data || {}).map(([k, v]) => renderEntry(k, v))}
      {availableKeys.length > 0 && (
        <div className="hw-optional">
          <select value={selectedKey} onChange={(e) => setSelectedKey(e.target.value)}>
            <option value="" disabled>
              Choose a field
            </option>
            {availableKeys.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button type="button" className="secondary" onClick={addKey}>
            Add key
          </button>
        </div>
      )}
    </div>
  );
};

export default PassToTableEditor;
