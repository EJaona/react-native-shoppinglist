import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, FlatList, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';



export default ({ navigation:{ push, setOptions, navigate }, route:{ params:{ selectedCategory } } }) => {

    setOptions(
        {title: `${selectedCategory} List` }
    )
    
    // const [ items, setItems ] = useState()

    const [ displayItem, setDisplayItem ] = useState([])

    useEffect(() => {

        setDisplayItem(items.filter(item => item.name))

        displayItem.sort()

    },[items])

    const [ currentList, setCurrentList ] = useState([])

    const [ name, setName ] = useState('')
    const [ price, setPrice ] = useState("0")
    const [ quantity, setQuantity ] = useState('')

    const handlePickedITem = item => {// action creator

        !currentList.includes(item) ?
            setCurrentList([...currentList, item]) :
            console.log('You already have it in the list')

        setItems(items.filter(curItem => curItem !== item))
    }

    const handleRemoveItem = item => {// action creator

        setCurrentList(currentList.filter(Curitem => Curitem !== item))
        setItems([...items, item])
    }

    const handleAddITem = _ => {

        const item = {
            name,
            price,
            quantity: quantity || 1
        }
        
        !currentList.includes(item) ?
            setCurrentList([...currentList, item]) :
            console.log('You already have it in the list')

        setName('')
        setPrice('')
        setQuantity('')
    }

    return (// Show type of list in header. Show available items in flatlist
        

        <KeyboardAvoidingView>
            
            <FlatList

                data={displayItem}
                keyExtractor={ item => item.name}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handlePickedITem(item)}>
                        <Text>
                            { item.name }
                        </Text>
                    </TouchableOpacity>
                )}
            

            />

            <Text>New List</Text>

            <FlatList
            
                    data={ currentList }
                    keyExtractor={ item => item.name }
                    renderItem={ ({ item }) => (
                        <View>
                            <Text>{ item.name }</Text>
                            <Text>{ item.quantity }</Text>
                            <Text onPress={() => handleRemoveItem(item)}> X </Text>

                        </View>

                        
                    )}
            />

            <TextInput value={name} onChangeText={value => setName(value)} placeholder="Item name...." />
            <TextInput keyboardType="number-pad" value={price} onChangeText={value => setPrice(value)} placeholder="Price...." />
            <TextInput keyboardType="number-pad" value={quantity} onChangeText={value => setQuantity(value)} placeholder="Quantity...." />
            
            <TouchableOpacity onPress={handleAddITem}>

                <Text>Add Item</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('MyShoppingList', { currentList })} >

                <Text>Let's go shopping!</Text>

            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

