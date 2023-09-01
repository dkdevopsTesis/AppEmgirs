/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './components/Card';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { Card } from '@rneui/base';

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
   
      <Text>RUTAS</Text>
    </View>

  );

}

function MyTabs() {
 
  return (
 
    <Tab.Navigator>
 
      <Tab.Screen name="Home" component={SettingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Direcciones" component={SettingsScreen} />
    </Tab.Navigator>
 
  );
 
}

export default App;
