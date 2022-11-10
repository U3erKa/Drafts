import React from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends React.Component {
  state = {
    isVisible: true,
  };
  render() {
    return (
      <main>
        <button onClick={() => this.setState({ isVisible: !this.state.isVisible })}>Toggle isVisible</button>
        {this.state.isVisible && <Timer />}
      </main>
    );
  }
}

export default App;

/*
import React from 'react';
import './App.css';
import Aloha from './components/Aloha';
// import Greeting from './components/Greeting';
// import Header from './components/Header';

const user = {
  id: 7452552,
  name: 'User',
  role: 'user',
};

// const admin = {
//   id: 123,
//   name: 'Admin',
//   role: 'admin',
// };

class App extends React.Component {
  state = {
    user: user,
  };

  changeName = () => {
    const newName = prompt('Enter new name');

    const newUser = {
      ...this.state.user,
      name: newName,
    };

    this.setState({
      user: newUser,
    });
  };

  render() {
    return (
      <>
        <Aloha name={this.state.user.name} />
        <button onClick={this.changeName}>Change user name</button>
      </>
    );
  }
}

export default App;
*/
