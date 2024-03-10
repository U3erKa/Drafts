import fs from "fs"

const lines = fs
  .readFileSync("text.txt", { encoding: "utf8" })
  .split("\n")
  .filter((line) => !line.startsWith(" "))

const data = lines.map((line) => line.split("\t")[0])
fs.writeFileSync("res.txt", data.join("\n"))
