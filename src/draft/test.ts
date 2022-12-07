// //- Using a function pointer:
// document.getElementById("clickMe").onclick = doFunction;

// //- Using an anonymous function:
// document.getElementById("clickMe").onclick = function () { alert('hello!'); };

// const el = document.getElementById("clickMe");
// if (el.addEventListener)
//     el.addEventListener("click", doFunction, false);
// else if (el.attachEvent)
//     el.attachEvent('onclick', doFunction);

const el = document.querySelector('#clickMe');
const str = 'hello';

function doFunction() {
  console.log('hello');
}

el.addEventListener('onclick', doFunction);

export {};
