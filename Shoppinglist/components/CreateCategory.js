import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { sub } from 'react-native-reanimated';


export default props => {

    const [ placeholderText, setPlaceholderText ] = useState(`Category name. . . `)
    const [ inputText, setInputText ] = useState('')
    const [ subCategories, setSubCategories ] = useState([])
    const [ category, setCategory ] = useState({
        
        name: 'add a name',
        subCategories: subCategories
    })

    const handleInputChange = (value) => (

        setInputText(value)
        
        
    )

    const handleSubmit = _ => {

        currentInput === "setCategory"?
            setCategory({...category, name: inputText}):
            
            setCategory({
                ...category,
                subCategories: [...category.subCategories, { name: inputText }]
            })

        setInputText('')
    }
    const [ currentInput, setCurrentInput ] = useState("setCategory")

    
    console.log(category)


    return(

        <View>
            <View>
                <Text> { category.name } </Text>

                <FlatList
                    data={category.subCategories}
                    keyExtractor={ item => item.name}
                    renderItem={({ item }) => <Text> {item.name} </Text> }
                />
            </View>

            <TextInput 
                value={inputText}
                placeholder={placeholderText}
                onChangeText={(value) => handleInputChange(value)}
                onSubmitEditing={handleSubmit}
            />
        
            <TouchableOpacity onPress={() => (setCurrentInput("setSubCategories"), setPlaceholderText('sub-category name. . . '))}>
            <Text>Add { placeholderText } </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('CreateItem', {selectedCategory: category.name})}>
                <Text> Next </Text>
            </TouchableOpacity>


        </View>
    )
}
