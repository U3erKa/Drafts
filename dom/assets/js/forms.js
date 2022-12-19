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

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'X';
  testLi.append(deleteBtn);

  deleteBtn.addEventListener('click', (e) => {
    // testLi.remove();
    deleteBtn.parentElement.remove();
  });

  // span.innerText = form[0].value;
  // span.innerText = form.elements.input.value; // interactive elements only, e.g. no div
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
/*
function deleteListener(e) {
  e.target.parentElement.remove();

  // удаляем форму просто так
  // e.target.parentElement.parentElement.parentElement.children[1].remove();
}

function why() {
  let deleted;
  let isDeleted = false;

  return (e) => {
    if (isDeleted) {
      e.target.parentElement.parentElement.parentElement.append(deleted);
      isDeleted = false;
    } else {
      deleted = e.target.parentElement.parentElement.parentElement.children[1];

      deleted.remove();
      isDeleted = true;
    }
  };
}
*/
