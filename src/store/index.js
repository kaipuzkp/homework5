import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'

import { reducer as reduxFormReducer } from 'redux-form';
import counterReducer from '../reducers/counter';
import settingReducer from '../reducers/settings';

const loggerMiddleWare = createLogger();
const reducers = combineReducers({
  counter: counterReducer,
  form: reduxFormReducer,
  settings: settingReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const createStoreWithMiddleware = applyMiddleware(loggerMiddleWare)(createStore);

export const store = createStoreWithMiddleware(persistedReducer);
export const persistor = persistStore(store)