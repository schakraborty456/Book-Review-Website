const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const possiblePaths = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];

let browserPath = possiblePaths.find(p => fs.existsSync(p));
console.log('Found browser:', browserPath || 'None');

if (browserPath) {
  // Take headless screenshot at 1440x900
  try {
    const pDesktop = path.resolve(__dirname, 'assets', 'screenshot_desktop.png').replace(/\//g, '\\');
    const pTablet = path.resolve(__dirname, 'assets', 'screenshot_tablet.png').replace(/\//g, '\\');
    const pMobile = path.resolve(__dirname, 'assets', 'screenshot_mobile.png').replace(/\//g, '\\');

    console.log('Capturing 1440px desktop full-page screenshot to:', pDesktop);
    execSync(`"${browserPath}" --headless --disable-gpu --window-size=1440,4200 --screenshot="${pDesktop}" "http://localhost:3000/"`, { timeout: 15000 });
    console.log('Desktop screenshot captured!');

    const pDetail = path.resolve(__dirname, 'assets', 'screenshot_detail_mode.png').replace(/\//g, '\\');
    execSync(`"${browserPath}" --headless --disable-gpu --virtual-time-budget=3000 --window-size=1440,2400 --screenshot="${pDetail}" "http://localhost:3000/?detail=1"`, { timeout: 20000 });
    console.log('Detail mode screenshot captured!');

    console.log('Capturing 768px tablet full-page screenshot to:', pTablet);
    execSync(`"${browserPath}" --headless --disable-gpu --window-size=768,4800 --screenshot="${pTablet}" "http://localhost:3000/"`, { timeout: 15000 });
    console.log('Tablet screenshot captured!');

    console.log('Capturing 496px mobile full-page screenshot to:', pMobile);
    execSync(`"${browserPath}" --headless --disable-gpu --window-size=496,5600 --screenshot="${pMobile}" "http://localhost:3000/"`, { timeout: 15000 });
    console.log('Mobile screenshot captured!');
  } catch (err) {
    console.error('Screenshot error:', err.message);
  }
}
