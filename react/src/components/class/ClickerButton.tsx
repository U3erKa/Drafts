import PropTypes from 'prop-types';
import { Component, type ComponentProps } from 'react';

export default class ClickerButton extends Component<ComponentProps<'button'>> {
  static propTypes = { onClick: PropTypes.func.isRequired };

  render() {
    return <button {...this.props}>ClickerButton</button>;
  }
}
