import React, { useContext } from 'react';
// @ts-expect-error
import { ThemeContext, ProductContext } from 'contexts';
import CONSTANTS from 'constants';
// @ts-expect-error
const { THEMES } = CONSTANTS;

const SomeArticle = (props) => {
  // eslint-disable-next-line react/prop-types
  const { theme, onClick } = props;

  const product = useContext(ProductContext);

  const styles = {
    backgroundColor: theme === THEMES.LIGHT ? 'lightgray' : '#444444',
    color: theme === THEMES.LIGHT ? 'black' : 'white',
  };
  return (
    <article style={styles}>
      <h5>Article</h5>
      <button onClick={onClick}>Change Theme</button>
      <div>{JSON.stringify(product)}</div>
    </article>
  );
};

export default SomeArticle;
