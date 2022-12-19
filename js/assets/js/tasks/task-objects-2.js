const promptVar = prompt(
  `Enter object's key:
name, surname, age`
);

const user001 = {
  name: 'Aster',
  surname: 'Win Ding',
  age: -1,
};

alert(`${promptVar} = ${user001[promptVar]}`);
