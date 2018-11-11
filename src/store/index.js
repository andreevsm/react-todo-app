import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../redux';

export function configureStore(initialState, cookies) {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ cookies })),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
  return store;
}
