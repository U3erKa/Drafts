const fs = require("fs")
const fsOptions = Object.freeze({ encoding: "utf8" })

const title = "Intensive Language Course English"
const files = fs.readdirSync(".", fsOptions).filter((file) => file.includes(title))

let matches = 0
files.forEach((file) => {
  const contents = fs.readFileSync(file, fsOptions)

  const regexHell = /^Unit \n+,? [(Dialogue)|(Exercise)] \n+\.? [(Listen and repeat)|(Answers)]\.?/i
  const res = contents.match(/Unit \d+,? ((Dialogue)|(Exercise)) \d+( Answers)?/i)
  // contents.replace()

  if (res) {
    console.log(res)
    matches++
  }
})

console.log(matches)
