// @ts-check
// 'use strict';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Header from './components/Header';
// import Greeting from './components/Greeting';
// import Aloha from './components/Aloha';
import AlohaList from './components/AlohaList';
// import App from './components/App';

// @ts-expect-error
const root = ReactDOM.createRoot(document.getElementById('root'));
// const name = 'U3erKa';
// const user = {
//   name: 'user',
//   profilePicSrc: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
// };

root.render(
  <>
    {/* <App /> */}
    {/* <Header name={user.name} profilePicSrc={user.profilePicSrc} />
    <Greeting name={user.name} />
    <Greeting name={name} id={69} />
    <Aloha name={'U2'} isGreeting={true} />
    <Aloha name={'U3'} isGreeting={false} /> */}
    {/* @ts-ignore */}
    {/* <input disabled={user.name !== user} /> */}
    <AlohaList />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
