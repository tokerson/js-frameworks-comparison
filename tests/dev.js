const execSync = require('child_process').execSync;

const frameworks = ['react', 'vue', 'svelte', 'angular'];
for (let framework of frameworks) {
  console.log('Running tests for', framework);
  execSync(
    `cd ../${framework}-benchmark && yarn run yarn run cypress run --headless --config baseUrl=https://${framework}-benchmark.netlify.app`,
    { stdio: 'inherit' },
  );
}
