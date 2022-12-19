// let links = [], linkPic = [], a = [], linkItems = []
const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);

/**
 * 
 * @param {object} user 
 * @returns {HTMLElement} 
 */
function createUserCard(user) {
  const fullName = (!user.firstName && !user.lastName) ? 'NO DATA' : `${user.firstName} ${user.lastName}`;

  const linkItems = createLinks(user.contacts);
  const linksList = createElement('ul', {className: 'linksList'}, ...linkItems);
  const linksContainer = createElement('div', {className: 'linksContainer'}, linksList);
  const h1 = createElement('h1', {className: 'cardName', textContent: fullName},);
  const p = createElement('p', {className: 'cardDescription', textContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aut placeat ullam beatae expedita et sapiente quaerat? Laudantium cupiditate beatae placeat, iste ab aliquam facere ex expedita porro, ipsa repellendus minus, illo a. Debitis expedita a ut hic soluta necessitatibus?'},);
  const cardInfo = createElement('div', {className: 'cardInfo'}, h1, p);
  const initials = createElement('p', {className: 'initials', textContent: fullName === 'NO DATA' ? 'N/A' : `${user.firstName[0]} ${user.lastName[0]}`},);
  const img = createElement('img', {className: 'cardImg', eventListeners: {'error': (e) => e.target.remove()}, attributes: {src: user.profilePicture, alt: fullName}},);
  const imgWrapper = createElement('div', {className: 'imgWrapper'}, initials, img);
  const article = createElement('article', {className: 'workerCard'}, imgWrapper, cardInfo, linksContainer);
  const card = createElement('li', {className: 'workerItem'}, article);

  return card;
}
