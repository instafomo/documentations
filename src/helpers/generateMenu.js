const fs = require("fs");
const path = require("path");

/**
 * Convert a string to Camel Case with spaces
 */
function toCamelCase(str) {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Create or update _category_.json file in each directory
 */
function createOrUpdateCategoryJson(dir, basePath, missingOverviewLog) {
  const filesAndFolders = fs.readdirSync(dir);
  let hasOverview = filesAndFolders.some(
    (file) =>
      file.toLowerCase() === "overview.md" ||
      file.toLowerCase() === "overview.mdx"
  );
  const categoryFile = path.join(dir, "_category_.json");
  let categoryData = {};

  if (fs.existsSync(categoryFile)) {
    try {
      categoryData = JSON.parse(fs.readFileSync(categoryFile, "utf8"));
    } catch (error) {
      console.error(`❌ Error reading existing ${categoryFile}:`, error);
    }
  }
  if (!categoryData.hasOwnProperty("label")) {
    categoryData.label = toCamelCase(path.basename(dir));
  }
  if (!categoryData.hasOwnProperty("position")) {
    categoryData.position = 1;
  }
  if (hasOverview) {
    categoryData.link = {
      type: "doc",
      id: path
        .relative(basePath, path.join(dir, "overview"))
        .replace(/\\/g, "/"),
    };
  } else {
    delete categoryData.link;
    missingOverviewLog.push(
      `Missing overview in: docs/${path.relative(basePath, dir)}`
    );
  }

  fs.writeFileSync(categoryFile, JSON.stringify(categoryData, null, 4));
}

/**
 * Recursively build sidebar JSON for general documentation with category positioning
 */
function buildSidebar(
  dir,
  baseDir = "",
  excludeFolders = [],
  removePathSegment = "",
  rootDocsDir,
  missingOverviewLog
) {
  if (!fs.existsSync(dir)) return [];

  let items = [];
  const filesAndFolders = fs.readdirSync(dir);

  filesAndFolders.forEach((name) => {
    const fullPath = path.join(dir, name);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      if (excludeFolders.includes(name)) return;

      createOrUpdateCategoryJson(fullPath, rootDocsDir, missingOverviewLog);
      const categoryItems = buildSidebar(
        fullPath,
        path.join(baseDir, name),
        excludeFolders,
        removePathSegment,
        rootDocsDir,
        missingOverviewLog
      );

      if (categoryItems.length > 0) {
        items.push({
          type: "category",
          label: toCamelCase(name),
          items: categoryItems,
          collapsed: true,
          collapsible: true,
        });
      }
    } else if (stats.isFile() && [".md", ".mdx"].includes(path.extname(name))) {
      let fileNameWithoutExt = name.replace(path.extname(name), "");
      let relativePath = path
        .join(baseDir, fileNameWithoutExt)
        .replace(/\\/g, "/");

      if (removePathSegment) {
        relativePath = relativePath.replace(removePathSegment, "");
      }
      relativePath = relativePath.replace(/\s+/g, "");

      if (!items.some((item) => item.docId === relativePath)) {
        items.push({
          type: "link",
          label: toCamelCase(fileNameWithoutExt),
          href: `/docs/${relativePath}`,
          docId: relativePath,
          unlisted: false,
        });
      }
    }
  });

  return items;
}

/**
 * Generate `sidebar.js` (Updated Logic for Docs)
 */
function generateDocsSidebar() {
  const rootDir = path.resolve(__dirname, "../../");
  const docsDir = path.join(rootDir, "docs");
  let missingOverviewLog = [];

  if (!fs.existsSync(docsDir)) {
    console.error("❌ Docs directory not found.");
    return;
  }

  buildSidebar(docsDir, "", ["apidocs"], "", docsDir, missingOverviewLog);

  if (missingOverviewLog.length > 0) {
    const logFilePath = path.join(rootDir, "missing_overview.log");
    fs.writeFileSync(logFilePath, missingOverviewLog.join("\n"));
    console.log(`⚠️ Missing overview documents logged at ${logFilePath}`);
  }

  console.log(`✅ Docs Category JSON generated successfully`);
}

// Run sidebar generator
generateDocsSidebar();
