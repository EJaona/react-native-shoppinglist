import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TextInput, Picker } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ItemsList from '../../components/ItemsList';
import CreateItem from '../../components/CreateItem';
import CreateCategory from '../../components/CreateCategory';
import MyShoppingList from '../myLists/MyShoppingList';
const { Navigator, Screen } = createStackNavigator()

export default _ => {

    const [ newItem, setNewItem ] = useState([]);

    
    const getData = async() => { // We will actually make a network request, so i'll leave this here.


        // fetch('https://api.github.com/users/ejaona/followers')
        //     .then( res => res.json())
        //     .then( res => setFollowers(res))
        //     .catch(err => console.log(err.message))

        
    }

    return (// We need screens, which means i need a navigator (stack). FlatList and TexInput will both be transplanted into their own components.

        

           <Navigator>

               <Screen name="ItemsList" component={ItemsList} options={{title: "Create your list"}} />
               <Screen name="CreateItem" component={CreateItem} />
               <Screen name="CreateCategory" component={ CreateCategory } options={{ title: 'Add Category' }} />
               <Screen name="MyShoppingList" component={ MyShoppingList } />
           </Navigator>

    )
}

