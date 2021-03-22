import axios from 'axios';
import getConfig from 'next/config';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../Reducers/RootReducer';

const { publicRuntimeConfig } = getConfig();
let store;

function initStore(initialState) {
  const axiosInstance = axios.create({
    baseURL: publicRuntimeConfig.baseUrl,
  });
  return createStore(rootReducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware.withExtraArgument(axiosInstance))));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState = {}) {
  const store = initializeStore(initialState);
  return store;
}
