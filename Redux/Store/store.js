import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/rootReducer';

const logger = () => {
  return (next) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;
