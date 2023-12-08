import { promises as fs } from "fs"

const html = await fetch("https://moodle.zp.edu.ua/").then((res) => res.text())
fs.writeFile("res.html", html)

const htmlElements = document.querySelectorAll("[src], [srcset]")
const tagData = Array.from(htmlElements).map(({ src, srcset, tagName }) => ({ src, srcset, tagName }))
const urls = new Set(tagData.map(({ src }) => src))
