import puppeteer from 'puppeteer';
import fs from 'fs';
import { SORT_FILTERS } from '../shared/helpers/sortOptions.mjs';

const getPageUrl = (pageId) => `https://${pageId}-benchmark.netlify.app`;

const pages = [
  {
    id: 'vue',
  },
  {
    id: 'react',
  },
  {
    id: 'svelte',
  },
  {
    id: 'angular',
  },
];

const performProfiling = async (testPage, {dirName}) => {
  console.log('launching for ', testPage);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(getPageUrl(testPage.id));

  await page.waitForSelector('.search-input');
  await page.tracing.start({
    path: `${dirName}/${testPage.id}.json`,
    screenshots: true,
  });

  await page.select('.post-sort__select', SORT_FILTERS.NEWEST);

  await page.select('.post-sort__select', SORT_FILTERS.OLDEST);

  await page.type('.search-input', 'da');
  await page.click('.search-input__button');

  await page.click('.post__read-more');
  await page.waitForTimeout(100);

  await page.tracing.stop();
  await browser.close();
};

const run = async () => {
  const date = Date.now();
  const dirName = `./results/${date}`;

  fs.mkdirSync(dirName);
  console.log(`Created a directory: "${dirName}"`);

  for (const page of pages) {
    await performProfiling(page, { dirName });
  }
};

for (let i = 0; i < 7; i++) {
  await run();
}
