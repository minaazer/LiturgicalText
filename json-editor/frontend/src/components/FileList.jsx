import React, { useEffect, useMemo, useState } from "react";

const buildTree = (files) => {
  const root = { name: "", path: "", type: "folder", children: [] };
  const ensureFolder = (parent, name) => {
    const existing = parent.children.find((child) => child.type === "folder" && child.name === name);
    if (existing) return existing;
    const folder = { name, path: parent.path ? `${parent.path}/${name}` : name, type: "folder", children: [] };
    parent.children.push(folder);
    return folder;
  };

  (files || []).forEach((file) => {
    const path = file.path || "";
    const segments = path.split("/").filter(Boolean);
    let current = root;
    segments.forEach((seg, idx) => {
      const isLast = idx === segments.length - 1;
      if (isLast) {
        current.children.push({ name: seg, path, type: "file" });
      } else {
        current = ensureFolder(current, seg);
      }
    });
  });

  return root;
};

const sortChildren = (children) =>
  [...children].sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === "folder" ? -1 : 1;
  });

const FileList = ({ files, selected, onSelect }) => {
  const tree = useMemo(() => buildTree(files), [files]);
  const [openFolders, setOpenFolders] = useState({ "": true });
  const displayName = (name) => (name ? name.charAt(0).toUpperCase() + name.slice(1) : name);

  useEffect(() => {
    setOpenFolders((prev) => ({ ...prev, "": true }));
  }, [files]);

  const toggleFolder = (path) => {
    setOpenFolders((prev) => ({ ...prev, [path]: !prev[path] }));
  };

  const renderNode = (node, depth = 0) => {
    if (node.type === "file") {
      const label = displayName(node.name.replace(/\.json$/i, ""));
      const isActive = selected === node.path;
      return (
        <div key={node.path} className="file-row" style={{ paddingLeft: depth * 12 }}>
          <button className={`file-button ${isActive ? "active" : ""}`} onClick={() => onSelect(node.path)}>
            {label}
          </button>
        </div>
      );
    }

    const isOpen = Boolean(openFolders[node.path]);
    return (
      <div key={node.path || "root"} className="folder-block">
        {node.path !== "" && (
          <div className="folder-row" style={{ paddingLeft: depth * 12 }}>
            <button className="folder-toggle" onClick={() => toggleFolder(node.path)}>
              {isOpen ? "-" : "+"}
            </button>
            <span className="folder-name">{displayName(node.name)}</span>
          </div>
        )}
        {isOpen &&
          sortChildren(node.children).map((child) =>
            renderNode(child, node.path === "" ? depth : depth + 1)
          )}
      </div>
    );
  };

  return (
    <div className="file-list">
      <h2>JSON Files</h2>
      <div className="file-tree">{sortChildren(tree.children).map((child) => renderNode(child, 0))}</div>
    </div>
  );
};

export default FileList;
