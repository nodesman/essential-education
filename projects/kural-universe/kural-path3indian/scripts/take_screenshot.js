const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080 });
  await page.goto('http://localhost:4000', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'current_site.png', fullPage: true });
  await browser.close();
  console.log('Screenshot taken.');
})();
