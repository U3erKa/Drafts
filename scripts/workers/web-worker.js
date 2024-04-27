import { getNumberOfDigits } from './utils.js';

/** globalThis: DedicatedWorkerGlobalScope */
self.addEventListener(
  'message',
  (e) => {
    try {
      const time = performance.now();
      for (let i = 0; i < 1_000_000_000; i++) {
        /* empty */
      }

      if (e.data.i === undefined) throw new Error("'i' is not defined");
      self.postMessage({ ...e.data, time: performance.now() - time, digits: getNumberOfDigits(e.data.i || 1) });
      // self.close()
    } catch (error) {
      throw JSON.stringify({
        ...e.data,
        error: { ...error, name: error?.name, message: error?.message, stack: error?.stack },
      });
    }
  },
  // { once: true },
);
