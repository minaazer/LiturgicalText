import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import {
  approveChange,
  fetchChange,
  fetchChanges,
  fetchFile,
  fetchFiles,
  fetchSchema,
  rejectChange,
  submitChange,
} from "./api.js";
import { getSession, signIn, signOut } from "./auth.js";
import { collectChangedPaths, decodeJwt, findHeadingForPath, roleFromGroups, stableStringify } from "./utils.js";
import { emptyArray, repeatedVarOptions, rowClassOptions, tableOptionalFields } from "./editorConfig.js";
import LoginForm from "./components/LoginForm.jsx";
import FileList from "./components/FileList.jsx";
import PendingChanges from "./components/PendingChanges.jsx";
import DiffPanel from "./components/DiffPanel.jsx";
import HolyWeekEditor from "./components/HolyWeekEditor.jsx";
import BaseTableEditor from "./components/BaseTableEditor.jsx";
import RowOnlyEditor from "./components/RowOnlyEditor.jsx";

const ArrayFieldTemplate = ({ title, canAdd, items, onAddClick }) => (
  <fieldset className="rjsf-array">
    <legend>{title}</legend>
    {items.map((item) => (
      <div key={item.index} className="rjsf-array-item">
        <div className="rjsf-array-content">{item.children}</div>
        <div className="rjsf-array-actions">
          {item.hasMoveUp && (
            <button type="button" onClick={item.onReorderClick(item.index, item.index - 1)}>
              Up
            </button>
          )}
          {item.hasMoveDown && (
            <button type="button" onClick={item.onReorderClick(item.index, item.index + 1)}>
              Down
            </button>
          )}
          {item.hasRemove && (
            <button type="button" className="danger" onClick={item.onDropIndexClick(item.index)}>
              Remove
            </button>
          )}
        </div>
      </div>
    ))}
    {canAdd && (
      <button type="button" className="add" onClick={onAddClick}>
        Add item
      </button>
    )}
  </fieldset>
);

const BaseButton = ({ label, className, ...props }) => (
  <button type="button" className={`rjsf-btn ${className || ""}`} {...props}>
    {label}
  </button>
);

const ButtonTemplates = {
  AddButton: (props) => <BaseButton {...props} label="Add item" className="rjsf-btn-add" />,
  RemoveButton: (props) => <BaseButton {...props} label="Remove" className="rjsf-btn-remove" />,
  MoveUpButton: (props) => <BaseButton {...props} label="Up" className="rjsf-btn-move" />,
  MoveDownButton: (props) => <BaseButton {...props} label="Down" className="rjsf-btn-move" />,
  CopyButton: (props) => <BaseButton {...props} label="Copy" className="rjsf-btn-copy" />,
};

