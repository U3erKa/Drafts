const fs = require("fs")

const data = fs.readFileSync("./not-in-winget.txt", { encoding: "utf8" })
const lines = data.split("\n").sort()

fs.writeFileSync("not-in-winget-sorted.txt", lines.join("\n"), { encoding: "utf8" })
