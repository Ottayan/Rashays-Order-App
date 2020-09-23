/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import BgMessage from './firebase/BgMessaging';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask("RNFirebaseBackgroundMessage", () => BgMessage )
