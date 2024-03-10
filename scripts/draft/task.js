// tabs is an array of titles of each site open within the window
class Window {
  constructor(/** @type {string[]} */ tabs) {
    this.tabs = tabs // We keep a record of the array inside the object
  }
  // When you join two windows into one window
  join(/** @type {Window} */ otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs)
    return this
  }
  // When you open a new tab at the end
  tabOpen(/** @type {string} */ tab) {
    this.tabs.push(tab ?? "new tab") // Let's open a new tab for now
    return this
  }
  // When you close a tab
  tabClose(/** @type {number} */ index) {
    const tabsBeforeIndex = this.tabs.slice(0, index) // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index + 1) // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex) // Join them together

    return this
  }
}

// Let's create three browser windows
const workWindow = new Window(["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"]) // Your mailbox, drive, and other work sites
const socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]) // Social sites
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]) // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen())
console.log(finalTabs.tabs)

// @ts-expect-error
Array.prototype.myMap = function (/** @type {(item: unknown, i: number, array: unknown[]) => unknown} */ callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

// @ts-expect-error
Array.prototype.myFilter = function (/** @type {(item: unknown, i: number, array: unknown[]) => unknown} */ callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

function sliceArray(/** @type {unknown[]} */ anim, /** @type {number} */ beginSlice, /** @type {number} */ endSlice) {
  return anim.slice(beginSlice, endSlice)
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]
sliceArray(inputAnim, 1, 3)

const squareList = (/** @type {number[]} */ arr) => {
  const positiveInts = arr.filter((num) => Math.abs(num) === num && Math.floor(num) === Math.ceil(num))
  const squares = positiveInts.map((num) => num ** 2)
  return squares
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
