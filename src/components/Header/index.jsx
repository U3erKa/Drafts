import React from 'react';
import PropTypes from 'prop-types';

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
    const { name, profilePicSrc } = this.props;
    return (
      <header>
        <h1>My site</h1>
        <img src={profilePicSrc} alt={name} />
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
  profilePicSrc: PropTypes.string,
};

export default Header;
