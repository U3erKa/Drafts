const userCards = responseData.map((userData) => createUserCard(userData));

const workersList = document.querySelector('#root');

workersList.append(...userCards);

function createUserCard(user) {
  const fullName = (!user.firstName && !user.lastName) ? 'NO DATA' : `${user.firstName} ${user.lastName}`;
  const initials = document.createElement('p')
  initials.textContent = fullName === 'NO DATA' ? 'N/A' : `${user.firstName[0]} ${user.lastName[0]}`

  const card = document.createElement('li');
  const article = document.createElement('article');
  const imgWrapper = document.createElement('div');
  const cardInfo = document.createElement('div');
  const linksContainer = document.createElement('div');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const linksList = document.createElement('ul');
  const linkItem = document.createElement('li');
  const linkPic = document.createElement('img');
  const link1 = document.createElement('a');
  // const link2 = document.createElement('a');
  // const link3 = document.createElement('a');
  // let links = [];

  // for (let i = 0; i < user.contacts.length; i++) {
  //   links[i] = document.createElement('a');
  //   links[i].setAttribute('src', user.contacts[i])
  // }

  card.classList.add('workerItem');
  article.classList.add('workerCard');
  imgWrapper.classList.add('imgWrapper');
  cardInfo.classList.add('cardInfo');
  img.classList.add('cardImg');
  h1.classList.add('cardName');
  p.classList.add('cardDescription');
  linksContainer.classList.add('linksContainer');
  linksList.classList.add('linksList');
  linkItem.classList.add('linkItem');
  linkPic.classList.add('linkPic');
  initials.classList.add('initials')

  img.src = user.profilePicture;
  img.alt = fullName;
  h1.textContent = fullName;
  p.textContent =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae aut placeat ullam beatae expedita et sapiente quaerat? Laudantium cupiditate beatae placeat, iste ab aliquam facere ex expedita porro, ipsa repellendus minus, illo a. Debitis expedita a ut hic soluta necessitatibus?';
  link1.href = user.contacts[0];
  // link2.setAttribute('src', user.contacts[1])
  // link3.setAttribute('src', user.contacts[2])
  linkPic.src = 'facebook';
  linkPic.alt = 'link';

  img.addEventListener('error', handleImageError);

  card.append(article);
  article.append(imgWrapper, cardInfo, linksContainer);
  imgWrapper.append(initials,img);
  cardInfo.append(h1, p);
  linksContainer.append(linksList);
  linksList.append(linkItem);
  linkItem.append(link1);
  link1.append(linkPic);

  console.log(user);
  // console.log(links);

  return card;
}
