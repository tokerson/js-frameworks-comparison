import puppeteer from 'puppeteer';

const pages = [
  {
    framework: 'React',
    pageUrl: 'https://react-benchmark.netlify.app/',
  },
  {
    framework: 'Vue',
    pageUrl: 'https://vue-benchmark.netlify.app/',
  },
];

const run = async (testPage) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(testPage.pageUrl);
  console.log(testPage.framework, await page.metrics());
  const performanceTiming = JSON.parse(
    await page.evaluate(() => JSON.stringify(window.performance.timing)),
  );
  console.log(`performanceTiming for ${testPage.framework}`, performanceTiming);
  browser.close();
};

pages.forEach(run);
