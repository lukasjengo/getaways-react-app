import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'styles/theme';
import rootReducer from 'redux/root-reducer';

const customRender = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
      </Provider>
    );
  };
  return {
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
};

export { customRender as render };
