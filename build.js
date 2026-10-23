const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const distDir = path.join(srcDir, 'dist');

console.log('--- STARTING PRODUCTION BUILD FOR DIST FOLDER ---');

// 1. Create or clean dist folder
if (fs.existsSync(distDir)) {
  console.log('Cleaning existing dist directory...');
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });
console.log('[OK] Created clean dist/ directory');

// 2. Helper to copy file
function copyFile(srcRel, destRel) {
  const srcPath = path.join(srcDir, srcRel);
  const destPath = path.join(distDir, destRel);
  const destParent = path.dirname(destPath);
  if (!fs.existsSync(destParent)) {
    fs.mkdirSync(destParent, { recursive: true });
  }
  fs.copyFileSync(srcPath, destPath);
  const stat = fs.statSync(destPath);
  console.log(`[COPIED] ${destRel} (${(stat.size / 1024).toFixed(1)} KB)`);
}

// 3. Helper to copy directory
function copyDir(srcRel, destRel) {
  const fullSrc = path.join(srcDir, srcRel);
  const fullDest = path.join(distDir, destRel);
  if (!fs.existsSync(fullDest)) {
    fs.mkdirSync(fullDest, { recursive: true });
  }
  const entries = fs.readdirSync(fullSrc, { withFileTypes: true });
  for (const entry of entries) {
    const sRel = path.join(srcRel, entry.name);
    const dRel = path.join(destRel, entry.name);
    if (entry.isDirectory()) {
      copyDir(sRel, dRel);
    } else {
      copyFile(sRel, dRel);
    }
  }
}

// 4. Copy core site files
copyFile('index.html', 'index.html');
copyFile('style.css', 'style.css');
copyFile('script.js', 'script.js');

// 5. Copy images
if (fs.existsSync(path.join(srcDir, 'assets', 'images'))) {
  copyDir(path.join('assets', 'images'), path.join('assets', 'images'));
}

// 6. Add Netlify _redirects for seamless static hosting
fs.writeFileSync(path.join(distDir, '_redirects'), '/*  /index.html  200\n');
console.log('[OK] Added _redirects configuration for Netlify/Cloudflare hosting');

// 7. Verify all files in dist
console.log('\n--- VERIFYING DIST CONTENTS ---');
const distFiles = [];
function listDist(dir, rel = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const itemRel = rel ? path.join(rel, item.name) : item.name;
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      listDist(fullPath, itemRel);
    } else {
      const s = fs.statSync(fullPath);
      distFiles.push({ file: itemRel.replace(/\\/g, '/'), size: s.size });
    }
  }
}
listDist(distDir);

console.log(`Total files in dist: ${distFiles.length}`);
distFiles.forEach(f => {
  console.log(`  - dist/${f.file} (${(f.size / 1024).toFixed(1)} KB)`);
});

console.log('\n--- PRODUCTION DIST FOLDER CREATED SUCCESSFULLY! ---');
console.log(`Location: ${distDir}`);
