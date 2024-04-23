/**
 * @template T
 * @param {string | URL} workerPath
 * @param {WorkerOptions & {workerData: any} | undefined} options
 * @returns {Promise<T>}
 */
export function launchWorker(workerPath, options) {
  const { workerData, ...restOptions } = options ?? {};
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, restOptions);
    const handleMessage = (/** @type {MessageEvent} */ e) => {
      resolve(e.data);
      worker.terminate();
    };
    const handleError = (/** @type {ErrorEvent | MessageEvent} */ e) => {
      reject(e instanceof MessageEvent ? e.data : e.error ?? e.message);
      worker.terminate();
    };
    worker.addEventListener('message', handleMessage, { once: true });
    worker.addEventListener('error', handleError, { once: true });
    worker.addEventListener('messageerror', handleError, { once: true });
    if (workerData) worker.postMessage(workerData);
  });
}

/**
 * @template {{ [key: PropertyKey]: any }} T
 * @template R
 * @param {string | URL} workerPath
 * @param {WorkerOptions | undefined} [options]
 * @returns {[(workerData: T) => Promise<R>, () => void]}
 */
export function createWorker(workerPath, options) {
  const worker = new Worker(workerPath, options);
  function invokeWorker(/** @type {T} */ workerData) {
    const id = crypto.randomUUID();
    worker.postMessage({ ...workerData, id });
    return new Promise((resolve, reject) => {
      const handleMessage = (/** @type {MessageEvent} */ e) => {
        if (e.data.id !== id) return;
        resolve(e.data);
        worker.removeEventListener('message', handleMessage);
      };
      const handleError = (/** @type {ErrorEvent} */ e) => {
        const message = JSON.parse(e.message.replace(/Uncaught [^{]*/, ''));
        if (message.id !== id) return;
        reject(message);
        worker.removeEventListener('error', handleError);
      };
      const handleMessageError = (/** @type {MessageEvent} */ e) => {
        reject(e.data);
      };
      worker.addEventListener('message', handleMessage);
      worker.addEventListener('error', handleError);
      worker.addEventListener('messageerror', handleMessageError, { once: true });
    });
  }
  return [invokeWorker, () => worker.terminate()];
}

const workers = Array.from({ length: navigator.hardwareConcurrency }).map(() =>
  createWorker('web-worker.js', { type: 'module' }),
);
async function runWorkers() {
  const messages = workers.map(([invokeWorker, terminateWorker], i) => invokeWorker({ hello: 'world', i }));
  const data = await Promise.all(messages);
  return console.log(data);
}
const interval = setInterval(runWorkers, 5000);
setTimeout(() => {
  clearInterval(interval);
  for (const [invokeWorker, terminateWorker] of workers) {
    terminateWorker();
  }
}, 60 * 1000);

/*
const tasks = Array.from({ length: navigator.hardwareConcurrency }).map((_, i) =>
  launchWorker("web-worker.js", { type: "module", workerData: { hello: "world", i } }),
)
Promise.all(tasks).then(console.log)
*/
