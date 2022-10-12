// const red = document.querySelector('#red');
// const green = document.querySelector('#green');
// const blue = document.querySelector('#blue');
const [red, green, blue, normal, italic, bold, reset, bgReset] = document.querySelectorAll('.color-btn');
const text = document.querySelector('.text');

red.addEventListener('click', commonEventListener);
green.addEventListener('click', commonEventListener);
blue.addEventListener('click', commonEventListener);
normal.addEventListener('click', commonEventListener);
italic.addEventListener('click', commonEventListener);
bold.addEventListener('click', commonEventListener);
reset.addEventListener('click', commonEventListener);
bgReset.addEventListener('click', commonEventListener);

const colorsArr = ['red', 'green', 'blue', 'reset'];
const bgColorsArr = ['bg-red', 'bg-green', 'bg-blue', 'bg-reset'];

function commonEventListener(e) {
  if (e.target.dataset.textColor) {
    text.classList.remove(...colorsArr);
    text.classList.add(e.target.dataset.textColor);
  }

  if(e.target.dataset.bgColor) {
    text.classList.remove(...bgColorsArr);
    text.classList.add(e.target.dataset.bgColor);
  }
}

/* 
const [red, green, blue] = document.querySelectorAll('.colorBtn');
const text = document.querySelector('.text');

red.addEventListener('click', (e) => {
  text.classList.remove('green', 'blue');
  text.classList.add('red');
});
green.addEventListener('click', (e) => {
  text.classList.remove('red', 'blue');
  text.classList.add('green');
});
blue.addEventListener('click', (e) => {
  text.classList.remove('red', 'green');
  text.classList.add('blue');
});
*/

/*
red.addEventListener('click', toRed);
green.addEventListener('click', toGreen);
blue.addEventListener('click', toBlue);
*/
/*
function toRed() {
  text.setAttribute('class', 'red');
}
function toGreen() {
  text.setAttribute('class', 'green');
}
function toBlue() {
  text.setAttribute('class', 'blue');
}
*/
/*
function toRed() {
  text.classList = 'red';
}
function toGreen() {
  text.classList = 'green';
}
function toBlue() {
  text.classList = 'blue';
}
*/
/*
function toRed() {
  text.classList.remove('green', 'blue');
  text.classList.add('red');
}
function toGreen() {
  text.classList.remove('red', 'blue');
  text.classList.add('green');
}
function toBlue() {
  text.classList.remove('red', 'green');
  text.classList.add('blue');
}
*/
