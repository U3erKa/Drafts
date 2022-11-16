// @ts-check
'use strict';

import React, { Component } from 'react';
import styles from './SignUpForm.module.scss';

const initialState = {
  email: '',
  password: '',
  accountLevel: 'basic',
  isAdult: false,
  gender: 'female',
};

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };
  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    signUp({ email, password });
    this.setState({ ...initialState });
    // console.log(e);
    // console.log(e.target.elements.email.value);
    // console.log(e.target.elements.password.value);
  };

  render() {
    const { email, password, isAdult, gender } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input className={styles.input} type="email" name="email" value={email} onChange={this.handleChange} />
        <input className={styles.input} type="password" name="password" value={password} onChange={this.handleChange} />
        <select name="accountLevel" onChange={this.handleChange}>
          <option value="basic">basic</option>
          <option value="adv">adv</option>
          <option value="pro">pro</option>
        </select>
        <label>
          <input type="checkbox" name="isAdult" checked={isAdult} onChange={this.handleChange} />
          Are you adult?
        </label>
        <p>Choose your gender</p>
        <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={this.handleChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={this.handleChange} />
          Female
        </label>
        <button disabled={!isAdult} className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}

function signUp(userData) {
  const { email, password } = userData;
  console.log(`${email} ${password} is signed up`);
}
