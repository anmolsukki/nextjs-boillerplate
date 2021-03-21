import axios from 'axios';
import { createWrapper } from 'next-redux-wrapper';
import getConfig from 'next/config';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/RootReducer';

const { publicRuntimeConfig } = getConfig();

const axiosInstance = axios.create({
  baseURL: publicRuntimeConfig.baseUrl,
});

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument(axiosInstance))));

export const wrapper = createWrapper(makeStore);
