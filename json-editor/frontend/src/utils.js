export const decodeJwt = (token) => {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const payload = parts[1]
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch (err) {
    return null;
  }
};

export const stableStringify = (value, indent = 2) => {
  const seen = new WeakSet();
  const normalize = (val) => {
    if (val === null || typeof val !== "object") return val;
    if (seen.has(val)) return "[Circular]";
    seen.add(val);

    if (Array.isArray(val)) {
      return val.map(normalize);
    }

    const ordered = {};
    for (const key of Object.keys(val).sort()) {
      ordered[key] = normalize(val[key]);
    }
    return ordered;
  };

  return JSON.stringify(normalize(value), null, indent);
};

export const collectChangedPaths = (a, b) => {
  const changes = [];

  const walk = (left, right, path) => {
    if (left === right) return;

    const leftObj = left !== null && typeof left === "object";
    const rightObj = right !== null && typeof right === "object";

    if (!leftObj || !rightObj) {
      changes.push(path);
      return;
    }

    if (Array.isArray(left) && Array.isArray(right)) {
      const max = Math.max(left.length, right.length);
      for (let i = 0; i < max; i += 1) {
        walk(left[i], right[i], path.concat(i));
      }
      return;
    }

    const keys = new Set([...Object.keys(left || {}), ...Object.keys(right || {})]);
    for (const key of keys) {
      walk(left?.[key], right?.[key], path.concat(key));
    }
  };

  walk(a, b, []);
  return changes;
};

export const findHeadingForPath = (data, path) => {
  const getAtPath = (obj, p) => p.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);

  for (let i = path.length; i >= 0; i -= 1) {
    const partial = path.slice(0, i);
    const node = getAtPath(data, partial);
    if (node && typeof node === "object") {
      if (typeof node.english_title === "string" && node.english_title.trim()) {
        return { heading: node.english_title, at: partial };
      }
      if (typeof node.title === "string" && node.title.trim()) {
        return { heading: node.title, at: partial };
      }
    }
  }
  return { heading: null, at: [] };
};

export const roleFromGroups = (groups = []) => {
  if (groups.includes("admin")) return "admin";
  if (groups.includes("editor")) return "editor";
  return "viewer";
};
