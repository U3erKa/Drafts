const fs = require("fs")

const files = fs.readdirSync(".").filter((file) => file.endsWith(".txt"))

const resFile = "transcriptions.md"
const fsOpts = Object.freeze({ encoding: "utf8" })

fs.writeFileSync(resFile, `# EAK\n\n`, fsOpts)
files.forEach((file) => {
  fs.appendFileSync(resFile, `## ${file}\n\n`, fsOpts)
  fs.appendFileSync(resFile, `${fs.readFileSync(file, fsOpts)}\n\n`, fsOpts)
})
