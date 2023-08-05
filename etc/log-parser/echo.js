#!/usr/bin/env node
const JSON5 = require("json5")
// const zlib = require("zlib")

const [nodePath, filePath, ...argv] = process.argv

const test1 = JSON5.parse("[ { test: true }, { test: false }, ]")
const test2 = JSON.parse('[ { "test": true }, { "test": false } ]')
// console.log(test1)
// console.log(test2)

console.log(__filename)
console.log(__dirname)

// console.log(JSON.stringify({ eol: os.EOL }))

// console.log(perf_hooks.constants)

console.log(process.argv)
// console.log(argv)
// console.log(argv.join(' '))
