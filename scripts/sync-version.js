/**
 * Sync versions between root package.json a npm repository package.json
 */
const { resolve } = require('path')
const { writeFileSync } = require('fs-extra')
const { version } = require('../package.json')
const { publishConfig } = require('../package.json')

const packagePath = resolve(
  __dirname,
  '..',
  'projects',
  'ngx-scrolltop',
  'package.json'
)
const package = require(packagePath)

package.version = version
package.publishConfig = publishConfig

writeFileSync(packagePath, JSON.stringify(package, null, 2))

console.log('\x1b[34m', `Version info synced ${package.version}`)
