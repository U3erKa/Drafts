let shouldProceed = true;
let i = 0;
let counter = 0;

do {
  console.log('do then think')
} while (false);

// while (i < 20) {
//   console.log(';');
//   i++;
// }

// while (i < 20) {
//   i++;
//   console.log(i);
//   if (i >= 20) {
//     break;
//   }
// }

// while (shouldProceed) {
//   i++;
//   console.log(i);
//   shouldProceed = confirm('Proceed?');
// }

while (counter < 21) {
  if (counter % 2 !== 0) {
    counter++;
    continue;
  }
  console.log(counter);
  counter++;
}
