const childProcess = require("child_process")

const command = childProcess.exec("git log --oneline")
let logs = ""

command.stdout.on("data", (data) => (logs += data))
command.on("exit", () => console.log(logs.split("\n").length))