/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeRecycler from './components/HomeRecycler';
import CardProfile from './custom-components/CardProfile';
import { JSX } from 'react/jsx-runtime';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function App(): JSX.Element {

  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}



function SettingsScreen() {

  return (

    <View>
   
      <Text>RUTAS 3</Text>
    </View>

  );

}

function MyTabs() {
 
  return (
 
    <Tab.Navigator>
 
      <Tab.Screen name="Home" component={HomeRecycler} />
      <Tab.Screen name="Settings" component={CardProfile} />
      <Tab.Screen name="Direcciones" component={SettingsScreen} />
    </Tab.Navigator>
 
  );
 
}

export default App;
