import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from 'layout/navbar/Navbar';

// Pages
import Homepage from 'pages/homepage/Homepage';

// Styles
import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </Fragment>
  );
};

export default App;
