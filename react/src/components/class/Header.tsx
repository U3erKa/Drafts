import { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderUserCard from '../function/HeaderUserCard';
import type { User } from './Example';

type Props = {
  name?: string;
  profilePicSrc?: string;
  user: User;
  logout: () => void;
};

class Header extends Component<Props> {
  static defaultProps: { profilePicSrc: string; alt: string };
  static propTypes: {
    name: PropTypes.Validator<string>;
    profilePicSrc: PropTypes.Requireable<string>;
  };

  render() {
    // const { name = './null.png', profilePicSrc = 'null image', ...userProps } = this.props;
    const { name, profilePicSrc, ...userProps } = this.props;
    return (
      <>
        <header>
          <h1>My site</h1>
          <img src={profilePicSrc} alt={name} />
        </header>
        <HeaderUserCard {...userProps} />
      </>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicSrc: PropTypes.string,
  // obj: PropTypes.shape({
  // obj: PropTypes.exact({
  //   name: PropTypes.string.isRequired,
  //   age: PropTypes.number,
  // }),
};
Header.defaultProps = {
  profilePicSrc: './null.png',
  alt: 'null image',
};

export default Header;
