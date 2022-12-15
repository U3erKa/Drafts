import {
  ClipboardEventHandler,
  Component,
  FocusEventHandler,
  FormEventHandler,
  MouseEvent,
  SyntheticEvent,
} from 'react';

export default class Form extends Component<{}, {}> {
  // [x: string]: FormEventHandler<HTMLFormElement> | undefined;
  handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget);
  };

  handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Submitted!');
  };
  handleCopy: ClipboardEventHandler<HTMLInputElement> = (e) => {
    console.log('Copied!');
  };

  render(): JSX.Element {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Sample text
          <input onFocus={this.handleFocus} onCopy={this.handleCopy} type="text" name="text" />
          <button type="submit">Submit</button>
        </label>
      </form>
    );
  }
}
