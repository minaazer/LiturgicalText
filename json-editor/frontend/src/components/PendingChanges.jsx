import React from "react";

const PendingChanges = ({ changes, onSelect, onSubmit, selectedId, loadingId }) => {
  return (
    <div className="pending">
      <div className="pending-header">
        <h2>Pending approvals</h2>
        {changes.length > 0 && <span className="muted pending-count">{changes.length} open</span>}
      </div>
      {changes.length === 0 && <p className="muted">No pending changes.</p>}
      <div className="pending-list">
        {changes.map((change) => {
          const isActive = selectedId === change.id;
          const isLoading = loadingId === change.id;
          return (
            <div key={change.id} className={`pending-card ${isActive ? "active" : ""}`}>
              <div className="pending-top">
                <div className="pending-path">
                  <strong>{change.path}</strong>
                  <span className="muted">Requested by {change.requestedBy || "Unknown"}</span>
                </div>
                <button type="button" className="secondary" onClick={() => onSelect?.(change.id)} disabled={isLoading}>
                  {isLoading ? "Loading..." : isActive ? "Viewing" : "View"}
                </button>
              </div>
              <div className="pending-summary muted">{change.summary || "No summary provided"}</div>
              <div className="pending-actions">
                <button
                  type="button"
                  onClick={() => onSubmit?.(change.id)}
                  disabled={!isActive || isLoading}
                  title={!isActive ? "Select this request to review before submitting." : ""}
                >
                  Submit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingChanges;
