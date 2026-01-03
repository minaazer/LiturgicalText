import React from "react";
import ReactDiffViewer from "react-diff-viewer-continued";

const DiffPanel = ({ changeLocations, selectedChange, setSelectedChange, viewOld, viewNew, onClose }) => (
  <div className="diff diff-panel">
    {changeLocations.length > 0 && (
      <div className="diff-context">
        <span className="muted">Changed sections:</span>
        <div className="diff-tags">
          <button type="button" className={`diff-tag ${!selectedChange ? "active" : ""}`} onClick={() => setSelectedChange(null)}>
            All changes
          </button>
          {changeLocations.map((ctx) => (
            <button
              key={`${ctx.label}-${ctx.path}`}
              type="button"
              className={`diff-tag ${selectedChange?.path === ctx.path ? "active" : ""}`}
              onClick={() => setSelectedChange(ctx)}
            >
              {ctx.label}
              {ctx.path && ctx.path !== ctx.label && <small className="muted"> {ctx.path}</small>}
            </button>
          ))}
        </div>
      </div>
    )}
    <div className="diff-panel-header">
      <h3>Diff: {selectedChange?.label || "All changes"}</h3>
      <button type="button" className="secondary" onClick={onClose}>
        Collapse
      </button>
    </div>
    <ReactDiffViewer
      oldValue={viewOld || ""}
      newValue={viewNew || ""}
      splitView
      showDiffOnly
      extraLinesSurroundingDiff={1}
      disableWordDiff
      hideLineNumbers
    />
  </div>
);

export default DiffPanel;
