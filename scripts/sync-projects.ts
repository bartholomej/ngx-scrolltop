/**
 * Sync versions between root package.json a npm repository package.json
 */
import { copyFileSync, writeFileSync } from 'fs-extra';
import { resolve } from 'path';
import {
  author,
  bugs,
  description,
  funding,
  homepage,
  keywords,
  license,
  name,
  publishConfig,
  repository,
  version,
} from '../package.json';
import { PackageJson } from './package.json.interface';

const packagePath = resolve(__dirname, '..', 'projects', 'ngx-scrolltop', 'package.json');
const pkg: PackageJson = require(packagePath);

pkg.name = name;
pkg.version = version;
pkg.description = description;
pkg.author = author;
pkg.homepage = homepage;
pkg.license = license;
pkg.repository = repository;
pkg.bugs = bugs;
pkg.keywords = keywords;
pkg.funding = funding;
pkg.publishConfig = publishConfig;

writeFileSync(packagePath, JSON.stringify(pkg, null, 2));

console.log('\x1b[34m', `Version info synced ${pkg.version}`);

// Copy README into dist folder
const copyFiles = ['README.md'];
for (const file of copyFiles) {
  copyFileSync(`./${file}`, `./projects/ngx-scrolltop//${file}`);
}
