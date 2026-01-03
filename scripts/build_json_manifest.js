const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const rootDir = path.resolve(__dirname, "..");
const jsonRoot = path.join(rootDir, "data", "jsons");
const outputPath = path.join(jsonRoot, "manifest.json");

const hashFile = (filePath) => {
  const data = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(data).digest("hex");
};

const walkJsonFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".json")) {
      if (path.basename(fullPath) !== "manifest.json") {
        files.push(fullPath);
      }
    }
  });
  return files;
};

const jsonFiles = walkJsonFiles(jsonRoot);
const files = jsonFiles
  .map((filePath) => {
    const relPath = path
      .relative(jsonRoot, filePath)
      .replace(/\\/g, "/");
    const stat = fs.statSync(filePath);
    return {
      path: relPath,
      hash: hashFile(filePath),
      size: stat.size,
    };
  })
  .sort((a, b) => a.path.localeCompare(b.path));

const manifest = {
  version: 1,
  generatedAt: new Date().toISOString(),
  files,
};

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(`Wrote manifest with ${files.length} files to ${outputPath}`);
