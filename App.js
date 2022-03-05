/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Payment
 from './payment';
import HomeScreen from './home';
import User from './user';
import VideoPage from './videoPage';

const Stack = createStackNavigator();

const App = () => {

  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}

          />

          <Stack.Screen
            name="User"
            component={User}
            options={{title: 'Welcome User'}}

          />

          <Stack.Screen
            name="VideoPage"
            component={VideoPage}
            options={{title: 'Video Page',headerTintColor:'red', headerTitleAlign:'center' }}

          />

      
          
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
