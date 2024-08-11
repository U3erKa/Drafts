import { PureComponent, type PropsWithChildren, type ReactElement } from 'react';
import { createPortal } from 'react-dom';

export default class Portal extends PureComponent<PropsWithChildren, {}> {
  #el = document.createElement('div');

  public componentDidMount() {
    document.body.appendChild(this.#el);
  }

  public componentWillUnmount() {
    document.body.removeChild(this.#el);
  }

  public render(): ReactElement<PropsWithChildren> {
    return createPortal(this.props.children, this.#el);
  }
}
