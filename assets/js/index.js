// const elem = document.createElement('form')
/*
function log() {
  console.log(true);
}

const button = document.querySelector('#submitBtn');
button.addEventListener('click', log);
*/
const btn = document.querySelector('#submitBtn');
const func = (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
};

btn.addEventListener('click', func);

const classSelector = document.getElementsByClassName('class');
const [p, div] = document.getElementsByClassName('class');
const [name] = document.getElementsByName('name');
const buttons = document.getElementsByTagName('button');
const heading = document.querySelector('form > div');
const root = document.querySelector(':root');

// btn.dispatchEvent(new MouseEvent('click'))
const click = new MouseEvent('click'); // event
// btn.dispatchEvent(click);

const div1 = document.querySelector('.div');
const btn1 = document.querySelector('#submitBtn2');
// btn1.addEventListener('click', func);
div1.addEventListener('click', func);

const img = document.querySelector('#img');
const imgSrc = [
  'https://img.freepik.com/free-vector/hand-drawn-traditional-chinese-dragon_23-2147832507.jpg',
  'https://img.freepik.com/premium-vector/green-dragon-head-illustration_363436-778.jpg',
  'https://media.istockphoto.com/illustrations/red-dragon-head-digital-painting-illustration-id1183916666?k=20&m=1183916666&s=612x612&w=0&h=ODlG94MZpyBtVawmKr0_fQS0_WNeLxOfaK-SpS11STs=',
];

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

img.addEventListener('click', changePicture);
nextBtn.addEventListener('click', changePicture);
prevBtn.addEventListener('click', changePictureBack);
/*let i = 1
function changePicture(event) {
  event.target.setAttribute('src', imgSrc[i++])
  if (i === imgSrc.length) {
    i = 0;
  }
}*/
let i = 0;
// i = i === imgSrc.length - 1 ? 0 : i + 1;
function changePicture(event) {
  img.setAttribute('src', imgSrc[++i % imgSrc.length]);
}
function changePictureBack(event) {
  i = i > 0 ? i - 1 : imgSrc.length - 1;
  img.setAttribute('src', imgSrc[i]);
}
