// const elem = document.createElement('form')
/*
function log() {
  console.log(true);
}

const button = document.querySelector('#submitBtn');
button.addEventListener('click', log);
*/
document
  .querySelector('#submitBtn')
  .addEventListener('click', () => console.log(true));

const classSelector = document.getElementsByClassName('class');
const [p,div] = document.getElementsByClassName('class');
const [name] = document.getElementsByName('name')
const buttons = document.getElementsByTagName('button')
