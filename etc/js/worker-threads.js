const { availableParallelism } = require("os")
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads")

/**
 * @template T
 * @param {string | URL} workerPath
 * @param {import("worker_threads").WorkerOptions | undefined} options
 * @returns {Promise<T>}
 */
function launchWorker(workerPath, options) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, options)
    worker
      // .once("online", () => console.log("a worker is online"))
      .once("message", resolve)
      .once("error", reject)
      .once("messageerror", reject)
      .once("exit", (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`))
      })
    // worker.terminate()
  })
}

if (isMainThread) {
  const tasks = Array.from({ length: availableParallelism() }).map((_, i) =>
    launchWorker(__filename, { workerData: { hello: "world", i } }),
  )
  Promise.all(tasks).then(console.log)
} else {
  const time = performance.now()
  for (let i = 0; i < 1_000_000_000; i++) {
    /* empty */
  }
  // setTimeout(() => {
  parentPort?.postMessage({ ...workerData, time: performance.now() - time })
  process.exit(0)
  // }, 1000)
}
