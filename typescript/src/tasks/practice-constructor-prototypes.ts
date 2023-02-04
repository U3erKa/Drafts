const User: any = function (
  firstName: string,
  lastName: string,
  email: string,
  age: string,
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = false;
};

const userProto = {
  getFullName: function () {
    console.log(
      `Info about the user:
First name: ${this.firstName}
Last  name: ${this.lastName}`,
    );
    return `${this.firstName} ${this.lastName}`;
  },
  logout: function () {
    this.isLoggedIn = false;
    console.log(`${this.firstName} just logged out`);
  },
  login: function () {
    this.isLoggedIn = true;
    console.log(`${this.firstName} just logged in`);
  },
};

User.prototype = userProto;

const users = [
  new User('U1erKa', 'U1', 'email1@example.com', '18'),
  new User('U2erKa', 'U2', 'email2@example.com', '19'),
  new User('U3erKa', 'U3', 'email3@example.com', '20'),
  new User('U4erKa', 'U4', 'email4@example.com', '21'),
  new User('U5erKa', 'U5', 'email5@example.com', '22'),
];

console.log(users);

function allFullNames(index: number) {
  if (index === undefined) {
    users.forEach(function (User) {
      console.log(User.getFullName());
    });
  } else {
    users[index].getFullName();
  }
}

function allLogin(index: number) {
  if (index === undefined) {
    users.forEach(function (User) {
      console.log(User.login());
    });
  } else {
    users[index].login();
  }
  console.log(users);
}

function allLogout(index: number) {
  if (index === undefined) {
    users.forEach(function (User) {
      console.log(User.logout());
    });
  } else {
    users[index].logout();
  }
  console.log(users);
}

export { User, allFullNames, allLogin, allLogout };
