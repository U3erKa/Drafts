function createElement(tagName, options = {}, ...children) {
  const elem = document.createElement(tagName);
  const { className, textContent, eventListeners = {}, attributes = {} } = options;

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
