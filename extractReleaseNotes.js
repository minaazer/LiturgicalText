const fs = require("fs");
const path = require("path");

// Read app.json
const appJsonPath = path.join(__dirname, "../app.json");
const appJson = JSON.parse(fs.readFileSync(appJsonPath, "utf-8"));

// Extract version from app.json
const version = appJson.expo.version;

// Import the changelog
const changelog = require("./changelog");

if (!changelog[version]) {
  console.error(`No changelog found for version ${version}`);
  process.exit(1);
}

const releaseNotes = changelog[version].join("\n") || "Bug fixes and performance improvements.";
console.log(releaseNotes);
