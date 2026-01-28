import React, { useMemo } from "react";
import { rowArrayFields, rowBooleanFields, rowFieldLabels, rowFieldOptions } from "../../editorConfig.js";
import { ROW_ARRAY_OPTIONS } from "../../editorDropdowns.js";
import MultiSelectInput from "./MultiSelectInput.jsx";

const getRowValueType = (key, value) => {
  if (Array.isArray(value)) return "array";
  if (rowArrayFields.includes(key)) return "array";
  if (typeof value === "boolean") return "boolean";
  if (rowBooleanFields.includes(key)) return "boolean";
  if (value && typeof value === "object") return "object";
  return "string";
};

const RowFieldsEditor = ({ row, onSetField, onRemoveField }) => {
  const otherFields = useMemo(
    () => Object.entries(row || {}).filter(([k]) => k !== "row-class" && k !== "cells"),
    [row]
  );

  if (!otherFields.length) return null;

  const renderField = (field, value) => {
    const valueType = getRowValueType(field, value);

    const labelText = rowFieldLabels?.[field] || field;
    if (valueType === "boolean") {
      return (
        <label key={field} className="hw-field-with-remove hw-checkbox-inline">
          <span>{labelText}</span>
          <input type="checkbox" checked={Boolean(value)} onChange={(e) => onSetField(field, e.target.checked)} />
          <button type="button" className="hw-remove" onClick={() => onRemoveField(field)}>
            🗑
          </button>
        </label>
      );
    }

    if (valueType === "array") {
      const arr = Array.isArray(value) ? value : [];
      const options = ROW_ARRAY_OPTIONS[field] || [];

      return (
        <div key={field} className="hw-array-field">
          <div className="hw-array-label">
            <span>{labelText}</span>
            <button type="button" className="hw-remove" onClick={() => onRemoveField(field)}>
              🗑
            </button>
          </div>
          <MultiSelectInput
            values={arr}
            options={options}
            placeholder="Add value"
            onChange={(nextValues) => onSetField(field, nextValues)}
          />
        </div>
      );
    }

    if (valueType === "object") {
      return (
        <div key={field} className="hw-array-field">
          <div className="hw-array-label">
            <span>{field}</span>
            <button type="button" className="hw-remove" onClick={() => onRemoveField(field)}>
              🗑
            </button>
          </div>
          <pre className="hw-pre">{JSON.stringify(value, null, 2)}</pre>
        </div>
      );
    }

    const selectOptions = rowFieldOptions?.[field];
    if (Array.isArray(selectOptions)) {
      return (
        <label key={field} className="hw-field-with-remove hw-field-inline">
          <span>{labelText}</span>
          <select value={value == null ? "" : String(value)} onChange={(e) => onSetField(field, e.target.value)}>
            <option value="" disabled>
              Choose a value
            </option>
            {selectOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <button type="button" className="hw-remove" onClick={() => onRemoveField(field)}>
            🗑
          </button>
        </label>
      );
    }

    return (
      <label key={field} className="hw-field-with-remove hw-field-inline">
        <span>{labelText}</span>
        <input value={value == null ? "" : String(value)} onChange={(e) => onSetField(field, e.target.value)} />
        <button type="button" className="hw-remove" onClick={() => onRemoveField(field)}>
          🗑
        </button>
      </label>
    );
  };

  return (
    <div className="hw-row-fields">
      {otherFields.map(([field, value]) => renderField(field, value))}
    </div>
  );
};

export default RowFieldsEditor;
