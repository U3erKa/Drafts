const user1 = {
  id: 1,
  name: 'Test test',
};

const user2 = {
  id: 2,
  name: 'Null Null',
};

const messages1 = ['hi!', 'good', 'bye!'];
const messages2 = ['hello', 'how are you?', 'bye!'];

const map = new Map([
  [user1, messages1],
  [user2, messages2],
]);

const getMessages = (user) => map.get(user);
