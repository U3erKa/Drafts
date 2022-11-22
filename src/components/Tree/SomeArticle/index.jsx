import React from 'react';
import { ThemeContext, THEMES } from '../../../App';

const SomeArticle = () => {
  const renderFunc = (contextValue) => (
    <article>
      <h5>Article</h5>
      <div style={{ backgroundColor: contextValue === THEMES.LIGHT ? '#eeeeee' : '#444444' }}>Loremium</div>
    </article>
  );

  return <ThemeContext.Consumer>{renderFunc}</ThemeContext.Consumer>;
};

export default SomeArticle;
