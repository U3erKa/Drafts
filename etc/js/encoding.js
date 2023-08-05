const { readdirSync, promises: fs } = require("fs")
const { TextDecoder } = require("util")
// const Buffer = require('buffer').Buffer;
const Iconv = require("iconv").Iconv
const assert = require("assert")

const files = readdirSync("aaaa").filter((file) => file.indexOf(".") !== -1)

;(async () => {
  try {
    await fs.mkdir("out")
  } catch (error) {}
})()

files.forEach(async (file) => {
  const contents = await fs.readFile(`aaaa/${file}`)

  // convert from UTF-8 to ISO-8859-1

  const iconv = new Iconv("windows-1251", "UTF-8")
  const data = iconv.convert(contents).toString()

  fs.writeFile(`out/${file}`, data, { encoding: "utf8" })
  // const buffer2 = iconv.convert(Buffer.from('Hello, world!'));
  // assert.equal(buffer.inspect(), buffer2.inspect());
  // do something useful with the buffers
})
