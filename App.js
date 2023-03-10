/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './components/MainNav';

const App = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default App;
