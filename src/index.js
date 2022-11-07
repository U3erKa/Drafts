// @ts-check
'use strict';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

// @ts-expect-error
const root = ReactDOM.createRoot(document.getElementById('root'));
const name = 'U3erKa';
const user = {
  name: 'user',
  profilePicSrc:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
};

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
    // const { name } = this.props;
    return (
      <header>
        <h1>My site</h1>
        <img src={user.profilePicSrc} alt={user.name} />
      </header>
    );
  }
}

function Greeting(props) {
  const { name } = props;
  return <p>Hello, {name}!</p>;
}
Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Greeting name={user.name} />
    <Greeting name={name} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

