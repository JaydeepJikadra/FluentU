/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { LogBox } from 'react-native';
import Root from './src';
import { name as appName } from './app.json';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => Root);
