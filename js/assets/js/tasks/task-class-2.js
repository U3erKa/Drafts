class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isBanned = false;
  }
  createMessage() {
    return `${this.name} sent a message`;
  }
}

class Moder extends User {
  constructor(email, password) {
    super('Mod', email, password);
  }
  isMod() {
    return 'yes.';
  }
}

class Admin extends Moder {
  constructor(email, password, age) {
    super('Root_User', email, password);
    this.age = age;
    this.isRoot = true;
    delete this.isBanned;
  }
  ban(user) {
    if (user instanceof Admin) {
      throw 'BAN URSELF';
    }
    user.isBanned = true;
  }
  unban(user) {
    user.isBanned = false;
  }
}

const user = new User('Vik', 'email@example.com', '123123123');
const mod = new Moder('mod@system.com', 'ajknwesdkjrti');
const admin = new Admin('root@system.com', 'ervpUNB@4921_', 69420);
const hecker = new Admin('root@system.corrupt', '_', -1);
