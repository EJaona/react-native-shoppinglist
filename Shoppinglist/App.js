import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import Ionicons from  'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecentLists from './components/RecentLists';
import CreateList from './components/CreateList';
import Settings from './components/Settings';
import Home from './components/Home';

const { Navigator, Screen } = createBottomTabNavigator()

export default _ => {

//_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_- Notes _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

// 1) flatlist loops over your "data", and presents an object on RenderItem that has the index of the item, the data, ...rest. 

// 2) Screens are like routes on the web, NavContainer is like browserRouter
//      + screen takes a name ( essentially a path)
//      + screen takes a component ( to render )

  return(// To have the header title be the category, we need global state, or raise state to app

    <NavigationContainer >

      <Navigator>

        <Screen
          name="Home"
          component={Home}
        />

        <Screen 
          name="recent lists" 
          options={{title:'My Lists'}} 
          component={ RecentLists } 
        />

        <Screen 
          name="CreateList" 
          options={{title: 'Creat List'}} 
          component={CreateList} 
        />

        <Screen 
          name="Settings" 
          component={Settings} 
        />

      </Navigator> 

    </NavigationContainer>

  )

}

export const styles = {

  main: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttons: {

    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    width: '50%',
    color: 'white',
    alignItems: "center",
    margin: '2%',
  }

}