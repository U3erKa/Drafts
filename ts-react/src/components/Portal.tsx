import { Component, ReactElement, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: ReactNode;
};

export default class Portal extends Component<PortalProps, {}> {
  private el: HTMLDivElement = document.createElement('div');

  public componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  public componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  public render(): ReactElement<PortalProps> {
    return createPortal(this.props.children, this.el);
  }
}
