const common = ['Vik', 'Viktor', 'U3erKa', 'U2erKa'];
const vip = ['U2', 'Viktor', 'U3'];
// const namesSet = new Set([...common, ...vip]);

const uniqueNames = [...new Set([...common, ...vip])];
// for (const name of namesSet) {
//   uniqueNames.push(name);
// }
