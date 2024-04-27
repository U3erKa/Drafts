/**
 * @template T
 * @param {T} source
 * @returns {T}
 */
export function deepCopy<T>(source: T): T {
  if (typeof source !== 'object' && source !== null) {
    return source;
  }

  if (Array.isArray(source)) {
    return source.map(deepCopy) as T;
  }

  if (typeof source === 'function') {
    return source.bind(source);
  }

  const copyObj = {} as T;
  for (const key in source) {
    if (Object.hasOwn(source as object, key)) {
      copyObj[key] = deepCopy(source[key]);
    }
  }
  return copyObj;
}
