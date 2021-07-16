 import React from 'react';
 import {NavigationAction ,NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Login from '../home/index'
 import Home from '../login/index'
import {
    Text,
    View,
  } from 'react-native';
const Stack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer initialRoutName={'Login'} >
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Home} options={{headerTitle:'Sgin Up '}} />
          <Stack.Screen name='Home' component={Login} />
        </Stack.Navigator>
    
       </NavigationContainer>
    );
}
;
