import {createStore} from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(initialState = {}) {
  // const middlewares = [applyMiddleware(thunk),
  //   applyMiddleware(apiMiddleware)];

  // if (__DEVELOPMENT__) {
  //   middlewares.push(applyMiddleware(createLogger()));
  // }

  // const finalCreateStore = compose(
  //   ...middlewares
  // )(createStore);

  const store = createStore(rootReducer, initialState);

  // if (__DEVELOPMENT__ && module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}