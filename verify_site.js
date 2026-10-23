const fs = require('fs');
const path = require('path');

console.log('--- STARTING COMPREHENSIVE SITE VERIFICATION ---');

const baseDir = __dirname;
let errors = [];
let passed = 0;

function checkFile(relPath, minBytes = 1) {
  const fullPath = path.join(baseDir, relPath);
  if (!fs.existsSync(fullPath)) {
    errors.push(`Missing file: ${relPath}`);
  } else {
    const stat = fs.statSync(fullPath);
    if (stat.size < minBytes) {
      errors.push(`File too small (${stat.size} bytes): ${relPath}`);
    } else {
      passed++;
      console.log(`[PASS] ${relPath} (${stat.size} bytes)`);
    }
  }
}

// 1. Check Core Files
checkFile('index.html', 1000);
checkFile('style.css', 1000);
checkFile('script.js', 1000);

// 2. Check All Image Assets
const requiredImages = [
  'assets/images/hero_library_bg.jpg',
  'assets/images/cover_pather_panchali.jpg',
  'assets/images/cover_sesher_kobita.jpg',
  'assets/images/cover_pora.jpg',
  'assets/images/cover_devdas.jpg',
  'assets/images/category_library_bg.jpg',
  'assets/images/sketch_book_parchment.jpg'
];

requiredImages.forEach(img => checkFile(img, 10000));

// 3. Verify HTML & JavaScript element IDs match
const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf-8');
const js = fs.readFileSync(path.join(baseDir, 'script.js'), 'utf-8');

const idRegex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const jsIds = new Set();
while ((match = idRegex.exec(js)) !== null) {
  jsIds.add(match[1]);
}

console.log(`\nVerifying ${jsIds.size} JavaScript IDs exist in index.html...`);
jsIds.forEach(id => {
  if (html.includes(`id="${id}"`)) {
    passed++;
  } else {
    errors.push(`ID in script.js not found in index.html: id="${id}"`);
  }
});

// 4. Verify UTF-8 Bengali strings in HTML
const requiredBengaliPhrases = [
  'পাতার পর পাতা',
  'বই পড়ি, ভাবি, লিখি',
  'ভালো বই',
  'ভালো মানুষ তৈরি করে',
  'সাম্প্রতিক পর্যালোচনা',
  'পথের পাঁচালী',
  'শেষের কবিতা',
  'গোরা',
  'দেবদাস',
  'বিষয়ভিত্তিক বই',
  'উপন্যাস',
  'কবিতা',
  'প্রবন্ধ',
  'সাহিত্য ইতিহাস',
  'ভ্রমণ ও অনুপ্রেরণা',
  'অন্যান্য',
  'একটি ভালো বই হাজারো বন্ধুর চেয়ে বেশি আপন করে তোলে',
  'রবীন্দ্রনাথ ঠাকুর',
  'বই ভাবুক, তুমি ভাবো'
];

console.log(`\nVerifying ${requiredBengaliPhrases.length} Bengali key phrases...`);
requiredBengaliPhrases.forEach(phrase => {
  if (html.includes(phrase)) {
    passed++;
    console.log(`[PASS] Found Bengali phrase: "${phrase}"`);
  } else {
    errors.push(`Missing Bengali phrase in HTML: "${phrase}"`);
  }
});

console.log('\n--- VERIFICATION SUMMARY ---');
console.log(`Passed checks: ${passed}`);
if (errors.length > 0) {
  console.error(`Errors found (${errors.length}):`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('ALL INTEGRITY CHECKS PASSED PERFECTLY!');
}
