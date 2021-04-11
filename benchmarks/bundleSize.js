import { execSync } from 'child_process';

const frameworks = ['react', 'vue', 'svelte', 'angular'];

for (let framework of frameworks) {
  console.log('Creating a bundle size report for', framework);
  execSync(`yarn --cwd ../${framework}-benchmark/ analyze`, { stdio: 'inherit'});
  console.log('Created a bundle size report for', framework);
}
