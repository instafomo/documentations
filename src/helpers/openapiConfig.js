const fs = require("fs");
const path = require("path");

// Recursive function to get all JSON/YAML files in a directory and its subdirectories
function getAllFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Recurse into subdirectories
      getAllFilesRecursively(filePath, fileList);
    } else if (
      file.endsWith(".json") ||
      file.endsWith(".yaml") ||
      file.endsWith(".yml")
    ) {
      // Add only JSON/YAML files
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Generate OpenAPI configurations for all files in nested subdirectories
export function generateOpenAPIConfigs(baseDir, outputDir) {
  const configs = {};
  const specFiles = getAllFilesRecursively(baseDir); // Get all spec files recursively

  specFiles.forEach((filePath) => {
    const relativePath = path.relative(baseDir, filePath); // Get path relative to baseDir
    const name = relativePath.replace(/[\/\\]/g, "-").replace(/\.[^.]+$/, ""); // Unique name for each file

    configs[name] = {
      specPath: filePath, // Full path to the spec file
      outputDir: path.join(outputDir, path.dirname(relativePath)), // Output directory mirrors input structure
      sidebarOptions: {
        groupPathsBy: "tag", // Group docs by OpenAPI tags
      },
      showSchemas: false, // Show schemas in the generated docs
    };
  });

  return configs;
}

module.exports = { generateOpenAPIConfigs };
