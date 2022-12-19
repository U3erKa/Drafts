import React from 'react';
// import PropTypes from 'prop-types';
import { ProductContext, ThemeContext } from 'contexts';
import { THEMES } from 'configs';

// const SomeArticle = () => {
//   const renderFunc = (contextValue) => (
//     <article>
//       <h5>Article</h5>
//       <div style={{ backgroundColor: contextValue === THEMES.LIGHT ? '#eeeeee' : '#444444' }}>Loremium</div>
//     </article>
//   );

//   return <ThemeContext.Consumer>{renderFunc}</ThemeContext.Consumer>;
// };

const SomeArticle = (props: { product: JSON; theme: THEMES }) => {
  const { product, theme } = props;
  const onClick = () => {
    console.log(true);
  };

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

// SomeArticle.propTypes = {
//   product: PropTypes.string,
//   theme: PropTypes.string,
// };

function withProduct(Component) {
  function NewComponent(props: any) {
    return <ProductContext.Consumer>{(product) => <Component product={product} {...props} />}</ProductContext.Consumer>;
  }

  return NewComponent;
}

// eslint-disable-next-line react/display-name
const withTheme = (Component) => (props: any) =>
  (
    <ThemeContext.Consumer>
      {([theme, onClick]) => <Component theme={theme} onClick={onClick} {...props} />}
    </ThemeContext.Consumer>
  );

// const SomeArticleWithProduct = withProduct(SomeArticle);
// const SomeArticleWithAll = withTheme(SomeArticleWithProduct);

const SomeArticleWithAll = withProduct(withTheme(SomeArticle));

export default SomeArticleWithAll;

// export default SomeArticle;
