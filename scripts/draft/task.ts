// tabs is an array of titles of each site open within the window
class MyWindow {
  // We keep a record of the array inside the object
  constructor(public tabs: string[]) {}
  // When you join two windows into one window
  join(otherWindow: MyWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  }
  // When you open a new tab at the end
  tabOpen(tab?: string) {
    this.tabs.push(tab ?? 'new tab'); // Let's open a new tab for now
    return this;
  }
  // When you close a tab
  tabClose(index: number) {
    const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    return this;
  }
}

// Let's create three browser windows
const workWindow = new MyWindow(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new MyWindow(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new MyWindow(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

// @ts-expect-error
Array.prototype.myFilter = function <T>(this: T[], callback: (item: T, i: number, array: T[]) => any) {
  const newArray: T[] = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

function sliceArray<T>(anim: T[], beginSlice: number, endSlice: number): T[] {
  return anim.slice(beginSlice, endSlice);
}

const inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'];
sliceArray(inputAnim, 1, 3);

const squareList = (arr: number[]) => {
  const positiveInts = arr.filter((num) => Math.abs(num) === num && Math.floor(num) === Math.ceil(num));
  const squares = positiveInts.map((num) => num ** 2);
  return squares;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

function myMap<T, R>(this: T[], callback: (item: T, i: number, array: T[]) => R): R[] {
  const newArray: R[] = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}

(Array.prototype as any).myMap = myMap;
