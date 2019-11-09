const fs = require('fs')
const { join } = require('path')

const pkgDistPath = '../dist/ngx-scrolltop/package.json'

const pkg = require(pkgDistPath)

// pkg.name = `@bartholomej/${pkg.name}`
pkg.publishConfig = {}
pkg.publishConfig.registry = `https://npm.pkg.github.com/@bartholomej`

fs.writeFileSync(join(__dirname, pkgDistPath), JSON.stringify(pkg, null, 2))
