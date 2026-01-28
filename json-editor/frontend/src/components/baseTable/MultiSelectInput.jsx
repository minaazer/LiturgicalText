import React, { useId, useState } from "react";

const MultiSelectInput = ({ values, options = [], placeholder = "Add value", onChange }) => {
  const [draft, setDraft] = useState("");
  const listId = useId();
  const safeValues = Array.isArray(values) ? values : [];

  const addValue = (raw) => {
    const next = String(raw || "").trim();
    if (!next) return;
    if (safeValues.includes(next)) {
      setDraft("");
      return;
    }
    onChange([...safeValues, next]);
    setDraft("");
  };

  const removeValue = (idx) => {
    onChange(safeValues.filter((_, i) => i !== idx));
  };

  return (
    <div className="multi-select">
      {safeValues.map((val, idx) => (
        <span key={`${val}-${idx}`} className="chip">
          {val}
          <button type="button" className="chip-remove" onClick={() => removeValue(idx)}>
            ×
          </button>
        </span>
      ))}
      <input
        list={options.length ? listId : undefined}
        value={draft}
        placeholder={placeholder}
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addValue(draft);
          }
        }}
        onBlur={() => addValue(draft)}
      />
      <button type="button" className="secondary multi-select-add" onClick={() => addValue(draft)}>
        +
      </button>
      {options.length > 0 && (
        <datalist id={listId}>
          {options.map((opt) => (
            <option key={opt} value={opt} />
          ))}
        </datalist>
      )}
    </div>
  );
};

export default MultiSelectInput;
