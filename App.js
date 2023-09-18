// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  */

// // import React from 'react';
// // import type {PropsWithChildren} from 'react';
// // import {
// //   SafeAreaView,
// //   ScrollView,
// //   StatusBar,
// //   StyleSheet,
// //   Text,
// //   useColorScheme,
// //   View,
// // } from 'react-native';

// // import {
// //   Colors,
// //   DebugInstructions,
// //   Header,
// //   LearnMoreLinks,
// //   ReloadInstructions,
// // } from 'react-native/Libraries/NewAppScreen';

// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;

// // function Section({children, title}: SectionProps): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }

// // function App(): JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';

// //   const backgroundStyle = {
// //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
// //   };

// //   return (
// //     <SafeAreaView style={backgroundStyle}>
// //       <StatusBar
// //         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
// //         backgroundColor={backgroundStyle.backgroundColor}
// //       />
// //       <ScrollView
// //         contentInsetAdjustmentBehavior="automatic"
// //         style={backgroundStyle}>
// //         <Header />
// //         <View
// //           style={{
// //             backgroundColor: isDarkMode ? Colors.black : Colors.white,
// //           }}>
// //           <Section title="Step One">
// //             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
// //             screen and then come back to see your edits.
// //           </Section>
// //           <Section title="See Your Changes">
// //             <ReloadInstructions />
// //           </Section>
// //           <Section title="Debug">
// //             <DebugInstructions />
// //           </Section>
// //           <Section title="Learn More">
// //             Read the docs to discover what to do next:
// //           </Section>
// //           <LearnMoreLinks />
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

// // export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './app/src/screens/Login/Login';
// import SignupScreen from './app/src/screens/SignUp/SignUp';
// import ForgotPassword from './app/src/screens/ForgetPassword/ForgetPassword';
// // import config from './src/aws-exports'
// //import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
// const Stack = createNativeStackNavigator();

// const App: React.FC = () => {
//   return (
//      <NavigationContainer>
//       <Stack.Navigator>
//         {/* <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}} /> */}

//         <Stack.Screen name="SignUp" component={SignupScreen}  options={{headerShown: false}} />
//         //<Stack.Screen name="forgetPassword" component={ForgotPassword}  options={{headerShown: false}} />
//         {/* Add other screens here */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

//  export default App;
// //export default withAuthenticator(App);

import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Amplify, {Auth} from 'aws-amplify';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from './app/src/screens/SignIn';
import SignUp from './app/src/screens/SignUp';
import ConfirmSignUp from './app/src/screens/ConfirmSignUp';
import Home from './app/src/screens/Home';
import ForgetPassword from './app/src/screens/ForgetPassword';
import ResetPassword from './app/src/screens/ResetPassword';
import VerifyOTP from './app/src/screens/VerifyOTP';
import AddProducts from './app/src/screens/AddProduct';
import EditProducts from './app/src/screens/EditProducts';
import CreateProfile from './app/src/screens/CreateProfile';
import UserProfile from './app/src/screens/UserProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { toGammaSpace } from 'react-native-reanimated';
const AuthenticationStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs(props) {
  return (
    <Tab.Navigator
    >
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Home" 
            options={{
              headerShown: false,
              tabBarLabel: "",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Icon name={'home'} size={30} color='tomato' />
                ) : (
                  <Icon name={'home'} size={30} color="#000000" />
                ),
            }}
      >
        {screenProps => (
          <Home {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </Tab.Screen>
      <Tab.Screen
       name="UserProfile" component={UserProfile} 
       options={{
        headerShown: false,
        tabBarLabel: "",
        tabBarIcon: ({ focused }) =>
          focused ? (
            <Icon name={'user'} size={25} color='tomato' />
          ) : (
            <Icon name={'user'} size={25} color="#000000" />
          ),
      }}
       
       />

    </Tab.Navigator>

  );
}

const AuthenticationNavigator = props => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="SignIn">
        {screenProps => (
          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>
      <AuthenticationStack.Screen name="SignUp" component={SignUp} />
      <AuthenticationStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
        //  options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        //   options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        //  options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name="VerifyOTP"
        component={VerifyOTP}
        //  options={{headerShown: false}}
      />
      <AuthenticationStack.Screen
        name="CreateProfile"
        component={CreateProfile}
        //  options={{headerShown: false}}
      />
      <AuthenticationStack.Screen name="Home" options={{headerShown: false}}>
        {screenProps => (
          <Home {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenticationStack.Screen>
    </AuthenticationStack.Navigator>
  );
};
const AppNavigator = props => {
  return (
    <AppStack.Navigator>
      {/* <AppStack.Screen name="Home" options={{headerShown: false}}>
        {screenProps => (
          <Home {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AppStack.Screen> */}
       <AppStack.Screen
        name="HomeScreen"
        component={MyTabs}
        options={{headerShown: false}}
        //  options={{headerShown: false}}
      />
      <AppStack.Screen
        name="CreateProfile"
        component={CreateProfile}

        //  options={{headerShown: false}}
      />
      <AppStack.Screen
        name="AddProducts"
        component={AddProducts}

        //  options={{headerShown: false}}
      />
       <AppStack.Screen
        name="EditProducts"
        component={EditProducts}

        //  options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};
const Initializing = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};
function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');
  useEffect(() => {
    checkAuthState();
  }, []);
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log('✅ User is signed in');
      setUserLoggedIn('loggedIn');
    } catch (err) {
      console.log('❌ User is not signed in');
      setUserLoggedIn('loggedOut');
    }
  }
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }
  return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializing' && <Initializing />}
      {isUserLoggedIn === 'loggedIn' && (
        <AppNavigator updateAuthState={updateAuthState} />
      )}
      {isUserLoggedIn === 'loggedOut' && (
        <AuthenticationNavigator updateAuthState={updateAuthState} />
      )}
    </NavigationContainer>
  );
}
export default App;