const App = () => {
  const [session, setSession] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [schema, setSchema] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [formData, setFormData] = useState(null);
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState("");
  const [showDiff, setShowDiff] = useState(false);
  const [pending, setPending] = useState([]);
  const [selectedPendingId, setSelectedPendingId] = useState("");
  const [selectedPendingDetail, setSelectedPendingDetail] = useState(null);
  const [selectedApprovalContext, setSelectedApprovalContext] = useState(null);
  const [pendingDetailStatus, setPendingDetailStatus] = useState("");
  const [loadingChangeId, setLoadingChangeId] = useState("");
  const [isDirty, setIsDirty] = useState(false);
  const [selectedChange, setSelectedChange] = useState(null);
  const [hwServiceIndex, setHwServiceIndex] = useState(0);
  const [hwHourIndex, setHwHourIndex] = useState(0);
  const [hwSectionIndex, setHwSectionIndex] = useState(0);
  const [hwTablesMenuOpen, setHwTablesMenuOpen] = useState(false);
  const [baseTablesMenuOpen, setBaseTablesMenuOpen] = useState(false);
  const [baseCategoryIndex, setBaseCategoryIndex] = useState(0);
  const [baseArrayDrafts, setBaseArrayDrafts] = useState({});
  const [rowArrayDrafts, setRowArrayDrafts] = useState({});
  const [hwOptionalSelect, setHwOptionalSelect] = useState({});
  const [baseOptionalSelect, setBaseOptionalSelect] = useState({});
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);
  const [showFileList, setShowFileList] = useState(false);
  const [viewMode, setViewMode] = useState("editor"); // editor | approvals
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchIndex, setSearchIndex] = useState(-1);
  const formRef = useRef(null);
  const tableRefs = useRef([]);
  const skipInitialChange = useRef(false);
  const editorRef = useRef(null);
  const searchRefs = useRef([]);

  const token = session?.session?.getIdToken?.().getJwtToken?.() || "";
  const tokenPayload = useMemo(() => decodeJwt(token), [token]);
  const groups = tokenPayload?.["cognito:groups"] || emptyArray;
  const role = roleFromGroups(groups);
  const username = tokenPayload?.["cognito:username"] || "";

  const loadSession = useCallback(async () => {
    try {
      const current = await getSession();
      setSession(current);
    } catch (err) {
      setSession(null);
    }
  }, []);

  const loadFiles = useCallback(async () => {
    if (!token) return;
    const data = await fetchFiles(token);
    const hiddenPrefixes = ["agpeya/", "bible/", "readings/"];
    const hiddenExact = new Set(["images.json", "explanations.json"]);
    const filtered = (data.files || []).filter((file) => {
      const path = file.path || "";
      if (hiddenExact.has(path)) return false;
      return !hiddenPrefixes.some((prefix) => path.startsWith(prefix));
    });
    setFiles(filtered);
  }, [token]);

  const applyFormData = useCallback(
    (updater, options = {}) => {
      const { skipRecord = false } = options;
      setFormData((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater;
        if (!skipRecord && prev !== next) {
          setHistory((hist) => [...hist.slice(-29), prev]);
          setFuture([]);
          setIsDirty(true);
        }
        return next;
      });
    },
    []
  );

  const undo = useCallback(() => {
    setHistory((hist) => {
      if (!hist.length) return hist;
      const prevState = hist[hist.length - 1];
      setFuture((f) => [formData, ...f]);
      setFormData(prevState);
      setIsDirty(true);
      return hist.slice(0, -1);
    });
  }, [formData]);

  const redo = useCallback(() => {
    setFuture((f) => {
      if (!f.length) return f;
      const nextState = f[0];
      setHistory((hist) => [...hist.slice(-29), formData]);
      setFormData(nextState);
      setIsDirty(true);
      return f.slice(1);
    });
  }, [formData]);

  const loadPending = useCallback(async () => {
    if (!token || role !== "admin") return;
    const data = await fetchChanges(token, "pending");
    setPending(data.changes || []);
  }, [token, role]);

  const loadPendingDetail = useCallback(
    async (changeId) => {
      if (!token || !changeId) return;
      setLoadingChangeId(changeId);
      setPendingDetailStatus("Loading change...");
      setSelectedPendingId(changeId);
      setSelectedPendingDetail(null);
      setSelectedApprovalContext(null);
      try {
        const data = await fetchChange(token, changeId);
        setSelectedPendingDetail(data.change || null);
        setPendingDetailStatus("");
      } catch (err) {
        setPendingDetailStatus(err.message || "Failed to load change");
      } finally {
        setLoadingChangeId("");
      }
    },
    [token]
  );

  useEffect(() => {
    loadSession();
  }, [loadSession]);

  useEffect(() => {
    if (!token) return;
    loadFiles();
    loadPending();
  }, [token, loadFiles, loadPending]);

  useEffect(() => {
    if (viewMode === "approvals" && role === "admin") {
      loadPending();
    }
  }, [viewMode, role, loadPending]);

  useEffect(() => {
    if (!selectedPendingId) return;
    const stillExists = pending.some((change) => change.id === selectedPendingId);
    if (!stillExists) {
      setSelectedPendingId("");
      setSelectedPendingDetail(null);
      setSelectedApprovalContext(null);
    }
  }, [pending, selectedPendingId]);

  useEffect(() => {
    const loadFile = async () => {
      if (!token || !selectedFile) return;
      setStatus("Loading file...");
      try {
        const [schemaData, fileData] = await Promise.all([fetchSchema(token, selectedFile), fetchFile(token, selectedFile)]);
        setSchema(schemaData);
        setOriginalData(fileData);
        applyFormData(fileData, { skipRecord: true });
        setHistory([]);
        setFuture([]);
        setIsDirty(false);
        skipInitialChange.current = true;
        setHwServiceIndex(0);
        setHwHourIndex(0);
        setHwSectionIndex(0);
        setBaseCategoryIndex(0);
        setBaseTablesMenuOpen(false);
        setStatus("");
      } catch (err) {
        setStatus(err.message || "Failed to load file");
      }
    };
    loadFile();
  }, [token, selectedFile]);

  const clearSearchHighlights = useCallback(() => {
    searchRefs.current.forEach((node) => node?.classList?.remove("search-highlight"));
  }, []);

  const focusSearchResult = useCallback((idx) => {
    const targets = searchRefs.current || [];
    targets.forEach((node, nodeIdx) => {
      if (!node?.classList) return;
      if (nodeIdx === idx) node.classList.add("search-highlight");
      else node.classList.remove("search-highlight");
    });
    const el = targets[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    }
  }, []);

  useEffect(() => {
    if (!editorRef.current || !searchTerm.trim()) {
      clearSearchHighlights();
      searchRefs.current = [];
      setSearchResults([]);
      setSearchIndex(-1);
      return;
    }

    const query = searchTerm.trim().toLowerCase();
    const selectors = ["input[type='text']", "input[type='search']", "input:not([type])", "textarea"];
    const inputs = Array.from(editorRef.current.querySelectorAll(selectors.join(","))).filter(
      (el) => el.getAttribute("data-skip-search") !== "true" && !el.disabled && !el.readOnly && el.type !== "hidden"
    );

    const nextResults = [];
    const nextRefs = [];

    inputs.forEach((el) => {
      const value = (el.value || "").toLowerCase();
      const placeholder = (el.placeholder || "").toLowerCase();
      if (!value.includes(query) && !placeholder.includes(query)) return;
      const label = el.closest("label")?.innerText?.trim() || el.getAttribute("aria-label") || el.name || el.id || "Field";
      nextResults.push({ label, value: el.value || "" });
      nextRefs.push(el);
    });

    searchRefs.current = nextRefs;
    if (!nextResults.length) {
      clearSearchHighlights();
      setSearchResults([]);
      setSearchIndex(-1);
      return;
    }
    setSearchResults(nextResults);
    setSearchIndex((prev) => {
      if (prev < 0) return 0;
      if (prev >= nextResults.length) return nextResults.length - 1;
      return prev;
    });
  }, [searchTerm, formData, schema, selectedFile, clearSearchHighlights]);

  const jumpToSearchResult = useCallback(
    (index) => {
      if (!searchResults.length) return;
      const safeIndex = ((index % searchResults.length) + searchResults.length) % searchResults.length;
      setSearchIndex(safeIndex);
      focusSearchResult(safeIndex);
    },
    [searchResults.length, focusSearchResult]
  );

  const stepSearchResult = useCallback(
    (step) => {
      if (!searchResults.length) return;
      const baseIndex = searchIndex < 0 ? 0 : searchIndex + step;
      jumpToSearchResult(baseIndex);
    },
    [jumpToSearchResult, searchResults.length, searchIndex]
  );

  const handleLogin = async (usernameInput, passwordInput) => {
    setAuthLoading(true);
    setAuthError("");
    try {
      const result = await signIn(usernameInput, passwordInput);
      setSession(result);
    } catch (err) {
      setAuthError(err.message || "Sign in failed.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;
    setStatus("Submitting for approval...");
    try {
      await submitChange(token, { path: selectedFile, summary, data: formData });
      setStatus("Submitted for approval.");
      setSummary("");
      loadPending();
    } catch (err) {
      setStatus(err.message || "Submit failed.");
    }
  };

  const normalizedOriginal = useMemo(
    () => (originalData == null ? null : JSON.parse(stableStringify(originalData))),
    [originalData]
  );
  const normalizedForm = useMemo(
    () => (formData == null ? null : JSON.parse(stableStringify(formData))),
    [formData]
  );

  const diffOld = useMemo(() => stableStringify(normalizedOriginal), [normalizedOriginal]);
  const diffNew = useMemo(() => stableStringify(normalizedForm), [normalizedForm]);
  const changeLocations = useMemo(() => {
    if (!isDirty || diffOld === diffNew) return [];
    const paths = collectChangedPaths(normalizedOriginal, normalizedForm);
    const seen = new Set();
    const formatPath = (segments) =>
      segments
        .map((seg) => (typeof seg === "number" ? `[${seg}]` : seg))
        .join(".");

    return paths
      .slice(0, 100)
      .map((p) => {
        const { heading } = findHeadingForPath(formData || originalData, p);
        const label = heading || (p.length ? formatPath(p) : "root");
        const pathLabel = p.length ? formatPath(p) : "root";
        const key = label || pathLabel;
        if (seen.has(key)) return null;
        seen.add(key);
        return { label, path: pathLabel, segments: p };
      })
      .filter(Boolean);
  }, [originalData, formData, normalizedOriginal, normalizedForm, diffOld, diffNew, isDirty]);

  const getAtPath = useCallback((data, segments = []) => {
    let current = data;
    for (const seg of segments) {
      if (current == null) return undefined;
      current = current[seg];
    }
    return current;
  }, []);

  const normalizedPendingOriginal = useMemo(
    () =>
      selectedPendingDetail && selectedPendingDetail.currentData != null
        ? JSON.parse(stableStringify(selectedPendingDetail.currentData))
        : null,
    [selectedPendingDetail]
  );

  const normalizedPendingNew = useMemo(
    () =>
      selectedPendingDetail && selectedPendingDetail.pendingData != null
        ? JSON.parse(stableStringify(selectedPendingDetail.pendingData))
        : null,
    [selectedPendingDetail]
  );

  const approvalsDiffOld = useMemo(() => stableStringify(normalizedPendingOriginal), [normalizedPendingOriginal]);
  const approvalsDiffNew = useMemo(() => stableStringify(normalizedPendingNew), [normalizedPendingNew]);

  const approvalChangeLocations = useMemo(() => {
    if (!selectedPendingDetail) return [];
    if (approvalsDiffOld === approvalsDiffNew) return [];
    const paths = collectChangedPaths(normalizedPendingOriginal, normalizedPendingNew);
    const seen = new Set();
    const formatPath = (segments) =>
      segments
        .map((seg) => (typeof seg === "number" ? `[${seg}]` : seg))
        .join(".");

    return paths
      .slice(0, 100)
      .map((p) => {
        const { heading } = findHeadingForPath(selectedPendingDetail.pendingData || selectedPendingDetail.currentData, p);
        const label = heading || (p.length ? formatPath(p) : "root");
        const pathLabel = p.length ? formatPath(p) : "root";
        const key = label || pathLabel;
        if (seen.has(key)) return null;
        seen.add(key);
        return { label, path: pathLabel, segments: p };
      })
      .filter(Boolean);
  }, [selectedPendingDetail, approvalsDiffOld, approvalsDiffNew, normalizedPendingOriginal, normalizedPendingNew]);

  const approvalSegments = selectedApprovalContext?.segments;
  const approvalViewOldData = approvalSegments ? getAtPath(normalizedPendingOriginal, approvalSegments) : normalizedPendingOriginal;
  const approvalViewNewData = approvalSegments ? getAtPath(normalizedPendingNew, approvalSegments) : normalizedPendingNew;
  const approvalViewOld = useMemo(() => stableStringify(approvalViewOldData ?? null), [approvalViewOldData]);
  const approvalViewNew = useMemo(() => stableStringify(approvalViewNewData ?? null), [approvalViewNewData]);

  const activeSegments = selectedChange?.segments;
  const viewOldData = activeSegments ? getAtPath(normalizedOriginal, activeSegments) : normalizedOriginal;
  const viewNewData = activeSegments ? getAtPath(normalizedForm, activeSegments) : normalizedForm;
  const viewOld = useMemo(() => stableStringify(viewOldData ?? null), [viewOldData]);
  const viewNew = useMemo(() => stableStringify(viewNewData ?? null), [viewNewData]);

  const pathLower = (selectedFile || "").toLowerCase();
  const isHolyWeek = pathLower.includes("holyweek.json");
  const categoryFiles = new Set(
    [
      "psalmody/seasonalpraises.json",
      "repeatedprayers/hwrepeatedprayers.json",
      "repeatedprayers/annualrepeatedprayers.json",
      "repeatedprayers/repeatedagpeyaprayers.json",
      "repeatedprayers/seasonalrepeatedprayers.json",
    ].map((p) => p.toLowerCase())
  );
  const rowOnlyFiles = new Set(
    ["repeatedPrayers/endOfServiceParts.json", "repeatedPrayers/psalm150Refrains.json"].map((p) => p.toLowerCase())
  );

  const isCategoryFile = categoryFiles.has(pathLower);
  const isRowOnlyFile = rowOnlyFiles.has(pathLower);
  const isBaseTableFile = !isHolyWeek && !isCategoryFile && !isRowOnlyFile && !!selectedFile;
  const canUndo = history.length > 0;
  const canRedo = future.length > 0;

  const holyWeekSelection = useMemo(() => {
    if (!isHolyWeek || !Array.isArray(formData)) return null;
    const service = formData?.[hwServiceIndex] || {};
    const hours = service?.hours || [];
    const hour = hours?.[hwHourIndex] || {};
    const sections = hour?.sections || [];
    const section = sections?.[hwSectionIndex] || {};
    return { service, hours, hour, sections, section };
  }, [formData, hwServiceIndex, hwHourIndex, hwSectionIndex, isHolyWeek]);

  const categorySelection = useMemo(() => {
    if (!isCategoryFile || !Array.isArray(formData)) return null;
    const categories = formData || [];
    const category = categories?.[baseCategoryIndex] || {};
    const tables = category?.tables || [];
    return { categories, category, tables };
  }, [formData, isCategoryFile, baseCategoryIndex]);

  const baseTables = useMemo(() => {
    if (!isBaseTableFile || !Array.isArray(formData)) return [];
    return formData;
  }, [formData, isBaseTableFile]);

  const rowOnlyData = useMemo(() => {
    if (!isRowOnlyFile || !Array.isArray(formData)) return null;
    return formData[0] || {};
  }, [formData, isRowOnlyFile]);

  useEffect(() => {
    tableRefs.current = [];
  }, [hwServiceIndex, hwHourIndex, hwSectionIndex]);

  useEffect(() => {
    if (!isHolyWeek || !Array.isArray(formData)) return;
    const svcCount = formData.length;
    if (hwServiceIndex >= svcCount) setHwServiceIndex(0);
    const service = formData[Math.min(hwServiceIndex, svcCount - 1)] || {};
    const hours = Array.isArray(service.hours) ? service.hours.length : 0;
    if (hwHourIndex >= hours) setHwHourIndex(0);
    const hour = (service.hours || [])[Math.min(hwHourIndex, Math.max(0, hours - 1))] || {};
    const sections = Array.isArray(hour.sections) ? hour.sections.length : 0;
    if (hwSectionIndex >= sections) setHwSectionIndex(0);
  }, [formData, isHolyWeek, hwServiceIndex, hwHourIndex, hwSectionIndex]);

  useEffect(() => {
    if (!isCategoryFile || !Array.isArray(formData)) return;
    const count = formData.length;
    if (baseCategoryIndex >= count) setBaseCategoryIndex(0);
  }, [formData, isCategoryFile, baseCategoryIndex]);

  useEffect(() => {
    setBaseTablesMenuOpen(false);
  }, [isCategoryFile, isBaseTableFile, baseCategoryIndex, selectedFile, formData]);

  useEffect(() => {
    tableRefs.current = [];
  }, [hwServiceIndex, hwHourIndex, hwSectionIndex, baseCategoryIndex, selectedFile]);

  if (!session) {
    return <LoginForm onLogin={handleLogin} loading={authLoading} error={authError} />;
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-left">
          <button
            className="secondary"
            onClick={() => setShowFileList((prev) => !prev)}
            aria-expanded={showFileList}
            aria-label="Toggle file list"
          >
            ☰ Files
          </button>
          <div>
            <strong>LiturgicalBooks JSON Editor</strong>
            <span className="muted">Role: {role}</span>
          </div>
        </div>
        <div className="topbar-actions">
          {role === "admin" && (
            <>
              <button className="secondary" onClick={() => setViewMode("editor")} disabled={viewMode === "editor"}>
                Editor
              </button>
              <button className="secondary" onClick={() => setViewMode("approvals")} disabled={viewMode === "approvals"}>
                Approvals
              </button>
            </>
          )}
          <span className="muted">{username}</span>
          <button
            className="secondary"
            onClick={() => {
              signOut();
              setSession(null);
            }}
          >
            Sign out
          </button>
        </div>
      </header>
      {showFileList && viewMode === "editor" && (
        <div
          className="file-overlay"
          onClick={() => {
            setShowFileList(false);
          }}
        >
          <div
            className="file-dropdown"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <FileList
              files={files}
              selected={selectedFile}
              onSelect={(path) => {
                setSelectedFile(path);
                setShowFileList(false);
              }}
            />
          </div>
        </div>
      )}
      {viewMode === "approvals" && role === "admin" ? (
        <div className="layout approvals-page">
          <section className="approvals">
            <div className="approvals-grid">
              <PendingChanges
                changes={pending}
                selectedId={selectedPendingId}
                loadingId={loadingChangeId}
                onSelect={(id) => loadPendingDetail(id)}
                onApprove={async (id) => {
                  await approveChange(token, id);
                  if (id === selectedPendingId) {
                    setSelectedPendingId("");
                    setSelectedPendingDetail(null);
                    setSelectedApprovalContext(null);
                  }
                  loadPending();
                }}
                onReject={async (id, reason) => {
                  await rejectChange(token, id, reason);
                  if (id === selectedPendingId) {
                    setSelectedPendingId("");
                    setSelectedPendingDetail(null);
                    setSelectedApprovalContext(null);
                  }
                  loadPending();
                }}
              />
              <div className="approval-detail">
                {!selectedPendingId && (
                  <div className="approval-empty">
                    <p className="muted">Select a request to review its diff.</p>
                  </div>
                )}
                {selectedPendingId && !selectedPendingDetail && (
                  <p className="muted">{pendingDetailStatus || "Loading change..."}</p>
                )}
                {selectedPendingId && selectedPendingDetail && (
                  <>
                    <h3>{selectedPendingDetail.path}</h3>
                    <p className="muted">
                      Requested by {selectedPendingDetail.requestedBy || "Unknown"}
                      {selectedPendingDetail.summary ? ` — ${selectedPendingDetail.summary}` : ""}
                    </p>
                    {pendingDetailStatus && <p className="status approval-status">{pendingDetailStatus}</p>}
                    {selectedPendingDetail.pendingError && (
                      <p className="error">Pending snapshot error: {selectedPendingDetail.pendingError}</p>
                    )}
                    {selectedPendingDetail.currentError && (
                      <p className="error">Current file error: {selectedPendingDetail.currentError}</p>
                    )}
                    {approvalsDiffOld === approvalsDiffNew ? (
                      <div className="approval-empty">
                        <p className="muted">No differences between live file and requested change.</p>
                      </div>
                    ) : (
                      <DiffPanel
                        changeLocations={approvalChangeLocations}
                        selectedChange={selectedApprovalContext}
                        setSelectedChange={setSelectedApprovalContext}
                        viewOld={approvalViewOld}
                        viewNew={approvalViewNew}
                        onClose={() => setSelectedApprovalContext(null)}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      ) : (
      <div className="layout">
        <main className="editor" ref={editorRef}>
          {!selectedFile && <p className="muted">Select a JSON file to begin.</p>}
          {selectedFile && (
            <>
              <div className="editor-header">
                <div>
                  <h2>{selectedFile}</h2>
                  {status && <p className="status">{status}</p>}
                </div>
              </div>
              <div className="editor-sticky">
                <div className="editor-toolbar">
                  <div className="toolbar-search">
                    <label>
                      Search fields
                      <input
                        data-skip-search="true"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            if (searchResults.length) {
                              jumpToSearchResult(searchIndex < 0 ? 0 : searchIndex);
                            }
                          }
                        }}
                        placeholder="Find text in inputs"
                      />
                    </label>
                    <div className="search-controls">
                      <button type="button" className="secondary" disabled={!searchResults.length} onClick={() => stepSearchResult(-1)}>
                        ‹
                      </button>
                      <button
                        type="button"
                        disabled={!searchResults.length}
                        onClick={() => jumpToSearchResult(searchIndex < 0 ? 0 : searchIndex)}
                      >
                        Go
                      </button>
                      <button type="button" className="secondary" disabled={!searchResults.length} onClick={() => stepSearchResult(1)}>
                        ›
                      </button>
                      <span className="muted">
                        {searchResults.length ? `${(searchIndex < 0 ? 0 : searchIndex) + 1} of ${searchResults.length}` : ""}
                      </span>                      
                    </div>
                  </div>
                  {(role === "editor" || role === "admin") && (
                    <label className="toolbar-summary">
                      Summary
                      <input value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="What did you change?" />
                    </label>
                  )}
                  <div className="toolbar-actions">
                    <button type="button" className="secondary" onClick={() => setShowDiff((prev) => !prev)}>
                      {showDiff ? "Hide diff" : "Show diff"}
                    </button>
                    {(role === "editor" || role === "admin") && (
                      <button
                        type="button"
                        onClick={() => {
                          if (!formRef.current || isHolyWeek || isCategoryFile || isBaseTableFile || isRowOnlyFile) {
                            handleSubmit();
                          } else {
                            formRef.current?.submit();
                          }
                        }}
                      >
                        Submit for approval
                      </button>
                    )}
                  </div>
                </div>
                {showDiff && (
                  <DiffPanel
                    changeLocations={changeLocations}
                    selectedChange={selectedChange}
                    setSelectedChange={setSelectedChange}
                    viewOld={viewOld}
                    viewNew={viewNew}
                    onClose={() => setShowDiff(false)}
                  />
                )}
              </div>

              {isHolyWeek && holyWeekSelection && (
                <HolyWeekEditor
                  formData={formData}
                  setFormData={applyFormData}
                  rowClassOptions={rowClassOptions}
                  tableOptionalFields={tableOptionalFields}
                  repeatedVarOptions={repeatedVarOptions}
                  hwServiceIndex={hwServiceIndex}
                  setHwServiceIndex={setHwServiceIndex}
                  hwHourIndex={hwHourIndex}
                  setHwHourIndex={setHwHourIndex}
                  hwSectionIndex={hwSectionIndex}
                  setHwSectionIndex={setHwSectionIndex}
                  hwOptionalSelect={hwOptionalSelect}
                  setHwOptionalSelect={setHwOptionalSelect}
                  hwTablesMenuOpen={hwTablesMenuOpen}
                  setHwTablesMenuOpen={setHwTablesMenuOpen}
                  holyWeekSelection={holyWeekSelection}
                  tableRefs={tableRefs}
                  setIsDirty={setIsDirty}
                  canUndo={canUndo}
                  canRedo={canRedo}
                  onUndo={undo}
                  onRedo={redo}
                />
              )}

              {!isHolyWeek && isCategoryFile && categorySelection && (
                <div className="holyweek">
                  <div className="hw-selects">
                    <label>
                      Category
                      <select
                        value={baseCategoryIndex}
                        onChange={(e) => {
                          setBaseCategoryIndex(Number(e.target.value));
                          tableRefs.current = [];
                        }}
                      >
                        {(categorySelection.categories || []).map((cat, idx) => (
                          <option key={`cat-${idx}`} value={idx}>
                            {cat?.category || `Category ${idx + 1}`}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <BaseTableEditor
                    tables={categorySelection.tables || []}
                    heading={`${categorySelection.category?.category || "Category"} tables`}
                    rowClassOptions={rowClassOptions}
                    baseOptionalSelect={baseOptionalSelect}
                    setBaseOptionalSelect={setBaseOptionalSelect}
                    baseArrayDrafts={baseArrayDrafts}
                    setBaseArrayDrafts={setBaseArrayDrafts}
                    tableRefs={tableRefs}
                    baseTablesMenuOpen={baseTablesMenuOpen}
                    setBaseTablesMenuOpen={setBaseTablesMenuOpen}
                    setIsDirty={setIsDirty}
                    setFormData={applyFormData}
                    isCategoryFile
                    baseCategoryIndex={baseCategoryIndex}
                    canUndo={canUndo}
                    canRedo={canRedo}
                    onUndo={undo}
                    onRedo={redo}
                  />
                </div>
              )}

              {isBaseTableFile && !isHolyWeek && !isCategoryFile && (
                <BaseTableEditor
                  tables={baseTables}
                  heading="Tables"
                  rowClassOptions={rowClassOptions}
                  baseOptionalSelect={baseOptionalSelect}
                  setBaseOptionalSelect={setBaseOptionalSelect}
                  baseArrayDrafts={baseArrayDrafts}
                  setBaseArrayDrafts={setBaseArrayDrafts}
                  tableRefs={tableRefs}
                  baseTablesMenuOpen={baseTablesMenuOpen}
                  setBaseTablesMenuOpen={setBaseTablesMenuOpen}
                  setIsDirty={setIsDirty}
                  setFormData={applyFormData}
                  isCategoryFile={false}
                  baseCategoryIndex={0}
                  canUndo={canUndo}
                  canRedo={canRedo}
                  onUndo={undo}
                  onRedo={redo}
                />
              )}

              {isRowOnlyFile && (
                <RowOnlyEditor
                  rowOnlyData={rowOnlyData}
                  rowClassOptions={rowClassOptions}
                  rowArrayDrafts={rowArrayDrafts}
                  setRowArrayDrafts={setRowArrayDrafts}
                  setFormData={applyFormData}
                  setIsDirty={setIsDirty}
                />
              )}

              {!isHolyWeek && !isCategoryFile && !isBaseTableFile && !isRowOnlyFile && schema && (
                <Form
                  ref={formRef}
                  schema={schema}
                  formData={formData}
                  validator={validator}
                  className="rjsf-form"
                  templates={{ ArrayFieldTemplate, ButtonTemplates }}
                  onChange={(event) => {
                    applyFormData(event.formData, { skipRecord: skipInitialChange.current });
                    if (skipInitialChange.current) {
                      skipInitialChange.current = false;
                      return;
                    }
                    setIsDirty(true);
                  }}
                  onSubmit={handleSubmit}
                >
                  {role === "viewer" ? <p className="muted">Read-only access. No edits allowed.</p> : <div style={{ height: 1 }} />}
                </Form>
              )}
            </>
          )}
        </main>
      </div>
      )}
    </div>
  );
};

export default App;
