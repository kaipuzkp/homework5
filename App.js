import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './src';

import AppIndicator from './src/indicator';

const EnhancedApp = () => 
(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor} >
    <App />
    <AppIndicator size='large' />
  </PersistGate>
</Provider>);

export default EnhancedApp