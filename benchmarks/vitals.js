const execSync = require('child_process').execSync;
const spawnSync = require('child_process').spawnSync;
const lighthouseCli = require.resolve('lighthouse/lighthouse-cli');

const {
  computeMedianRun,
} = require('lighthouse/lighthouse-core/lib/median-run.js');
const fs = require('fs');

const frameworks = ['react', 'vue', 'svelte', 'angular'];
const dirName = `./vitals/${Date.now()}`;
fs.mkdirSync(dirName);

const measureVitals = ({ framework, mobile }) => {
  const results = [];

  for (let i = 0; i < 7; i++) {
    console.log(`Running ${framework} Lighthouse attempt #${i + 1}...`);
    const fileName = `./${dirName}/${framework}-output-${i + 1}${
      mobile ? '-mobile' : ''
    }.json`;
    spawnSync('node', [
      lighthouseCli,
      `https://${framework}-benchmark.netlify.app`,
      '--output=json',
      '--only-categories=performance',
      `--output-path=${fileName}`,
      '--chrome-flags="--headless"',
      !mobile ? '--preset=desktop' : '',
    ]);

    const res = require(fileName);
    results.push(res);

    try {
      fs.unlinkSync(fileName);
    } catch (e) {
      console.log('Could not find a file ', fileName);
    }
  }

  const median = computeMedianRun(results);

  fs.writeFileSync(
    `${dirName}/${framework}${mobile ? '-mobile' : ''}.json`,
    JSON.stringify(median),
  );

  console.log(
    'Median performance score was',
    median.categories.performance.score * 100,
  );
};

frameworks.forEach((framework) => measureVitals({ framework }));
frameworks.forEach((framework) => measureVitals({ framework, mobile: true }));
