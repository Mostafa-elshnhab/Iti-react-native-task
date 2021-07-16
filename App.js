import React, { Component } from 'react';
import 'react-native-gesture-handler';
import Login from './src/screns/login/index'
import Home from './src/screns/home/index';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/screns/Navigation/Routs'
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableHighlight,
//   Image,
//   Alert,ImageBackground
// } from 'react-native';
const App = () => {
  return (
   <Routes/>
  );
};
export default App;

