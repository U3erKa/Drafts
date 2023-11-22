/**
 * @template T
 * @param {string | URL} workerPath
 * @param {WorkerOptions & {workerData: any} | undefined} options
 * @returns {Promise<T>}
 */
function launchWorker(workerPath, options) {
  const { workerData, ...restOptions } = options ?? {}
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, restOptions)
    const handleMessage = (/** @type {MessageEvent} */ e) => {
      resolve(e.data)
      worker.terminate()
    }
    const handleError = (/** @type {ErrorEvent | MessageEvent} */ e) => {
      reject(e instanceof MessageEvent ? e.data : e.error ?? e.message)
      worker.terminate()
    }
    worker.addEventListener("message", handleMessage, { once: true })
    worker.addEventListener("error", handleError, { once: true })
    worker.addEventListener("messageerror", handleError, { once: true })
    if (workerData) worker.postMessage(workerData)
  })
}

const tasks = Array.from({ length: navigator.hardwareConcurrency }).map((_, i) =>
  launchWorker("web-worker.js", { type: "module", workerData: { hello: "world", i } }),
)
Promise.all(tasks).then(console.log)
