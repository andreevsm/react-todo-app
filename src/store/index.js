import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../redux';

export function configureStore(initialState, cookies) {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ cookies })),
    ),
  );
  return store;
}
