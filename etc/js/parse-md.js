#!/usr/bin/env node

const fs = require("fs")
/** @type {{encoding: "utf8"}} */
const fsOptions = { encoding: "utf8" }

const title = "Electrician"
const files = fs.readdirSync(".", fsOptions).filter((file) => file.includes(".m4a"))

const resultFile = "result.md"
fs.writeFileSync(resultFile, `# ${title}\n`, fsOptions)

let chapterChar = ""
let chapter = 0

files.forEach((file) => {
  const contents = fs.readFileSync(file, fsOptions)
  const heading = file.substring(0, file.lastIndexOf(".txt"))

  const [char] = file
  if (chapterChar !== char) {
    // @ts-expect-error
    chapterChar = char
    chapter++
    fs.appendFileSync(resultFile, `## Part ${chapter}\n`)
  }

  fs.appendFileSync(
    resultFile,
    `### ${heading}

${contents}
`,
  )
})
