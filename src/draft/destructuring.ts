// objects
const table = {
  material: 'oak',
  color: 'brown',
  dimentions: {
    width: {
      unit: 'cm',
      value: 150,
    },
    length: {
      unit: 'cm',
      value: 180,
    },
    height: {
      unit: 'cm',
      value: 110,
    },
  },
  shelves: [
    [
      {
        itemType: 'book',
        name: 'Kobzar',
        cover: 'solid',
      },
    ],
    [
      {
        itemType: 'pen',
        color: 'black',
      },
    ],
    [
      {
        itemType: 'notebook',
      },
    ],
    [
      {
        itemType: 'money',
        amount: 69420,
        currencyType: 'Dogecoin',
      },
    ],
  ],
};
// const { height, length, width } = table.dimentions;

// const { dimentions, shelves } = table;
// const { height } = dimentions;

const {
  material,
  dimentions: {
    height: { unit: tableHeightUnit, value: tableHeightValue },
    width: { unit: tableWidthUnit, value: tableWidthValue },
  },
} = table;

const tableHeight = `${tableHeightValue} ${tableHeightUnit}`;
const tableWidth = `${tableWidthValue} ${tableWidthUnit}`;
// const heightStol4 = ({ value, unit } = table.dimentions.height);

const { shelves, dimentions, ...shelflessTable } = table;
const { height, ...restDimentions } = dimentions;
// @ts-expect-error
shelflessTable.dimentions = restDimentions;

// arrays
const arr = [1, 2, 4, [5, 8, 9, 88, 77, 56], 6, 7, 3, 23];
const arr0 = arr[0];
// @ts-ignore
const [first, second, third, [firstIn, secondIn], , , last] = arr;
const [, ...newArr] = arr;

const fullName = 'U3erKa U3';
const [firstName, lastName] = fullName.split(' ');
let [letter1, letter2] = fullName;
[letter1, letter2] = [letter2, letter1];

// const [shelves: [firstShelf,]] = table;
// @ts-expect-error
const [[firstShelf], [secondShelf], , [{ itemType, amount, currencyType }]] = table.shelves;

// function parameters
const user1 = {
  firstName: 'U2erKa',
  lastName: 'U2',
  male: 'yes',
  isAge: true,
};
const user2 = {
  firstName: 'U2erKa',
  lastName: 'U2',
  male: 'yes',
  isAge: true,
};
const user3 = ['U4erKa', 'U4', 'maybe', true];
// const users = [user1, user2, user3]
const users = [user1, user2];

function greet({ firstName, lastName, ...restOfUser }) {
  // const {firstName, lastName} = user
  console.log(restOfUser);
  return `Hello, ${firstName} ${lastName}`;
}
function greet2([firstName, lastName, ...restOfUser]) {
  // const {firstName, lastName} = user
  console.log(restOfUser);
  return `Hello, ${firstName} ${lastName}`;
}

// for (const { isAge } of users) {
//   console.log(isAge);
// }
// for (const [key, value] of Object.entries(user3)) {
//   console.log(`key: ${key}, value: ${value}`);
// }

export {};
