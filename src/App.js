// @ts-check
'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import Tree from './components/Tree';
import { DataLoader, Clicker } from './components/UserLoaderHooks';
import './App.css';
import HookTimer from './components/HookTimer';
import RefsClicker from 'components/RefsClicker';
import LoginPage from 'pages/LoginPage';
// import DataLoader from './components/DataLoader';
// import FlexContainer from './components/FlexContainer';
// import Header from './components/Header';
// import SignUpForm from './components/SignUpForm';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};
export const ThemeContext = React.createContext(THEMES.LIGHT);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT,
    };
  }
  render() {
    return (
      <Switch>
        {/* <ThemeContext.Provider value={this.state.theme}>
          <Tree />
          <button
            onClick={() => {
              this.setState({ theme: this.state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT });
            }}
          >
            Swap theme
          </button>
        </ThemeContext.Provider> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/users" exact component={UsersPage} />
        <Route path="/posts" exact component={PostsPage} />
        <Route path="/user" exact component={UserPage} />
        <Route path="/tree" exact component={Tree} />
        <Route path="/timer" exact component={HookTimer} />
        <Route path="/clickerhooks" exact component={Clicker} />
        <Route path="/datahooks" exact component={DataLoader} />
        <Route path="/clickerrefs" exact component={RefsClicker} />
        <Route path="/login" exact component={LoginPage} />
        {/* <Route path="/about" render={(routeProps) => <AboutPage {...routeProps} />} /> */}
      </Switch>
    );
  }
}

export default App;

// class App extends React.Component {
//   /**
//    * @param {any} props
//    */
//   constructor( props) {
//     super(props);

//     this.state = {
//       isVisible: true,

//       user: {
//         id: 123235432,
//         name: 'Test',
//         src: 'shdnfdsfndsifds.jpg',
//       },
//     };

//     this.intervalId = null;
//   }

//   handleClick = () => this.setState({ isVisible: !this.state.isVisible });

//   logout = () => {
//     this.setState({
//       user: null,
//     });
//     alert('Logged out successfully');
//   };

//   render() {

//     return (
//       <SignUpForm />
//     );
//   }
// }

// const { user } = this.state;
// return (
//   <>
//     <Header
//       headerProp1={true}
//       headerProp2={42}
//       otherProp1={null}
//       user={user}
//       logout={this.logout}
//     />
//   </>
// );

// return (
// <main className="container">
//   <FlexContainer justify="center" align="end">
//     <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
//     <li>Nostrum magni, sit reprehenderit maxime corrupti vel sed laudantium quod.</li>
//     <li>Dolorum corporis nesciunt rerum exercitationem neque nam velit voluptates harum sunt obcaecati.</li>
//     <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae autem pariatur a, expedita.</li>
//     <li>Eos nesciunt temporibus voluptates aliquam tempora sed rem facilis provident ad assumenda commodi.</li>
//   </FlexContainer>
// </main>
// )

/* <button className='btn' onClick={() => this.setState({ isVisible: !this.state.isVisible })}>Toggle isVisible</button>
{this.state.isVisible && <Timer />} */

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
