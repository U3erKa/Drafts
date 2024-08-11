// @ts-nocheck
/** Used to map characters to HTML entities. */
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
} as const;

/** Used to map HTML entities to characters. */
const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
} as const;

const reUnescapedHtml = /[&<>"']/g;
const reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g;
const reRegExpChar = /[\\^$.*+?()[\]{}|/]/g;
const PATH_DELIMITER = /[.\][]/;

const hasUnescapedHtml = RegExp(reUnescapedHtml.source).test;
const hasEscapedHtml = RegExp(reEscapedHtml.source).test;
const hasRegExpChar = RegExp(reRegExpChar.source).test;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 */
function get(object: Record<string, any>, path: string | string[], defaultValue) {
  if (typeof path === 'string') path = path.split(PATH_DELIMITER);
  return path.reduce((obj, key) => (key in obj ? obj[key] : defaultValue), object);
}

/**
 * Converts the characters "&", "<", ">", '"', and "'" in string to their
 * corresponding HTML entities.
 */
function escapeHtml(string: string) {
  string = string.toString();
  return string && hasUnescapedHtml(string) ? string.replace(reUnescapedHtml, (key) => htmlEscapes[key]) : string;
}

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 */
function unescapeHtml(string: string) {
  string = string.toString();
  return string && hasEscapedHtml(string) ? string.replace(reEscapedHtml, (key) => htmlUnescapes[key]) : string;
}

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 */
function escapeRegExp(string: string) {
  string = string.toString();
  return string && hasRegExpChar(string) ? string.replace(reRegExpChar, '\\$&') : string;
}

function baseClone(value, bitmask, customizer, key, object, stack) {
  let result,
    isDeep = bitmask & CLONE_DEEP_FLAG,
    isFlat = bitmask & CLONE_FLAT_FLAG,
    isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  const isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    const tag = getTag(value),
      isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  const stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }
}

export = { get, escapeHtml, unescapeHtml, escapeRegExp };
