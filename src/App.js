import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { login } from 'redux/auth/authActions';

// Components
import Navbar from 'components/navbar/Navbar';
import Modal from 'components/modal/Modal';

// Pages
import Homepage from 'pages/homepage/Homepage';

// Styles
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

const App = ({ login }) => {
  useEffect(() => {
    login();
  }, [login]);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
        <Modal />
      </ThemeProvider>
    </Fragment>
  );
};

export default connect(
  null,
  { login }
)(App);
