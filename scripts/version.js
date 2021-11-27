// const { gitDescribeSync } = require('git-describe');
const { version } = require('../package.json');
const { resolve, relative } = require('path');
const { writeFileSync } = require('fs-extra');

// const gitInfo = gitDescribeSync({
//     dirtyMark: false,
//     dirtySemver: false
// });

let commit_hash = process.argv[2] || '';
let tag = process.argv[3] || version;

const VERSION = {
  TAG: tag,
  COMMIT_HASH: commit_hash,
};

const file = resolve(__dirname, '..', 'projects', 'demo', 'src', 'environments', 'version.ts');
writeFileSync(
  file,
  `// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
export const VERSION = ${JSON.stringify(VERSION, null, 4)};
/* tslint:enable */
`,
  { encoding: 'utf-8' }
);

console.log(
  '\x1b[34m',
  `- Wrote version ${version} info to ${relative(resolve(__dirname, '..'), file)}`
);
