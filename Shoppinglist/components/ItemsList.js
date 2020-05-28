import React, { useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native'


export default ({ navigation:{ navigate } }) => {

 
    const [ isRefreshing, setIsRefreshing ] = useState(false)
    const [ selectedCategory, setSelectedCategory ] = useState('')// action creator
    // const [ categories, setCategories ] = useState() // moved to store

    return (

        <View>

            <Text>What Type Of List Would You Like To Create?</Text>

            <FlatList
            
                data={categories}
                keyExtractor={item => item.category}
                renderItem={({ item }) => (

                    <TouchableOpacity 

                        onPress={() => (

                            navigate('CreateItem', { selectedCategory: item.category })
                        )}
                        
                    >
                        <Text> {item.category} </Text>
                    </TouchableOpacity>
                
                )
            }
            />


            <TouchableOpacity onPress={() => navigate('CreateCategory') } >
                <Text>Add New Category</Text>
            </TouchableOpacity>

        </View>

    )
}