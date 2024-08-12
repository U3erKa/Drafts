const countInterval = () => {
  console.time('interval');
  let i = 1;
  const countInterval = setInterval(() => {
    if (i === 20) {
      clearInterval(countInterval);
      console.timeEnd('interval');
    }
    console.log(i++);
  }, 100);
};

const countTimeout = (i = 0) => {
  if (!i) {
    console.time('interval');
  }
  const timeout = setTimeout(() => {
    console.log(++i);
    if (i === 20) {
      clearTimeout(timeout);
      console.timeEnd('interval');
    } else {
      console.log(timeout);
    }
  }, 100);
};

const countFor = () => {
  console.time('interval');
  for (let i = 1; i <= 20; i++) {
    setTimeout(() => {
      console.log(i);
      if (i === 20) {
        console.timeEnd('interval');
      }
    }, 100 * i);
  }
};

// countInterval();
// countTimeout();

const button = document.querySelector('#btn');
const arr = [];

const loginRequest = new Promise((resolve, reject) => {
  const user = { id: 1, login: 'qwerty', password: '12345' };
  // reject(69);
  setTimeout(() => {
    resolve(user);
  }, 1000);
});
// console.log(promise);

const usersOnServer = new Map([
  [
    'qwerty',
    {
      id: 1,
      login: 'qwerty',
      password: '12345',
      picSrc: 'https://example.com/image.webp',
    },
  ],
]);

loginRequest
  .then(
    (loginData) => {
      if (usersOnServer.has(loginData.login)) {
        const foundUser = usersOnServer.get(loginData.login);
        if (foundUser && loginData.password === foundUser.password) {
          return foundUser;
        }
        throw new Error('Incorrect password');
      }
      throw new Error('User does not exist');
      // console.log(resolve);
      // return resolve
    },
    // },
  )
  .then((user) => {
    console.log(`Successful login for ${user.login}`);
    return user;
  })
  .then((user) => {
    if (Math.random() > 0.5) {
      return user;
    }
    throw Error('badness');
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log('COPE');
  });

const fulfilledPromise = Promise.resolve(100);
const rejectedPromise = Promise.reject(100);

const user = {
  id: 69420,
  name: 'U3',
  age: 20,
  isMale: true,
  und: undefined,
  0: 0,
  getFullName: function () {
    return this.name;
  },
};
// user.user = user

const json = JSON.stringify(user); // serialization
const unjson = JSON.parse(json); // desiarization
// structuredClone(user);
// JSON.parse(JSON.stringify(user));

// fetch('http://localhost:5500/assets/data.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
const response = fetch('http://localhost:5500/assets/data.json');
response.then((response) => response.json()).then((data) => console.log(data));

const random = () => Promise.resolve(Math.random());

const sumRandomAsyncNumbers = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`Result is ${first + second + third}`);
};

const res = sumRandomAsyncNumbers();

/*
async function loadJson(url) {
  const response = await fetch(url);
  return await response.json();
}

loadJson('https://javascript.info/no-such-user.json');
*/

async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return await response.json();
  }
  throw new Error(response.status);
  // throw new HttpError(response);
  // await Promise.reject(new HttpError(response));
}

const parsedData = loadJson('https://javascript.info/no-such-user.json').catch(console.log);

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

// Запитуйте ім’я користувача, поки github не поверне дійсного користувача
async function demoGithubUser() {
  let user;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const name = prompt('Введіть ім’я?', 'iliakan');
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status === 404) {
        alert('Такого користувача не існує, будь ласка, введіть ще раз.');
      } else {
        throw err;
      }
    }
  }
  alert(`Ім’я та прізвище: ${user.name}.`);
  return user;

  /*
  return loadJson(`https://api.github.com/users/${name}`)
    .then((user) => {
      alert(`Ім’я та прізвище: ${user.name}.`);
      return user;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('Такого користувача не існує, будь ласка, введіть ще раз.');
        return demoGithubUser();
      } else {
        throw err;
      }
    });
  */
}

demoGithubUser();

async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(console.log);
}

f();

/*
setTimeout(() => {
  console.log('showtime');
}, 0);
const goner = setTimeout(
  (value) => {
    console.log(value);
  },
  0,
  'unseen'
);

console.log('where timeout');
console.time('loop timer');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('loop timer');
clearTimeout(goner);

const intervalId = setInterval(() => {
  console.log('interval 1');
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

setInterval(() => {
  document.querySelector('#time').textContent = new Date();
}, 1000);
*/
