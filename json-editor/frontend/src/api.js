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

export const approveChange = (token, id) =>
  apiFetch(`/changes/${encodeURIComponent(id)}/approve`, token, {
    method: "POST",
  });

export const rejectChange = (token, id, reason) =>
  apiFetch(`/changes/${encodeURIComponent(id)}/reject`, token, {
    method: "POST",
    body: JSON.stringify({ reason }),
  });
