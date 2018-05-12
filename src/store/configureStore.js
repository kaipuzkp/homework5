import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { createLogger } from 'redux-logger';

import counterReducer from '../reducers/counter';

const loggerMiddleWare = createLogger();
const reducers = combineReducers({
  counter: counterReducer
});

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleWare)(createStore);


const configureStore = () => {
  return createStoreWithMiddleware(reducers);
};

export default configureStore;