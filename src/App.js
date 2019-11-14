import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { isLoggedIn } from 'redux/auth/authActions';
import { getTours } from 'redux/tour/tourActions';

// Components
import Alert from 'components/alert/Alert';
import Modal from 'components/modal/Modal';
import Navbar from 'components/navbar/Navbar';

// Pages
import Homepage from 'pages/homepage/Homepage';
import Tourpage from 'pages/tourpage/Tourpage';

// Styles
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

const App = ({ isLoggedIn, getTours }) => {
  useEffect(() => {
    isLoggedIn();
    getTours();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Alert />
        <Modal />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/tour/:slug" component={Tourpage} />
        </Switch>
      </ThemeProvider>
    </Fragment>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.func.isRequired,
  getTours: PropTypes.func.isRequired,
};

export default connect(null, { isLoggedIn, getTours })(App);
