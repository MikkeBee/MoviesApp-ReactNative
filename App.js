/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import Home from './screens/Home';
import Details from './screens/Details';
import Navbar from './components/Navbar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerTransparent: true}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTransparent: false,
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
