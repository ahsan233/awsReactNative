/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Amplify} from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

// const isLocalhost = Boolean(__DEV__);

// // Assuming you have two redirect URIs, and the first is for localhost and second is for production
// const [
//   localRedirectSignIn,
//   productionRedirectSignIn,
// ] = config.oauth.redirectSignIn.split(",");

// const [
//   localRedirectSignOut,
//   productionRedirectSignOut,
// ] = config.oauth.redirectSignOut.split(",");

// const updatedAwsConfig = {
//   ...config,
//   oauth: {
//     ...config.oauth,
//     redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
//     redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
//   }
// }

// Amplify.configure(updatedAwsConfig);


AppRegistry.registerComponent(appName, () => App);
