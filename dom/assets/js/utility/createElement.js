/**
 * Creates HTML elements with given options and appends children
 * @param {string} tagName Element tag name
 * @param {object} options Options for the element
 * @param {string} options.className All necessary classes in one string
 * @param {string} options.textContent Text inside the element
 * @param {object} options.eventListeners Event listeners
 * @param {object} options.attributes Element specific attributes
 * @param  {...Element | Node | string} children HTML elements, Nodes or text
 * @returns {HTMLElement} New element
 */
function createElement(tagName, options = {}, ...children) {
  const elem = document.createElement(tagName);
  const {
    className = '',
    textContent,
    eventListeners = {},
    attributes = {},
  } = options;

  elem.className = className;
  elem.textContent = textContent;

  for (const [event, listener] of Object.entries(eventListeners)) {
    elem.addEventListener(event, listener);
  }
  for (const [attrName, value] of Object.entries(attributes)) {
    elem.setAttribute(attrName, value);
  }

  elem.append(...children);

  return elem;
}
