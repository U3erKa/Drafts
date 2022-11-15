// @ts-check
'use strict';

import React from 'react';
import './App.css';
import FlexContainer from './components/FlexContainer';

class App extends React.Component {
  state = {
    isVisible: true,
  };
  render() {
    return (
      <main className='container'>
        <FlexContainer justify='center' align='end'>
          <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          <li>Nostrum magni, sit reprehenderit maxime corrupti vel sed laudantium quod.</li>
          <li>Dolorum corporis nesciunt rerum exercitationem neque nam velit voluptates harum sunt obcaecati.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae autem pariatur a, expedita.</li>
          <li>Eos nesciunt temporibus voluptates aliquam tempora sed rem facilis provident ad assumenda commodi.</li>
        </FlexContainer>
      </main>
    );
  }
}

export default App;

{/* <button className='btn' onClick={() => this.setState({ isVisible: !this.state.isVisible })}>Toggle isVisible</button>
{this.state.isVisible && <Timer />} */}
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
