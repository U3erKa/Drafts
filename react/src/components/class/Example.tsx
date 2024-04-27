import React from 'react';
import { THEMES } from 'configs';
import { ThemeContext } from 'contexts';
import Tree from 'components/Tree/Tree';
import Timer from 'components/class/Timer';
import Aloha from 'components/class/Aloha';
import Header from 'components/class/Header';
import SignUpForm from 'components/forms/SignUpForm';

const state = {
  isVisible: true,
  theme: THEMES.DARK,
  user: {
    id: 123235432,
    name: 'Test',
    src: 'shdnfdsfndsifds.jpg',
  },
};

export type User = (typeof state)['user'];

export default class Example extends React.Component<unknown, typeof state> {
  intervalId: number | null = null;

  constructor(props) {
    super(props);
    this.state = state;
  }

  changeName = () => {
    const newName = prompt('Enter new name');
    if (!newName) return;

    this.setState({
      user: {
        ...this.state.user,
        name: newName,
      },
    });
  };

  handleClick = () => this.setState({ isVisible: !this.state.isVisible });

  logout = () => {
    this.setState({
      user: null as any,
    });
    alert('Logged out successfully');
  };

  render() {
    const { user, theme, isVisible } = this.state;
    return (
      <>
        <ThemeContext.Provider value={theme}>
          <Tree />
          <button
            onClick={() => {
              this.setState({ theme: theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT });
            }}
          >
            Swap theme
          </button>
        </ThemeContext.Provider>
        <Aloha name={user.name} id={user.id} makeFavourite={console.log} />
        <SignUpForm />
        <Header user={user} logout={this.logout} />
        <button className="btn" onClick={this.handleClick}>
          Toggle isVisible
        </button>
        {isVisible && <Timer />}
      </>
    );
  }
}
