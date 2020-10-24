import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';

import { styles } from '../../App'

export default (  ) => {

    // const [ items, setItems ] = useState()


    return(// The flatlist should be styled like a receipt. Quick add will add an item to your current list.

        <View>
            <Text>You last went shopping 2 weeks ago</Text>
            <Text>Here's what you bought  </Text>
            <FlatList
                data={items}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <Text> { item.name } Qnty: {item.qnty} </Text> }
            />
            <Text> Quick add </Text>
            <Text>Your shopping total was: { items.reduce((acc, cur) => acc += (cur.price * cur.qnty), 0) } Ar </Text>
        </View>
    )

}