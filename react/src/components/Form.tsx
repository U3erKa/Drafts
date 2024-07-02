import {
  type ChangeEventHandler,
  type ClipboardEventHandler,
  Component,
  createRef,
  type CSSProperties,
  type FocusEventHandler,
  type MouseEventHandler,
} from 'react';

type Position = {
  id: string;
  value: string;
  title: string;
};
type FormState = {
  inputText: string;
  textareaText: string;
  selectText: string;
  showData: {
    name: string;
    text: string;
    position: string;
  };
};
const POSITIONS: Position[] = [
  {
    id: 'fd',
    value: 'Front-end Dev',
    title: 'Front-end Dev',
  },
  {
    id: 'bd',
    value: 'Back-end Dev',
    title: 'Back-end Dev',
  },
];
const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;
const styles: CSSProperties = { display: 'block', marginBottom: '10px' };

export default class Form extends Component<{}, FormState> {
  state = {
    inputText: '',
    textareaText: '',
    selectText: DEFAULT_SELECT_VALUE,
    showData: {
      name: '',
      text: '',
      position: '',
    },
  };

  private rootRef = createRef<HTMLSelectElement>();

  handleInputChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    const {
      target: { value: inputText },
    } = e;
    this.setState({ inputText });
  };
  handleTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = (e): void => {
    const {
      target: { value: textareaText },
    } = e;
    this.setState({ textareaText });
  };
  handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (e): void => {
    const {
      target: { value: selectText },
    } = e;
    this.setState({ selectText });
  };

  handleShow: MouseEventHandler<HTMLButtonElement> = (e): void => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;

    this.setState({
      inputText: '',
      textareaText: '',
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };

  handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    console.log(e.currentTarget);
  };

  handleCopy: ClipboardEventHandler<HTMLInputElement> = (e) => {
    console.log('Copied!');
  };

  render(): JSX.Element {
    const {
      inputText,
      textareaText,
      selectText,
      showData: { name, text, position },
    } = this.state;

    return (
      <>
        <form>
          <label style={styles}>
            Name:
            <input
              type="text"
              value={inputText}
              onChange={this.handleInputChange}
              onFocus={this.handleFocus}
              onCopy={this.handleCopy}
            />
          </label>
          <label style={styles}>
            Text:
            <textarea value={textareaText} onChange={this.handleTextareaChange} />
          </label>
          <select style={styles} value={selectText} onChange={this.handleSelectChange} ref={this.rootRef}>
            {POSITIONS.map(({ id, title, value }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
          <button onClick={this.handleShow}>Show Data</button>
        </form>
        <section>
          <h1>{name}</h1>
          <p>{text}</p>
          <h2>{position}</h2>
        </section>
      </>
    );
  }
}
