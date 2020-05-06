import { writeFileSync } from 'fs-extra';
import { relative, resolve } from 'path';
import { version } from '../package.json';

const COMMIT_HASH = process.argv[2] || '';
const TAG = process.argv[3] || version;

const VERSION = {
  TAG,
  COMMIT_HASH,
};

const file = resolve(__dirname, '..', 'projects', 'example', 'src', 'environments', 'version.ts');
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
