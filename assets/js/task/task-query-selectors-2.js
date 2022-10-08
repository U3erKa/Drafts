const btn = document.querySelector('#single-use');
/*
function singleFunc() {
  console.log('used');
  btn.removeEventListener('click', singleFunc);
}
btn.addEventListener('click', singleFunc);
*/
/*
function singleFunc() {
  let i = false;
  return () => {
    if (!i) {
      i = true;
      console.log('used');
    }
  };
}
document.querySelector('#single-use').addEventListener('click', singleFunc());
*/

function singleFunc() {
  console.log('used');
}
btn.addEventListener('click', singleFunc, { once: true });
