import React from 'react';
import {Provider} from 'react-redux';
import {Router} from'react-router-dom';
import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';

import {ToastContainer} from 'react-toastify';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

function App() {
  return(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
            <ToastContainer autoClose={2500} />
          </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
