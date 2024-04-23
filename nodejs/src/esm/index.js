/**
 * @template T
 * @param {string | URL} workerPath
 * @param {WorkerOptions & {workerData: any} | undefined} options
 * @returns {Promise<T>}
 */
export function launchWorker(workerPath, options) {
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

/**
 * @template T
 * @template R
 * @param {string | URL} workerPath
 * @param {WorkerOptions | undefined} [options]
 * @returns {[(workerData: T) => Promise<R>, () => void]}
 */
export function createWorker(workerPath, options) {
  const worker = new Worker(workerPath, options)
  function invokeWorker(/** @type {*} */ workerData) {
    worker.postMessage(workerData)
    return new Promise((resolve, reject) => {
      const handleMessage = (/** @type {MessageEvent} */ e) => {
        resolve(e.data)
      }
      const handleError = (/** @type {ErrorEvent | MessageEvent} */ e) => {
        reject(e instanceof MessageEvent ? e.data : e.error ?? e.message)
      }
      worker.addEventListener("message", handleMessage, { once: true })
      worker.addEventListener("error", handleError, { once: true })
      worker.addEventListener("messageerror", handleError, { once: true })
    })
  }
  return [invokeWorker, () => worker.terminate()]
}

const workers = Array.from({ length: navigator.hardwareConcurrency }).map(() =>
  createWorker("web-worker.js", { type: "module" }),
)
function runWorkers() {
  const messages = workers.map(([invokeWorker, terminateWorker], i) => invokeWorker({ hello: "world", i }))
  return Promise.all(messages).then(console.log)
}
const interval = setInterval(runWorkers, 5000)
setTimeout(() => {
  clearInterval(interval)
  workers.map(([invokeWorker, terminateWorker]) => terminateWorker())
}, 60 * 1000)

/*
const tasks = Array.from({ length: navigator.hardwareConcurrency }).map((_, i) =>
  launchWorker("web-worker.js", { type: "module", workerData: { hello: "world", i } }),
)
Promise.all(tasks).then(console.log)
*/
