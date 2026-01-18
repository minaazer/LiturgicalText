import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import {
  approveChange,
  createUser,
  deleteUser,
  fetchChange,
  fetchChanges,
  fetchFile,
  fetchFiles,
  fetchPasswordPolicy,
  fetchSchema,
  getUserDetail,
  listUsers,
  rejectChange,
  submitChange,
  updateUser,
} from "./api.js";
import { confirmEmailVerification, requestEmailVerification, resolveIdentifier } from "./api.js";
import { confirmPasswordReset, getSession, requestPasswordReset, signIn, signOut } from "./auth.js";
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
  const [authNeedsVerify, setAuthNeedsVerify] = useState(false);
  const [authIdentifier, setAuthIdentifier] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetError, setResetError] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verifyError, setVerifyError] = useState("");
  const [verifyMessage, setVerifyMessage] = useState("");
  const [passwordPolicy, setPasswordPolicy] = useState(null);
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState("");
  const [usersQuery, setUsersQuery] = useState("");
  const [usersNextToken, setUsersNextToken] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetailLoading, setUserDetailLoading] = useState(false);
  const [userDetailError, setUserDetailError] = useState("");
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [isUpdatingUser, setIsUpdatingUser] = useState(false);
  const [userStatusMessage, setUserStatusMessage] = useState("");
  const [userStatusKind, setUserStatusKind] = useState("status");
  const [createMode, setCreateMode] = useState(false);
  const [editForm, setEditForm] = useState({
    email: "",
    name: "",
    email_verified: false,
    enabled: true,
    role: "",
  });
  const [createForm, setCreateForm] = useState({
    username: "",
    email: "",
    name: "",
    temporaryPassword: "",
    sendInvite: true,
    email_verified: false,
    role: "",
  });
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
  const [approvalDecisions, setApprovalDecisions] = useState({});
  const [approvalReasons, setApprovalReasons] = useState({});
  const [pendingDetailStatus, setPendingDetailStatus] = useState("");
  const [approvalToast, setApprovalToast] = useState("");
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

  const idToken = session?.session?.getIdToken?.().getJwtToken?.() || "";
  const accessToken = session?.session?.getAccessToken?.().getJwtToken?.() || "";
  const token = accessToken || idToken;
  const tokenPayload = useMemo(() => decodeJwt(token), [token]);
  const groups = tokenPayload?.["cognito:groups"] || emptyArray;
  const role = roleFromGroups(groups);
  const isSuperAdmin = role === "superadmin";
  const isAdmin = role === "admin" || role === "superadmin";
  const canEdit = role === "editor" || isAdmin;
  const username = tokenPayload?.["cognito:username"] || "";
  const groupOptions = ["viewer", "editor", "admin", "superadmin"];

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
    const hiddenPrefixes = ["_schemas/", "agpeya/", "bible/", "readings/"];
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
    if (!token || !isAdmin) return;
    const data = await fetchChanges(token, "pending");
    setPending(data.changes || []);
  }, [token, isAdmin]);

  const fetchSnapshot = useCallback(async (url) => {
    if (!url) return { data: null, error: null };
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const text = await res.text();
        return { data: null, error: text || `Failed to fetch snapshot (${res.status})` };
      }
      return { data: await res.json(), error: null };
    } catch (err) {
      return { data: null, error: err.message || "Failed to fetch snapshot" };
    }
  }, []);

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
        if (!data.change) {
          setSelectedPendingDetail(null);
          setPendingDetailStatus("Failed to load change");
          return;
        }

        const detail = { ...data.change };
        const [pendingSnapshot, baseSnapshot, currentSnapshot] = await Promise.all([
          fetchSnapshot(detail.pendingUrl),
          fetchSnapshot(detail.baseUrl),
          fetchSnapshot(detail.currentUrl),
        ]);

        const pendingPayload = pendingSnapshot.data?.data ?? pendingSnapshot.data ?? null;
        const basePayload = baseSnapshot.data?.data ?? baseSnapshot.data ?? null;
        const currentPayload = currentSnapshot.data ?? null;

        detail.pendingData = pendingPayload;
        detail.baseData = basePayload ?? currentPayload ?? null;
        detail.currentData = currentPayload;

        if (!detail.pendingError && pendingSnapshot.error) detail.pendingError = pendingSnapshot.error;
        if (!detail.baseError && baseSnapshot.error) detail.baseError = baseSnapshot.error;
        if (!detail.currentError && currentSnapshot.error) detail.currentError = currentSnapshot.error;

        setSelectedPendingDetail(detail);
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
    if (viewMode === "approvals" && isAdmin) {
      loadPending();
    }
  }, [viewMode, isAdmin, loadPending]);

  useEffect(() => {
    if (viewMode === "users" && !isSuperAdmin) {
      setViewMode("editor");
    }
    if (viewMode === "approvals" && !isAdmin) {
      setViewMode("editor");
    }
  }, [viewMode, isSuperAdmin, isAdmin]);

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

  const handleLogin = async (usernameInput, passwordInput, newPasswordInput) => {
    setAuthLoading(true);
    setAuthError("");
    try {
      const trimmed = usernameInput.trim();
      let resolved = trimmed;
      if (trimmed.includes("@")) {
        const result = await resolveIdentifier(trimmed);
        resolved = result?.username || "";
      }
      if (!resolved) throw new Error("Sign in failed.");
      const result = await signIn(resolved, passwordInput, newPasswordInput);
      const payload = result?.session?.getIdToken?.().payload || {};
      const emailVerified = payload.email_verified;
      if (emailVerified === false || emailVerified === "false") {
        signOut();
        setSession(null);
        setAuthNeedsVerify(true);
        setAuthIdentifier(trimmed);
        setAuthError("Email not verified. Verify your email to continue.");
        return;
      }
      setAuthNeedsVerify(false);
      setAuthIdentifier("");
      setSession(result);
    } catch (err) {
      setAuthNeedsVerify(false);
      setAuthError(err.message || "Sign in failed.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRequestPasswordReset = async (usernameInput) => {
    setResetLoading(true);
    setResetError("");
    setResetMessage("");
    try {
      const trimmed = usernameInput.trim();
      let resolved = trimmed;
      if (trimmed.includes("@")) {
        const result = await resolveIdentifier(trimmed);
        resolved = result?.username || "";
      }
      if (resolved) {
        await requestPasswordReset(resolved);
      }
      setResetMessage("Reset code sent. Check your email for the verification code.");
      return true;
    } catch (err) {
      setResetError(err.message || "Password reset request failed.");
      return false;
    } finally {
      setResetLoading(false);
    }
  };

  const handleConfirmPasswordReset = async (usernameInput, code, newPassword) => {
    setResetLoading(true);
    setResetError("");
    setResetMessage("");
    try {
      const trimmed = usernameInput.trim();
      let resolved = trimmed;
      if (trimmed.includes("@")) {
        const result = await resolveIdentifier(trimmed);
        resolved = result?.username || "";
      }
      if (!resolved) throw new Error("Password update failed.");
      await confirmPasswordReset(resolved, code, newPassword);
      setResetMessage("Password updated. You can sign in now.");
      return true;
    } catch (err) {
      setResetError(err.message || "Password update failed.");
      return false;
    } finally {
      setResetLoading(false);
    }
  };

  const handleRequestEmailVerification = async (identifierInput) => {
    setVerifyLoading(true);
    setVerifyError("");
    setVerifyMessage("");
    try {
      await requestEmailVerification(identifierInput);
      setVerifyMessage("Verification code sent. Check your email if the account exists.");
      return true;
    } catch (err) {
      setVerifyError(err.message || "Email verification request failed.");
      return false;
    } finally {
      setVerifyLoading(false);
    }
  };

  const handleConfirmEmailVerification = async (identifierInput, code) => {
    setVerifyLoading(true);
    setVerifyError("");
    setVerifyMessage("");
    try {
      await confirmEmailVerification(identifierInput, code);
      setVerifyMessage("Email verified. You can reset your password now.");
      setAuthNeedsVerify(false);
      setAuthIdentifier("");
      setAuthError("");
      return true;
    } catch (err) {
      setVerifyError(err.message || "Email verification failed.");
      return false;
    } finally {
      setVerifyLoading(false);
    }
  };

  const loadPasswordPolicy = useCallback(async () => {
    try {
      const data = await fetchPasswordPolicy();
      setPasswordPolicy(data.policy || null);
    } catch (err) {
      setPasswordPolicy(null);
    }
  }, []);

  useEffect(() => {
    loadPasswordPolicy();
  }, [loadPasswordPolicy]);

  const loadUsers = useCallback(
    async (options = {}) => {
      if (!token || !isSuperAdmin) return;
      setUsersLoading(true);
      setUsersError("");
      const query = options.query ?? usersQuery;
      const nextToken = options.nextToken ?? "";
      try {
        const data = await listUsers(token, { q: query, nextToken });
        setUsers(data.users || []);
        setUsersNextToken(data.nextToken || "");
      } catch (err) {
        setUsersError(err.message || "Failed to load users.");
      } finally {
        setUsersLoading(false);
      }
    },
    [token, isSuperAdmin, usersQuery]
  );

  const loadMoreUsers = useCallback(async () => {
    if (!token || !isSuperAdmin || !usersNextToken) return;
    setUsersLoading(true);
    setUsersError("");
    try {
      const data = await listUsers(token, { q: usersQuery, nextToken: usersNextToken });
      setUsers((prev) => [...prev, ...(data.users || [])]);
      setUsersNextToken(data.nextToken || "");
    } catch (err) {
      setUsersError(err.message || "Failed to load users.");
    } finally {
      setUsersLoading(false);
    }
  }, [token, isSuperAdmin, usersQuery, usersNextToken]);

  const loadUserDetail = useCallback(
    async (usernameInput) => {
      if (!token || !isSuperAdmin || !usernameInput) return;
      setUserDetailLoading(true);
      setUserDetailError("");
      setUserStatusMessage("");
      setUserStatusKind("status");
      try {
        const data = await getUserDetail(token, usernameInput);
        setSelectedUser(data.user || null);
        setEditForm({
          email: data.user?.email || "",
          name: data.user?.name || "",
          email_verified: !!data.user?.email_verified,
          enabled: data.user?.enabled !== false,
          role: data.user?.groups?.[0] || "",
        });
        setCreateMode(false);
      } catch (err) {
        setUserDetailError(err.message || "Failed to load user.");
      } finally {
        setUserDetailLoading(false);
      }
    },
    [token, isSuperAdmin]
  );

  const handleUpdateUser = async () => {
    if (!selectedUser) return;
    setIsUpdatingUser(true);
    setUserStatusMessage("");
    setUserStatusKind("status");
    try {
      const payload = {
        attributes: { email: editForm.email, name: editForm.name },
        email_verified: editForm.email_verified,
        enabled: editForm.enabled,
        groups: editForm.role ? [editForm.role] : [],
      };
      const data = await updateUser(token, selectedUser.username, payload);
      setSelectedUser(data.user || null);
      setUserStatusMessage("User updated.");
      setUserStatusKind("status");
      if (data.user) {
        setEditForm({
          email: data.user.email || "",
          name: data.user.name || "",
          email_verified: !!data.user.email_verified,
          enabled: data.user.enabled !== false,
          role: data.user.groups?.[0] || "",
        });
      }
    } catch (err) {
      setUserStatusMessage(err.message || "Update failed.");
      setUserStatusKind("error");
    } finally {
      setIsUpdatingUser(false);
    }
  };

  const handleCreateUser = async () => {
    if (!createForm.username.trim() || !createForm.email.trim()) {
      setUserStatusMessage("Username and email are required.");
      setUserStatusKind("error");
      return;
    }
    if (!createForm.role) {
      setUserStatusMessage("Select a role for the new user.");
      setUserStatusKind("error");
      return;
    }
    setIsCreatingUser(true);
    setUserStatusMessage("");
    setUserStatusKind("status");
    try {
      const payload = {
        username: createForm.username.trim(),
        email: createForm.email.trim(),
        name: createForm.name.trim(),
        temporaryPassword: createForm.temporaryPassword.trim() || undefined,
        sendInvite: createForm.sendInvite,
        email_verified: createForm.email_verified,
        groups: createForm.role ? [createForm.role] : [],
      };
      await createUser(token, payload);
      setUserStatusMessage("User created.");
      setUserStatusKind("status");
      setCreateForm({
        username: "",
        email: "",
        name: "",
        temporaryPassword: "",
        sendInvite: true,
        email_verified: false,
        role: "",
      });
      await loadUsers({ query: usersQuery, nextToken: "" });
      setCreateMode(false);
    } catch (err) {
      setUserStatusMessage(err.message || "Create failed.");
      setUserStatusKind("error");
    } finally {
      setIsCreatingUser(false);
    }
  };

  const showApprovalToast = useCallback((message) => {
    setApprovalToast(message);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleDeleteUser = async () => {
    if (!selectedUser) return;
    const confirmed = window.confirm(`Delete user ${selectedUser.username}? This cannot be undone.`);
    if (!confirmed) return;
    setIsUpdatingUser(true);
    setUserStatusMessage("");
    setUserStatusKind("status");
    try {
      await deleteUser(token, selectedUser.username);
      setUserStatusMessage("User deleted.");
      setSelectedUser(null);
      setCreateMode(false);
      await loadUsers({ query: "", nextToken: "" });
    } catch (err) {
      setUserStatusMessage(err.message || "Delete failed.");
      setUserStatusKind("error");
    } finally {
      setIsUpdatingUser(false);
    }
  };

  useEffect(() => {
    if (viewMode === "users" && isSuperAdmin) {
      loadUsers({ query: "", nextToken: "" });
    }
  }, [viewMode, isSuperAdmin, loadUsers]);

  const handleSubmit = async () => {
    if (!selectedFile) return;
    setStatus("Submitting for approval...");
    try {
      await submitChange(token, { path: selectedFile, summary, data: formData });
      setStatus("Submitted for approval.");
      showApprovalToast("Changes submitted.");
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

  const parseDiffPath = useCallback((path) => {
    if (!path || path === "<root>" || path === "root") return [];
    const segments = [];
    let buffer = "";
    let i = 0;
    while (i < path.length) {
      const ch = path[i];
      if (ch === ".") {
        if (buffer) {
          segments.push(buffer);
          buffer = "";
        }
        i += 1;
        continue;
      }
      if (ch === "[") {
        if (buffer) {
          segments.push(buffer);
          buffer = "";
        }
        const close = path.indexOf("]", i);
        const raw = close === -1 ? path.slice(i + 1) : path.slice(i + 1, close);
        const idx = Number(raw);
        if (!Number.isNaN(idx)) segments.push(idx);
        i = close === -1 ? path.length : close + 1;
        continue;
      }
      buffer += ch;
      i += 1;
    }
    if (buffer) segments.push(buffer);
    return segments;
  }, []);

  const getValueAtPath = useCallback((data, segments) => {
    let current = data;
    for (const seg of segments) {
      if (current == null) return { exists: false, value: undefined };
      if (typeof seg === "number") {
        if (!Array.isArray(current) || seg >= current.length) return { exists: false, value: undefined };
        current = current[seg];
      } else {
        if (!Object.prototype.hasOwnProperty.call(current, seg)) return { exists: false, value: undefined };
        current = current[seg];
      }
    }
    return { exists: true, value: current };
  }, []);

  const compareSegments = useCallback((left, right) => {
    if (left.length !== right.length) return right.length - left.length;
    for (let i = left.length - 1; i >= 0; i -= 1) {
      const l = left[i];
      const r = right[i];
      if (typeof l === "number" && typeof r === "number" && l !== r) {
        return r - l;
      }
    }
    return 0;
  }, []);

  const setValueAtPath = useCallback((root, segments, value, pendingData) => {
    if (segments.length === 0) return value;
    let result = root;
    if (result == null || typeof result !== "object") {
      result = typeof segments[0] === "number" ? [] : {};
    }
    let current = result;
    let parent = null;
    let parentKey = null;

    for (let i = 0; i < segments.length; i += 1) {
      const seg = segments[i];
      const isLast = i === segments.length - 1;
      if (isLast) {
        if (typeof seg === "number") {
          if (!Array.isArray(current)) {
            const replacement = [];
            if (parent) parent[parentKey] = replacement;
            else result = replacement;
            current = replacement;
          }
          if (seg >= current.length) {
            while (current.length < seg) current.push(null);
            current.push(value);
          } else {
            current[seg] = value;
          }
        } else {
          if (current == null || typeof current !== "object") {
            const replacement = {};
            if (parent) parent[parentKey] = replacement;
            else result = replacement;
            current = replacement;
          }
          current[seg] = value;
        }
        return result;
      }

      const nextSeg = segments[i + 1];
      const pendingInfo = getValueAtPath(pendingData, segments.slice(0, i + 1));
      const shouldBeArray = Array.isArray(pendingInfo.value) || typeof nextSeg === "number";

      if (typeof seg === "number") {
        if (!Array.isArray(current)) {
          const replacement = [];
          if (parent) parent[parentKey] = replacement;
          else result = replacement;
          current = replacement;
        }
        if (seg >= current.length) {
          while (current.length <= seg) current.push(null);
        }
        if (current[seg] == null || typeof current[seg] !== "object") {
          current[seg] = shouldBeArray ? [] : {};
        }
        parent = current;
        parentKey = seg;
        current = current[seg];
      } else {
        if (current == null || typeof current !== "object") {
          const replacement = {};
          if (parent) parent[parentKey] = replacement;
          else result = replacement;
          current = replacement;
        }
        if (current[seg] == null || typeof current[seg] !== "object") {
          current[seg] = shouldBeArray ? [] : {};
        }
        parent = current;
        parentKey = seg;
        current = current[seg];
      }
    }
    return result;
  }, [getValueAtPath]);

  const deleteAtPath = useCallback((root, segments) => {
    if (segments.length === 0) return null;
    let current = root;
    for (let i = 0; i < segments.length - 1; i += 1) {
      const seg = segments[i];
      if (current == null) return root;
      current = current[seg];
    }
    const last = segments[segments.length - 1];
    if (current == null) return root;
    if (typeof last === "number") {
      if (Array.isArray(current) && last >= 0 && last < current.length) {
        current.splice(last, 1);
      }
    } else {
      if (Object.prototype.hasOwnProperty.call(current, last)) {
        delete current[last];
      }
    }
    return root;
  }, []);

  const buildPartialData = useCallback(
    (baseData, pendingData, acceptedEntries) => {
      let result = baseData == null ? null : JSON.parse(stableStringify(baseData));
      const sorted = [...acceptedEntries].sort((a, b) => compareSegments(a.segments, b.segments));
      for (const entry of sorted) {
        const info = getValueAtPath(pendingData, entry.segments);
        if (info.exists) {
          result = setValueAtPath(result, entry.segments, info.value, pendingData);
        } else {
          result = deleteAtPath(result, entry.segments);
        }
      }
      return result;
    },
    [compareSegments, deleteAtPath, getValueAtPath, setValueAtPath]
  );

  const normalizedPendingOriginal = useMemo(
    () =>
      selectedPendingDetail && selectedPendingDetail.baseData != null
        ? JSON.parse(stableStringify(selectedPendingDetail.baseData))
        : selectedPendingDetail && selectedPendingDetail.currentData != null
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

  const approvalDiffEntries = useMemo(() => {
    if (!selectedPendingDetail || !Array.isArray(selectedPendingDetail.diff)) return [];
    const sourceData = selectedPendingDetail.pendingData || selectedPendingDetail.currentData;
    const formatPath = (segments) =>
      segments
        .map((seg) => (typeof seg === "number" ? `[${seg}]` : seg))
        .join(".");
    return selectedPendingDetail.diff.map((entry, idx) => {
      const segments = parseDiffPath(entry.path || "");
      const pathLabel = entry.path || `Change ${idx + 1}`;
      const { heading } = findHeadingForPath(sourceData, segments);
      const label = heading ? `${heading} — ${pathLabel}` : pathLabel;
      return {
        ...entry,
        idx,
        label,
        segments,
      };
    });
  }, [parseDiffPath, selectedPendingDetail]);

  const activeApprovalDecisions = approvalDecisions[selectedPendingId] || {};
  const activeApprovalReasons = approvalReasons[selectedPendingId] || {};

  const approvalVisibleEntries = useMemo(
    () => approvalDiffEntries.filter((entry) => !activeApprovalDecisions[entry.idx]),
    [activeApprovalDecisions, approvalDiffEntries]
  );

  const approvalReviewedEntries = useMemo(
    () =>
      approvalDiffEntries
        .filter((entry) => activeApprovalDecisions[entry.idx])
        .map((entry) => ({
          ...entry,
          decision: activeApprovalDecisions[entry.idx],
        })),
    [activeApprovalDecisions, approvalDiffEntries]
  );

  const hiddenApprovalCount = approvalDiffEntries.length - approvalVisibleEntries.length;
  const hasHiddenApprovalEntries = hiddenApprovalCount > 0;

  const toggleApprovalDecision = useCallback((idx, decision) => {
    setApprovalDecisions((prev) => {
      const existing = prev[selectedPendingId] || {};
      const next = { ...existing };
      if (existing[idx] === decision) {
        delete next[idx];
      } else {
        next[idx] = decision;
      }
      return { ...prev, [selectedPendingId]: next };
    });
  }, [selectedPendingId]);

  const setAllApprovalDecisions = useCallback(
    (decision) => {
      if (!selectedPendingId) return;
      setApprovalDecisions((prev) => {
        const next = {};
        for (const entry of approvalDiffEntries) {
          next[entry.idx] = decision;
        }
        return { ...prev, [selectedPendingId]: next };
      });
    },
    [approvalDiffEntries, selectedPendingId]
  );

  const clearApprovalDecision = useCallback(
    (idx) => {
      setApprovalDecisions((prev) => {
        const existing = prev[selectedPendingId] || {};
        if (!existing[idx]) return prev;
        const next = { ...existing };
        delete next[idx];
        return { ...prev, [selectedPendingId]: next };
      });
      setApprovalReasons((prev) => {
        const existing = prev[selectedPendingId] || {};
        if (!existing[idx]) return prev;
        const next = { ...existing };
        delete next[idx];
        return { ...prev, [selectedPendingId]: next };
      });
    },
    [selectedPendingId]
  );

  const resolveApprovalDecisions = useCallback(
    (defaultAction) => {
      const accepted = [];
      const rejected = [];
      let undecidedCount = 0;
      for (const entry of approvalDiffEntries) {
        const decision = activeApprovalDecisions[entry.idx];
        if (decision === "accept") {
          accepted.push(entry);
        } else if (decision === "reject") {
          rejected.push(entry);
        } else {
          undecidedCount += 1;
          if (defaultAction === "approve") accepted.push(entry);
          else rejected.push(entry);
        }
      }
      return { accepted, rejected, undecidedCount };
    },
    [activeApprovalDecisions, approvalDiffEntries]
  );

  const clearApprovalDecisions = useCallback((changeId) => {
    setApprovalDecisions((prev) => {
      if (!prev[changeId]) return prev;
      const next = { ...prev };
      delete next[changeId];
      return next;
    });
  }, []);

  const clearApprovalReasons = useCallback((changeId) => {
    setApprovalReasons((prev) => {
      if (!prev[changeId]) return prev;
      const next = { ...prev };
      delete next[changeId];
      return next;
    });
  }, []);

  const buildDecisionSummary = useCallback(
    (defaultAction, accepted, rejected, undecidedCount, reason) => ({
      defaultAction,
      total: approvalDiffEntries.length,
      acceptedCount: accepted.length,
      rejectedCount: rejected.length,
      undecidedCount,
      acceptedPaths: accepted.map((entry) => entry.path || "<root>"),
      rejectedPaths: rejected.map((entry) => entry.path || "<root>"),
      acceptedLabels: accepted.map((entry) => entry.label || entry.path || `Change ${entry.idx + 1}`),
      rejectedLabels: rejected.map((entry) => entry.label || entry.path || `Change ${entry.idx + 1}`),
      acceptedReasonMap: accepted.reduce((acc, entry) => {
        const val = activeApprovalReasons[entry.idx];
        if (typeof val === "string" && val.trim()) {
          acc[entry.path || "<root>"] = val.trim();
        }
        return acc;
      }, {}),
      rejectedReasonMap: rejected.reduce((acc, entry) => {
        const val = activeApprovalReasons[entry.idx];
        if (typeof val === "string" && val.trim()) {
          acc[entry.path || "<root>"] = val.trim();
        }
        return acc;
      }, {}),
      ...(reason ? { reason } : {}),
    }),
    [activeApprovalReasons, approvalDiffEntries.length]
  );

  const approvalChangeLocations = useMemo(() => {
    if (!selectedPendingDetail) return [];
    const sourceData = selectedPendingDetail.pendingData || selectedPendingDetail.currentData;
    const formatPath = (segments) =>
      segments
        .map((seg) => (typeof seg === "number" ? `[${seg}]` : seg))
        .join(".");
    const withHeadingLabel = (segments, fallbackPath) => {
      const { heading } = findHeadingForPath(sourceData, segments);
      const pathLabel = fallbackPath || (segments.length ? formatPath(segments) : "root");
      return heading ? `${heading} — ${pathLabel}` : pathLabel;
    };
    // If backend sent a diff summary, use that directly.
    if (Array.isArray(selectedPendingDetail.diff) && selectedPendingDetail.diff.length) {
      return selectedPendingDetail.diff.map((entry, idx) => {
        const segments = entry.path ? parseDiffPath(entry.path) : [];
        return {
          label: withHeadingLabel(segments, entry.path || `Change ${idx + 1}`),
          path: entry.path || "",
          before: entry.before,
          after: entry.after,
          segments,
          fromSummary: true,
        };
      });
    }

    if (approvalsDiffOld === approvalsDiffNew) return [];
    const paths = collectChangedPaths(normalizedPendingOriginal, normalizedPendingNew);
    const seen = new Set();

    return paths
      .slice(0, 100)
      .map((p) => {
        const pathLabel = p.length ? formatPath(p) : "root";
        const label = withHeadingLabel(p, pathLabel);
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
    return (
      <LoginForm
        onLogin={handleLogin}
        loading={authLoading}
        error={authError}
        needsEmailVerification={authNeedsVerify}
        identifierPrefill={authIdentifier}
        onRequestReset={handleRequestPasswordReset}
        onConfirmReset={handleConfirmPasswordReset}
        resetLoading={resetLoading}
        resetError={resetError}
        resetMessage={resetMessage}
        onRequestVerifyEmail={handleRequestEmailVerification}
        onConfirmVerifyEmail={handleConfirmEmailVerification}
        verifyLoading={verifyLoading}
        verifyError={verifyError}
        verifyMessage={verifyMessage}
        passwordPolicy={passwordPolicy}
      />
    );
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
          {isAdmin && (
            <>
              <button className="secondary" onClick={() => setViewMode("editor")} disabled={viewMode === "editor"}>
                Editor
              </button>
              <button className="secondary" onClick={() => setViewMode("approvals")} disabled={viewMode === "approvals"}>
                Approvals
              </button>
            </>
          )}
          {isSuperAdmin && (
            <button className="secondary" onClick={() => setViewMode("users")} disabled={viewMode === "users"}>
              Manage Users
            </button>
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
      {approvalToast && (
        <div className="alert-overlay" role="alertdialog" aria-modal="true">
          <div className="alert-card">
            <h3>Submission complete</h3>
            <p>{approvalToast}</p>
            <div className="alert-actions">
              <button type="button" onClick={() => setApprovalToast("")}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
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
      {viewMode === "approvals" && isAdmin ? (
        <div className="layout approvals-page">
          <section className="approvals">
            <div className="approvals-grid">
              <PendingChanges
                changes={pending}
                selectedId={selectedPendingId}
                loadingId={loadingChangeId}
                onSelect={(id) => loadPendingDetail(id)}
                onSubmit={async (id) => {
                  if (!selectedPendingDetail || id !== selectedPendingId) return;
                  if (!approvalDiffEntries.length) return;
                  if (!selectedPendingDetail.pendingData) return;
                  if (!Object.keys(activeApprovalDecisions).length) {
                    setPendingDetailStatus("Select accept or reject for all changes before submitting.");
                    return;
                  }
                  const { accepted, rejected, undecidedCount } = resolveApprovalDecisions("reject");
                  if (undecidedCount > 0) {
                    setPendingDetailStatus("Select accept or reject for all changes before submitting.");
                    return;
                  }
                  setPendingDetailStatus("");
                  setPendingDetailStatus("Submitting decision...");
                  try {
                    const decisionSummary = buildDecisionSummary("reject", accepted, rejected, undecidedCount);
                    if (!accepted.length && rejected.length) {
                      await rejectChange(token, id, { decisionSummary });
                    } else {
                      const merged = buildPartialData(selectedPendingDetail.baseData, selectedPendingDetail.pendingData, accepted);
                      await approveChange(token, id, { data: merged, decisionSummary });
                    }
                    showApprovalToast("Changes submitted.");
                    clearApprovalDecisions(id);
                    clearApprovalReasons(id);
                    clearApprovalReasons(id);
                    setSelectedPendingId("");
                    setSelectedPendingDetail(null);
                    setSelectedApprovalContext(null);
                    await loadPending();
                    setPendingDetailStatus("");
                  } catch (err) {
                    setPendingDetailStatus(err.message || "Failed to submit decision.");
                  }
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
                    {selectedPendingDetail.baseError && (
                      <p className="error">Baseline snapshot error: {selectedPendingDetail.baseError}</p>
                    )}
                    {selectedPendingDetail.currentError && (
                      <p className="error">Current file error: {selectedPendingDetail.currentError}</p>
                    )}
                    {approvalVisibleEntries.length ? (
                      <div className="diff-summary">
                        <div className="diff-summary-toolbar">
                          <div className="diff-summary-toolbar-actions">
                            <button type="button" className="secondary" onClick={() => setAllApprovalDecisions("accept")}>
                              Accept all
                            </button>
                            <button type="button" className="secondary" onClick={() => setAllApprovalDecisions("reject")}>
                              Reject all
                            </button>
                            {hasHiddenApprovalEntries && (
                              <button type="button" className="secondary" onClick={() => clearApprovalDecisions(selectedPendingId)}>
                                Reset selections
                              </button>
                            )}
                          </div>
                          {hasHiddenApprovalEntries && (
                            <div className="diff-summary-reviewed">
                              <span className="muted">{hiddenApprovalCount} reviewed hidden.</span>
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => clearApprovalDecisions(selectedPendingId)}
                              >
                                Show all
                              </button>
                            </div>
                          )}
                        </div>
                        {approvalReviewedEntries.length > 0 && (
                          <div className="diff-reviewed-list">
                            {approvalReviewedEntries.map((entry) => (
                              <div key={`reviewed-${entry.idx}`} className="diff-reviewed-item">
                                <span className={`diff-reviewed-pill ${entry.decision}`}>{entry.decision}</span>
                                <span className="diff-reviewed-label">{entry.label || entry.path || `Change ${entry.idx + 1}`}</span>
                                <button
                                  type="button"
                                  className="secondary"
                                  onClick={() => clearApprovalDecision(entry.idx)}
                                >
                                  Undo
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                        {approvalVisibleEntries.map((entry) => {
                          const decision = activeApprovalDecisions[entry.idx];
                          const pathLabel = entry.label || `Change ${entry.idx + 1}`;
                          const beforeVal = entry.before === null || entry.before === undefined ? "(none)" : String(entry.before);
                          const afterVal = entry.after === null || entry.after === undefined ? "(none)" : String(entry.after);
                          return (
                            <div
                              key={entry.idx}
                              className={`diff-summary-item ${decision === "accept" ? "accepted" : ""} ${decision === "reject" ? "rejected" : ""}`}
                            >
                              <div className="diff-summary-item-header">
                                <div className="diff-summary-pill">{pathLabel}</div>
                                <div className="diff-summary-actions">
                                  <button
                                    type="button"
                                    className={`diff-summary-action accept ${decision === "accept" ? "active" : ""}`}
                                    onClick={() => toggleApprovalDecision(entry.idx, "accept")}
                                    aria-label="Accept this change"
                                    title="Accept this change"
                                  >
                                    <svg viewBox="0 0 16 16" aria-hidden="true">
                                      <path d="M6.2 11.3 2.9 8l1.1-1.1 2.2 2.2 5-5 1.1 1.1z" />
                                    </svg>
                                  </button>
                                  <button
                                    type="button"
                                    className={`diff-summary-action reject ${decision === "reject" ? "active" : ""}`}
                                    onClick={() => toggleApprovalDecision(entry.idx, "reject")}
                                    aria-label="Reject this change"
                                    title="Reject this change"
                                  >
                                    <svg viewBox="0 0 24 24" aria-hidden="true">
                                      <path
                                        d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM6 9h2v9H6V9z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <label className="diff-summary-reason">
                                <span className="muted">Reason (optional)</span>
                                <input
                                  type="text"
                                  value={activeApprovalReasons[entry.idx] || ""}
                                  onChange={(event) =>
                                    setApprovalReasons((prev) => ({
                                      ...prev,
                                      [selectedPendingId]: {
                                        ...(prev[selectedPendingId] || {}),
                                        [entry.idx]: event.target.value,
                                      },
                                    }))
                                  }
                                  placeholder="Add a reason for this decision"
                                />
                              </label>
                              <div className="diff-summary-row">
                                <div className="diff-summary-cell before">
                                  <span className="diff-sign">-</span>
                                  <pre>{beforeVal}</pre>
                                </div>
                                <div className="diff-summary-cell after">
                                  <span className="diff-sign">+</span>
                                  <pre>{afterVal}</pre>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        {selectedPendingDetail.diffTruncated && (
                          <p className="muted">Diff truncated; more than 500 differences.</p>
                        )}
                      </div>
                    ) : approvalDiffEntries.length && hasHiddenApprovalEntries ? (
                      <div className="approval-empty">
                        <p className="muted">All changes have been reviewed. Use Submit to apply your selections.</p>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => clearApprovalDecisions(selectedPendingId)}
                        >
                          Show all changes
                        </button>
                      </div>
                    ) : approvalsDiffOld === approvalsDiffNew ? (
                      <div className="approval-empty">
                        <p className="muted">No differences between baseline snapshot and requested change.</p>
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
      ) : viewMode === "users" && isSuperAdmin ? (
        <div className="layout approvals-page users-page">
          <section className="approvals">
            <div className="approvals-grid users-grid">
              <div className="users-panel">
                <div className="pending-header">
                  <h2>Users</h2>
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => {
                      setCreateMode(true);
                      setSelectedUser(null);
                      setUserDetailError("");
                      setUserStatusMessage("");
                    }}
                  >
                    New user
                  </button>
                </div>
                <div className="user-search">
                  <input
                    value={usersQuery}
                    onChange={(event) => setUsersQuery(event.target.value)}
                    placeholder="Search by username or email"
                  />
                  <button
                    type="button"
                    className="secondary"
                    onClick={() => loadUsers({ query: usersQuery, nextToken: "" })}
                    disabled={usersLoading}
                  >
                    {usersLoading ? "Searching..." : "Search"}
                  </button>
                </div>
                {usersError && <p className="error">{usersError}</p>}
                {!usersLoading && users.length === 0 && <p className="muted">No users found.</p>}
                <div className="user-list">
                  {users.map((user) => {
                    const active = selectedUser?.username === user.username;
                    return (
                      <div key={user.username} className={`user-card ${active ? "active" : ""}`}>
                        <div className="user-card-main">
                          <strong>{user.username}</strong>
                          <span className="muted">{user.email || "No email"}</span>
                        </div>
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => loadUserDetail(user.username)}
                          disabled={userDetailLoading && active}
                        >
                          {userDetailLoading && active ? "Loading..." : active ? "Viewing" : "View"}
                        </button>
                      </div>
                    );
                  })}
                </div>
                {usersNextToken && (
                  <button type="button" className="secondary" onClick={loadMoreUsers} disabled={usersLoading}>
                    {usersLoading ? "Loading..." : "Load more"}
                  </button>
                )}
              </div>
              <div className="user-detail">
                {userDetailError && <p className="error">{userDetailError}</p>}
                {userStatusMessage && (
                  <p className={userStatusKind === "error" ? "error" : "status"}>{userStatusMessage}</p>
                )}
                {createMode ? (
                  <div className="user-form">
                    <h3>Create user</h3>
                    <label>
                      Username
                      <input
                        value={createForm.username}
                        onChange={(event) => setCreateForm((prev) => ({ ...prev, username: event.target.value }))}
                        placeholder="username"
                      />
                    </label>
                    <label>
                      Email
                      <input
                        value={createForm.email}
                        onChange={(event) => setCreateForm((prev) => ({ ...prev, email: event.target.value }))}
                        placeholder="user@email.com"
                      />
                    </label>
                    <label>
                      Name
                      <input
                        value={createForm.name}
                        onChange={(event) => setCreateForm((prev) => ({ ...prev, name: event.target.value }))}
                        placeholder="Full name"
                      />
                    </label>
                    <label>
                      Temporary password (optional)
                      <input
                        type="password"
                        value={createForm.temporaryPassword}
                        onChange={(event) =>
                          setCreateForm((prev) => ({ ...prev, temporaryPassword: event.target.value }))
                        }
                        placeholder="Temp password"
                      />
                    </label>
                    <label className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={createForm.sendInvite}
                        onChange={(event) => setCreateForm((prev) => ({ ...prev, sendInvite: event.target.checked }))}
                      />
                      Send invite email
                    </label>
                    <label className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={createForm.email_verified}
                        onChange={(event) =>
                          setCreateForm((prev) => ({ ...prev, email_verified: event.target.checked }))
                        }
                      />
                      Mark email as verified
                    </label>
                    <label>
                      Role
                      <select
                        value={createForm.role}
                        onChange={(event) => setCreateForm((prev) => ({ ...prev, role: event.target.value }))}
                      >
                        <option value="">Select role</option>
                        {groupOptions.map((group) => (
                          <option key={group} value={group}>
                            {group}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="reset-actions">
                      <button type="button" onClick={handleCreateUser} disabled={isCreatingUser}>
                        {isCreatingUser ? "Creating..." : "Create user"}
                      </button>
                      <button type="button" className="secondary" onClick={() => setCreateMode(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : selectedUser ? (
                  <div className="user-form">
                    <h3>{selectedUser.username}</h3>
                    <p className="muted">Status: {selectedUser.status || "Unknown"}</p>
                    <label>
                      Email
                      <input
                        value={editForm.email}
                        onChange={(event) => setEditForm((prev) => ({ ...prev, email: event.target.value }))}
                        placeholder="user@email.com"
                      />
                    </label>
                    <label>
                      Name
                      <input
                        value={editForm.name}
                        onChange={(event) => setEditForm((prev) => ({ ...prev, name: event.target.value }))}
                        placeholder="Full name"
                      />
                    </label>
                    <label className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={editForm.email_verified}
                        onChange={(event) =>
                          setEditForm((prev) => ({ ...prev, email_verified: event.target.checked }))
                        }
                      />
                      Email verified
                    </label>
                    <label className="checkbox-row">
                      <input
                        type="checkbox"
                        checked={editForm.enabled}
                        onChange={(event) => setEditForm((prev) => ({ ...prev, enabled: event.target.checked }))}
                      />
                      Account enabled
                    </label>
                    <label>
                      Role
                      <select
                        value={editForm.role}
                        onChange={(event) => setEditForm((prev) => ({ ...prev, role: event.target.value }))}
                      >
                        <option value="">Select role</option>
                        {groupOptions.map((group) => (
                          <option key={group} value={group}>
                            {group}
                          </option>
                        ))}
                      </select>
                    </label>
                    <div className="reset-actions">
                      <button type="button" onClick={handleUpdateUser} disabled={isUpdatingUser}>
                        {isUpdatingUser ? "Saving..." : "Save changes"}
                      </button>
                      <button type="button" className="danger" onClick={handleDeleteUser} disabled={isUpdatingUser}>
                        Delete user
                      </button>
                      <button type="button" className="secondary" onClick={() => setCreateMode(true)}>
                        Create new user
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="approval-empty">
                    <p className="muted">Select a user to view details or create a new user.</p>
                  </div>
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
                  {canEdit && (
                    <label className="toolbar-summary">
                      Summary
                      <input value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="What did you change?" />
                    </label>
                  )}
                  <div className="toolbar-actions">
                    <button type="button" className="secondary" onClick={() => setShowDiff((prev) => !prev)}>
                      {showDiff ? "Hide diff" : "Show diff"}
                    </button>
                    {canEdit && (
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
