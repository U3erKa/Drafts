import { exec } from "child_process"

const command = exec("git log --oneline")
let logs = ""

// @ts-expect-error
command.stdout.on("data", (data) => (logs += data))
command.on("exit", () => console.log(logs.split("\n").length))
