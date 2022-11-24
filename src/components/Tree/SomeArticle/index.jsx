import React from 'react';
import { ThemeContext, THEMES } from '../../../App';
import { ProductContext } from '../../../contexts';

// const SomeArticle = () => {
//   const renderFunc = (contextValue) => (
//     <article>
//       <h5>Article</h5>
//       <div style={{ backgroundColor: contextValue === THEMES.LIGHT ? '#eeeeee' : '#444444' }}>Loremium</div>
//     </article>
//   );

//   return <ThemeContext.Consumer>{renderFunc}</ThemeContext.Consumer>;
// };

const SomeArticle = (props) => {
  const { product, theme } = props;
  const onClick = () => {};

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

function withProduct(Component) {
  function NewComponent(props) {
    return <ProductContext.Consumer>{(product) => <Component product={product} {...props} />}</ProductContext.Consumer>;
  }

  return NewComponent;
}

const withTheme = (Component) => (props) =>
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
