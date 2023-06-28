const p = require('path')
const { fileSync: getGzSize } = require('gzip-size')
const { unlinkSync } = require('fs')

const fixer = (num) => {
  if (num >= 100) return num.toFixed(0)
  else if (num >= 10) return num.toFixed(1)
  return num.toFixed(2)
}

const getUnit = (size) => {
  if (size >= 1000000) return `${fixer(size / 1000000)} Mb`
  if (size >= 1000) return `${fixer(size / 1000)} Kb`
  return `${size} bytes`
}

// GETTING SIZE
const path = p.join(__dirname, '../dist', 'index.esm.babel.js')
const size = getUnit(getGzSize(path))

// LOGGING
const sizeLog = `<p align="center"><i>Bundle Size - ${size} gzipped</i></p>`
const sllen = sizeLog.length
console.log('\n\n')
console.log('-'.repeat(Math.floor(sllen / 2) - 7), 'BUNDLE SIZE', '-'.repeat(Math.floor(sllen / 2) - 6))
console.log(`\n${sizeLog}\n`)
console.log('-'.repeat(sllen), '\n')

// UNLINK
unlinkSync(path)
