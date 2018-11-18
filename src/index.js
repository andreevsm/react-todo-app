import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/layouts/App';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from 'store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<span>Loading...</span>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
