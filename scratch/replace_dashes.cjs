const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/[—–]/g, '-');
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error reading/writing ${filePath}: ${err.message}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        walkDir(fullPath);
      }
    } else if (/\.(tsx|ts|js|jsx)$/.test(file)) {
      replaceInFile(fullPath);
    }
  }
}

const targetDir = process.argv[2] || 'src';
const absoluteDir = path.resolve(targetDir);
console.log(`Starting replacement in: ${absoluteDir}`);
walkDir(absoluteDir);
console.log('Finished.');
