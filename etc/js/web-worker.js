/** globalThis: DedicatedWorkerGlobalScope */
self.addEventListener(
  "message",
  (e) => {
    const time = performance.now()
    for (let i = 0; i < 1_000_000_000; i++) {
      /* empty */
    }

    self.postMessage({ ...e.data, time: performance.now() - time })
    self.close()
  },
  { once: true },
)
