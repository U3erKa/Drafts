document
  .querySelector('#submitBtn')
  .addEventListener('click', clickerWrapper());

function clickerWrapper(counter = 0) {
  return function clickerListener(event) {
    event.target.textContent = `Clicks: ${++counter}`;
  };
}
