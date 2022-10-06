function count() {
  let i = 0;
  return () => console.log(i++);
}
// const count = () => {
//   let i = 0;
//   return () => console.log(i++);
// };

document.querySelector('#submitBtn').addEventListener('click', count());
