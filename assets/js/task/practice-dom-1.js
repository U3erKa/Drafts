// const red = document.querySelector('#red');
// const green = document.querySelector('#green');
// const blue = document.querySelector('#blue');
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
