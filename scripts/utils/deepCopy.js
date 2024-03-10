/**
 * @template T
 * @param {T} source
 * @returns {T}
 */
export function deepCopy(source) {
  if (typeof source !== "object" && source !== null) {
    return source
  }

  if (Array.isArray(source)) {
    /** @type {any} */
    const copyArray = []
    for (let i = 0; i < source.length; i++) {
      copyArray[i] = deepCopy(source[i])
    }
    return copyArray
  }

  if (typeof source === "function") {
    return source.bind(source)
  }

  /** @type {any} */
  const copyObj = {}
  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      copyObj[key] = deepCopy(source[key])
    }
  }
  return copyObj
}
