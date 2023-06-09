import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';
import Home from './components/Home';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from "expo-font";


const Tab = createBottomTabNavigator();


export default function App() {


  const icons = {
    Home: "md-home",
    Gameboard : "game-controller",
    Scoreboard : "list"
  };
  
  const navigationOptions  = ({route}) => ({
    tabBarIcon: () => {
      return <Ionicons name = {icons[route.name]} size={25} color={"#CD5C5C"} />
    },
  });


  //fonts
  const [loaded] = useFonts({
    AntonRegular: require("./fonts/Anton-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    
        <NavigationContainer> 
            <Tab.Navigator screenOptions={navigationOptions}> 
              <Tab.Screen 
              name="Home" 
              component={Home} /> 
              <Tab.Screen 
              name="Gameboard" 
              component={Gameboard} /> 
              <Tab.Screen 
              name="Scoreboard" 
              component={Scoreboard} /> 
            </Tab.Navigator>
        </NavigationContainer>
  );
}