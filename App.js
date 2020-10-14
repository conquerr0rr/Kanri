/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Splash from './screens/splash-screen';
import Login from './screens/login';
import LetsGo from './screens/lets-go';
import Home from './screens/home';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <StatusBar backgroundColor="#150B27" />
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Splash" component={Splash} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="LetsGo" component={LetsGo} /> */}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
