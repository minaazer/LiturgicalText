import { API_BASE_URL } from "./config.js";

const buildHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
};

export const apiFetch = async (path, token, options = {}) => {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...buildHeaders(token),
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed (${res.status})`);
  }
  if (res.status === 204) return null;
  return res.json();
};

export const fetchFiles = (token) => apiFetch("/files", token);

export const fetchSchema = (token, path) =>
  apiFetch(`/schemas/${encodeURIComponent(path)}`, token);

export const fetchFile = (token, path) =>
  apiFetch(`/files/${encodeURIComponent(path)}`, token);

export const submitChange = (token, payload) =>
  apiFetch("/changes", token, {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const fetchChanges = (token, status = "pending") =>
  apiFetch(`/changes?status=${encodeURIComponent(status)}`, token);

export const fetchChange = (token, id) =>
  apiFetch(`/changes/${encodeURIComponent(id)}`, token);

export const approveChange = (token, id, payload) =>
  apiFetch(`/changes/${encodeURIComponent(id)}/approve`, token, {
    method: "POST",
    ...(payload ? { body: JSON.stringify(payload) } : {}),
  });

export const rejectChange = (token, id, payload) =>
  apiFetch(`/changes/${encodeURIComponent(id)}/reject`, token, {
    method: "POST",
    body: JSON.stringify(payload || {}),
  });

export const requestEmailVerification = (identifier) =>
  apiFetch("/auth/verify-email/request", null, {
    method: "POST",
    body: JSON.stringify({ identifier }),
  });

export const confirmEmailVerification = (identifier, code) =>
  apiFetch("/auth/verify-email/confirm", null, {
    method: "POST",
    body: JSON.stringify({ identifier, code }),
  });

export const resolveIdentifier = (identifier) =>
  apiFetch("/auth/resolve-identifier", null, {
    method: "POST",
    body: JSON.stringify({ identifier }),
  });

export const fetchPasswordPolicy = () => apiFetch("/auth/password-policy", null);

export const listUsers = (token, { q, limit, nextToken } = {}) => {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (limit) params.set("limit", String(limit));
  if (nextToken) params.set("nextToken", nextToken);
  const suffix = params.toString() ? `?${params.toString()}` : "";
  return apiFetch(`/admin/users${suffix}`, token);
};

export const getUserDetail = (token, username) =>
  apiFetch(`/admin/users/${encodeURIComponent(username)}`, token);

export const updateUser = (token, username, payload) =>
  apiFetch(`/admin/users/${encodeURIComponent(username)}`, token, {
    method: "POST",
    body: JSON.stringify(payload || {}),
  });

export const createUser = (token, payload) =>
  apiFetch("/admin/users", token, {
    method: "POST",
    body: JSON.stringify(payload || {}),
  });

export const deleteUser = (token, username) =>
  apiFetch(`/admin/users/${encodeURIComponent(username)}`, token, {
    method: "DELETE",
  });
