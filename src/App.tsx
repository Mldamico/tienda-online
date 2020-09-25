import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import GlobalStyles from './styles/GlobalStyles';
// const GlobalStyle = createGlobalStyle`
//   body {
//     margin: 0;
//     height: 100vh;
//   }

// `;

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
