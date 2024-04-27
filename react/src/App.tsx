import 'App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { THEMES } from 'configs';
import { PAGES } from 'routes';

const state = {
  theme: THEMES.LIGHT,
};

class App extends React.Component<unknown, typeof state> {
  state = state;

  render() {
    return (
      <Routes>
        {PAGES.map((props) => (
          <Route key={props.path} {...props} />
        ))}
        {/* <Route path="/about" render={(routeProps) => <AboutPage {...routeProps} />} /> */}
      </Routes>
    );
  }
}

export default App;
