
import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
// import App from './src';

import AppIndicator from './src/indicator';
import AppAlert from './src/alert';

import {
    StackNavigator,
} from 'react-navigation';

import App from './src/index';
import User from './src/user/user';
// import Signup from './src/signup/signup';

const AppNavigator = StackNavigator({
    LoginScreen: {screen: App},
    UserScreen: {screen: User},
    // SignupScreen: {screen: Signup},
});

const EnhancedApp = () =>
    (<Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <AppNavigator />
            {/*<App />*/}
            <AppIndicator size='large' color='#ff00ff'/>
            <AppAlert />
        </PersistGate>
    </Provider>);

export default EnhancedApp