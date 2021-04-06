const puppeteer = require('puppeteer');
const fs = require('fs');

const getPageUrl = (pageId) => `https://${pageId}-benchmark.netlify.app`;
const date = Date.now();
const dirName = `./results/${date}`;

const pages = [
  {
    id: 'react',
  },
  {
    id: 'vue',
  },
  {
    id: 'svelte',
  },
];

const performProfiling = async (testPage) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(getPageUrl(testPage.id));

  await page.waitForSelector('.search-input');
  await page.tracing.start({
    path: `${dirName}/${testPage.id}.json`,
    screenshots: true,
  });

  await page.type('.search-input', 'da');
  await page.click('.search-input__button');

  await page.waitForTimeout(1000);
  await page.tracing.stop();
  return await browser.close();
};

const run = async () => {

  fs.mkdirSync(dirName);
  await Promise.all(
    pages.map(async (page) => {
      return await performProfiling(page);
    }),
  );
};

run();
