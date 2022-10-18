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

  // const linksContainer = document.createElement('div');
  // const linksList = document.createElement('ul');
  // const linkItem = document.createElement('li');
  // const linkPic = document.createElement('img');
  // const link1 = document.createElement('a');
  // const link2 = document.createElement('a');
  // const link3 = document.createElement('a');
  // let links = [];

  // for (let i = 0; i < user.contacts.length; i++) {
  //   links[i] = document.createElement('a');
  //   links[i].setAttribute('src', user.contacts[i])
  // }

  // linksContainer.classList.add('linksContainer');
  // linksList.classList.add('linksList');
  // linkItem.classList.add('linkItem');
  // linkPic.classList.add('linkPic');
  // initials.classList.add('initials')

  // link1.href = user.contacts[0];
  // // link2.setAttribute('src', user.contacts[1])
  // // link3.setAttribute('src', user.contacts[2])
  // linkPic.src = 'facebook';
  // linkPic.alt = 'link';

  // linksContainer.append(linksList);
  // linksList.append(linkItem);
  // linkItem.append(link1);
  // link1.append(linkPic);

  // const link1 = createElement('', {},)
  // const linkPic = createElement('', {},)
  // const linkItem = createElement('', {},)
  // const linksContainer = createElement('', {},)
  // const linksList = createElement('', {},)
  const h1 = createElement('h1', {className: 'cardName', textContent: fullName},);
  const p = createElement('p', {className: 'cardDescription', textContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aut placeat ullam beatae expedita et sapiente quaerat? Laudantium cupiditate beatae placeat, iste ab aliquam facere ex expedita porro, ipsa repellendus minus, illo a. Debitis expedita a ut hic soluta necessitatibus?'},);
  const cardInfo = createElement('div', {className: 'cardInfo'}, h1, p);
  const initials = createElement('p', {className: 'initials', textContent: fullName === 'NO DATA' ? 'N/A' : `${user.firstName[0]} ${user.lastName[0]}`},);
  const img = createElement('img', {className: 'cardImg', eventListeners: {'error': handleImageError}, attributes: {src: user.profilePicture, alt: fullName}},);
  const imgWrapper = createElement('div', {className: 'imgWrapper'}, initials, img);
  const article = createElement('article', {className: 'workerCard'}, imgWrapper, cardInfo, );
  const card = createElement('li', {className: 'workerItem'}, article);

  return card;
}
