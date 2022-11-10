// @ts-check
'use strict';

/*
  Сделать компонент кликера
  он должен отображать счетчик лкиокв
  и кнопку изменения счетчика

  Создайте компонент ДисплейКликера - его роль отображать счет

  Создайте компонент КонтроллерКликера - туда должна поехать кнопка

  Кликер должен работать как обычно

*/

// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ClickerButton from '../ClickerButton';
import ClickerScore from '../ClickerScore';

export default class Clicker extends Component {
  // static propTypes = {second: third}
  state = {
    counter: 0,
  };

  clicker = () => {
    // this.setState({ clicks: (this.state.clicks + 1) });
    const { counter } = this.state;
    const newState = {
      counter: counter + 1,
    };

    this.setState({ counter: newState.counter });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <ClickerScore score={counter} />
        <ClickerButton clicker={this.clicker} />
        {/* <p>Clicks: {counter}</p>
        <button onClick={this.clicker}>Click me!</button> */}
      </div>
    );
  }
}

