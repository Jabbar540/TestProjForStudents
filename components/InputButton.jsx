import React, { useState } from 'react';
import { View, StyleSheet, Text,  TextInput} from 'react-native';


export default function InputButton() {
    
return(
    <View>
     <Text style={styles.headline}>Title</Text>
     <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Enter Title"
      />
      <Text style={styles.headline}>Price</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={text => setPrice(text)}
        placeholder="Enter Price"
      />
      <Text style={styles.headline}>Description</Text>
      <TextInput
        style={styles.describe}
        value={description}
        onChangeText={text => setDescription(text)}
        placeholder="Add a Description"
  
        />
    </View>

)
};

const styles = StyleSheet.create({
    
      
      input: {
        height: 50,
        width: "90%",
        borderColor: "black",
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        paddingLeft: 10,
      },
      describe: {
        height: 100,
        width: "90%",
        borderColor: "black",
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        paddingLeft: 10,
        paddingTop: 10,
      },
      headline: {
        color: 'black',
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
      },
})