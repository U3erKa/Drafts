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
