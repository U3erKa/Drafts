/*
text.id = 'text';
text.hidden = false;
// text.style.color = '#00ffff';
*/

const span = document.querySelector('#span');
const form = document.querySelector('#form');
// const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const btn = document.querySelector('#btn');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // const {target: formElem} = e;
  // console.dir(formElem);
  // console.log(formElem.elements);

  const testLi = document.createElement('li');

  testLi.textContent = form[0].value;
  todoList.append(testLi);

  // span.innerText = form[0].value;
  // span.innerText = form.elements.input.value;
  // span.innerText = form.children.input.value;
  // span.innerText = form.children[0].value;
  // span.innerText = input.value; // by id or name, takes the first one unless input is defined
});
/*
btn.addEventListener('click', listener);
document.body.addEventListener('click', listener);

function listener(e) {
  e.stopPropagation();
  console.log(e.currentTarget);
}
*/
