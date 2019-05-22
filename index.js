const puppeteer = require('puppeteer');

  (async () => {

    // Below we start our dynamic image creation script
    const browser = await puppeteer.launch({ headless: true, defaultViewport: null});
    const page = await browser.newPage();
    await page.goto('https://yahoo.com');
    await page.pdf({
      path: 'website.pdf',
      format: 'A4',
      printBackground: true
    });
    await browser.close();
  })();
