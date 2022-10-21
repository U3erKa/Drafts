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
  setTimeout(() => {
    console.log(++i);
    if (i === 20) {
      clearTimeout(countInterval);
      console.timeEnd('interval');
    } else {
      countTimeout(i);
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

const btn = document.querySelector('#btn');
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
        if (loginData.password === foundUser.password) {
          return foundUser;
        }
        throw new Error('Incorrect password');
      }
      throw new Error('User does not exist');
      // console.log(resolve);
      // return resolve
    },
    (reject) => {
      // console.log(reject);
    }
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

// fetch('http://localhost:5500/data.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
const response = fetch('http://localhost:5500/data.json');
response.then((response) => response.json()).then((data) => console.log(data));

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
