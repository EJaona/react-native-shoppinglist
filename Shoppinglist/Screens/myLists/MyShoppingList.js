import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native'


export default ({ route:{params:{ currentList }} }) => {

    const [ list, setList ] = useState(currentList)

    return(
        <View>
            <FlatList
            
                data={ list }
                keyExtractor={ item => item.name }
                renderItem={ ({ item }) => (

                    <View>
                        <Text>{ item.name }</Text>
                        <Text>{ item.quantity }</Text>
                        <Text onPress={() => setList(list.filter(curItem => curItem !== item ))}> X </Text>

                    </View>

                )
            }

            />

            <Text> Total for this trip: ~ {list.reduce((acc, cur) => acc += (cur.price * cur.quantity), 0) || 0 } </Text> // This should be a function
            
        </View>
    )
}