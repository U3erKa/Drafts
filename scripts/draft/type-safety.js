// @ts-check
// ^^^^^^^^^ Must be the first line to enable typechecking

/**
 * Converts one string to lowercase
 * and prints length of another string or array
 * @param {string} bar String to convert
 * @param {string | any[]} [baz] String or array, whose length to print
 */
function foo(bar, baz) {
  if (baz) {
    console.log(baz.length);
  }

  return bar.toLowerCase();
}
