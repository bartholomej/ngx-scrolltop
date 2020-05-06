import { writeFileSync } from 'fs-extra';
import { join } from 'path';
import distPackage from '../dist/ngx-scrolltop/package.json';

// Modify package.json in dist folder
const pkg: Record<string, any> = distPackage;

pkg.publishConfig = {};
pkg.publishConfig.registry = `https://npm.pkg.github.com/@bartholomej`;

writeFileSync(
  join(__dirname, '..', 'dist', 'ngx-scrolltop', 'package.json'),
  JSON.stringify(pkg, null, 2)
);
console.log('File package.json modified:', pkg);
