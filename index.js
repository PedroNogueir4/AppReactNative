import {AppRegistry} from 'react-native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Feed from './src/pages/Feed';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Feed);
