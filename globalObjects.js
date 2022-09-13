const str1 = 'loremium';
const charCode = str1.charCodeAt(0);
// str1[0] or str1.charAt(0)
// strings are immutable
const newStr1 = str1.concat('Ipsumius', 'DD');
const isInString = newStr1.includes('ius');
const firstCoincidence = newStr1.indexOf('ium');
const replaceStr1 = newStr1.replace('i', '80086');
const sliceStr = newStr1.slice(2, 6);

for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}
