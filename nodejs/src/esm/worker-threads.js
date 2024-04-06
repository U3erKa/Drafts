import { setMaxListeners } from 'events';
import { availableParallelism } from 'os';
import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

/**
 * @template T
 * @param {string | URL} workerPath
 * @param {import("worker_threads").WorkerOptions | undefined} options
 * @returns {Promise<T>}
 */
function launchWorker(workerPath, options) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, options);
    worker
      // .once("online", () => console.log("a worker is online"))
      .once('message', resolve)
      .once('error', reject)
      .once('messageerror', reject)
      .once('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    // worker.terminate()
  });
}

/**
 * @template T
 * @template R
 * @param {string | URL} workerPath
 * @param {import("worker_threads").WorkerOptions | undefined} [options]
 * @returns {[(workerData: T) => Promise<R>, () => void]}
 */
export function createWorker(workerPath, options) {
  const worker = new Worker(workerPath, options);
  function invokeWorker(/** @type {*} */ workerData) {
    worker.postMessage(workerData);
    return new Promise((resolve, reject) => {
      worker
        .once('message', resolve)
        .once('messageerror', reject)
        .once('close', (/** @type {*} */ code) => {
          if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
        });
    });
  }
  return [invokeWorker, () => worker.terminate()];
}

if (isMainThread) {
  const __filename = new URL(import.meta.url);
  const workers = Array.from({ length: availableParallelism() }).map(() => createWorker(__filename));
  setMaxListeners(0);
  // eslint-disable-next-line no-inner-declarations
  function runWorkers() {
    const messages = workers.map(([invokeWorker, terminateWorker], i) => invokeWorker({ hello: 'world', i }));
    return Promise.all(messages).then(console.log);
  }
  // runWorkers()
  const interval = setInterval(runWorkers, 5000);

  setTimeout(() => {
    clearInterval(interval);
    workers.map(([invokeWorker, terminateWorker]) => terminateWorker());
  }, 60 * 1000);

  /*
  const tasks = Array.from({ length: availableParallelism() }).map((_, i) =>
    launchWorker(__filename, { workerData: { hello: "world", i } }),
  )
  Promise.all(tasks).then(console.log)
  */
} else {
  parentPort?.on('message', (data) => {
    const time = performance.now();
    for (let i = 0; i < 1_000_000_000; i++) {
      /* empty */
    }
    // setTimeout(() => {
    parentPort?.postMessage({ ...workerData, ...data, time: performance.now() - time });
    // process.exit(0)
    // }, 1000)
  });
}
