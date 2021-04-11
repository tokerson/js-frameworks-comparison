import puppeteer from 'puppeteer';
import fs from 'fs';
import { SORT_FILTERS } from '../shared/helpers/sortOptions.mjs';

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
  {
    id: 'angular',
  },
];

const performProfiling = async (testPage) => {
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
  await page.waitForTimeout(100);
  await page.select('.post-sort__select', SORT_FILTERS.OLDEST);
  await page.waitForTimeout(100);

  await page.type('.search-input', 'da');
  await page.click('.search-input__button');

  await page.waitForTimeout(100);
  await page.tracing.stop();
  await browser.close();
};

const run = async () => {
  fs.mkdirSync(dirName);

  for (const page of pages) {
    await performProfiling(page);
  }
};

run();
