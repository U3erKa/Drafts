import { getNumberOfDigits } from "./sortingUtils.js"
/** globalThis: DedicatedWorkerGlobalScope */
self.addEventListener(
  "message",
  (e) => {
    const time = performance.now()
    for (let i = 0; i < 1_000_000_000; i++) {
      /* empty */
    }

    self.postMessage({ ...e.data, time: performance.now() - time, digits: getNumberOfDigits(e.data.i) })
    self.close()
  },
  { once: true },
)
