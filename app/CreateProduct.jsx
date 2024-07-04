import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput,Image, TouchableOpacity } from 'react-native';
import LayoutWrapper from '../components/LayoutWrapper';
import CommonButton from '../components/CommonButton';
import { Stack } from 'expo-router'; 
import CommonInput from '../components/CommonInput';
import ImagePicker from '../components/ImagePicker';

export default function CreateProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState([]);

  const filterImage=(arg)=>{
    const newImage=[...image]
    const filterImage=newImage.filter(i=>i.uri !== arg.uri)

    setImage(filterImage)
  }

  const savePress=()=>{
    console.log(image,title,description,price)
  }

  return (
    <LayoutWrapper backgroundColor={'green'} headerText={""} textColor='white'>
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
      />
      <ScrollView>       
        <View style={styles.head}>
          <Text style={styles.text}>Add a Product</Text>
          <ImagePicker 
            image={image} 
            setImage={setImage} 
            crossPress={(arg)=>filterImage(arg)}
          />
          <CommonInput
            titleText='Title'
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="Enter Title"
          />
          <CommonInput
            titleText='Price'
            value={price}
            onChangeText={text => setPrice(text)}
            placeholder="Enter Price"
          />
          <CommonInput
            titleText='Description'
            value={description}
            multiline={true}
            onChangeText={text => setDescription(text)}
            placeholder="Add a Description"
            inputStyle={{height:130}}
          />
          <CommonButton onPress={savePress} text={'Save'}/>
        </View>
      </ScrollView>
    </LayoutWrapper>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'white',
    margin: 30,
    borderRadius: 25,
    height: 700,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 30,
  },
  image:{
    height:77,     
  },
  btn: {
    backgroundColor: 'orange',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    margin: 40,
    fontSize: 25,
    fontWeight: 'bold',
  },
  btn2: {
    backgroundColor: 'orange',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
  },
 
});
