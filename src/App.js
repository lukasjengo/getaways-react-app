import React, { Fragment, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import { myTheme } from 'styles/theme';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoggedIn());
    dispatch(getTours());
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <ThemeProvider theme={myTheme}>
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

export default App;
