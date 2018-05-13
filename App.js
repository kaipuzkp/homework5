import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './src';

import AppIndicator from './src/indicator';
import AppAlert from './src/alert';

const EnhancedApp = () => 
(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor} >
    <App />
    <AppIndicator size='large' color='#ff00ff'/>
    <AppAlert />
  </PersistGate>
</Provider>);

export default EnhancedApp