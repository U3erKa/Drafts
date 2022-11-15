import React from 'react';
import PropTypes from 'prop-types';
import HeaderUserCard from './HeaderUserCard';

// function Header(props) {
//   return (
//     <header>
//       <h1>My react site</h1>
//       <img src={props.src} alt={props.name} />
//     </header>
//   );
// }

class Header extends React.Component {
  render() {
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
  name: PropTypes.string,
  profilePicSrc: PropTypes.string,
  // obj: PropTypes.shape({
  // obj: PropTypes.exact({
  //   name: PropTypes.string.isRequired,
  //   age: PropTypes.number,
  // }),
};

export default Header;
