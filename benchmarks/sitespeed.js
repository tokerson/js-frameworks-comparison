import { execSync } from 'child_process';

const frameworks = ['react', 'vue', 'svelte', 'angular'];

for (let framework of frameworks) {
  console.log('Creating a sitespeed report for', framework);
  // sitespeed must use the chromeDriver matching the version of your Chrome Browser. 
  // in case of problems, download a chromedriver matching your Chrome version and to below command
  // add --chrome.chromedriverPath <path to the downloaded chromedriver>
  execSync(
    `yarn run sitespeed.io https://${framework}-benchmark.netlify.app -b chrome -n 10 --outputFolder '../benchmarks/sitespeed/${framework}' `,
    { stdio: 'inherit' },
  );
  console.log('Created a sitespeed report for', framework);
}
