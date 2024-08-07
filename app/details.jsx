import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LayoutWrapper from "../components/LayoutWrapper";
import { Stack, useLocalSearchParams } from 'expo-router';

export default function Details() {
  const params=useLocalSearchParams()
  
  return (
    
    <LayoutWrapper backgroundColor={'green'} headerText={""} textColor='white'>
    <Stack.Screen
      options={{
        headerShown:true,
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20
        },
      }}
      />
    <ScrollView>
      <Image source={require("../assets/images/Product.png")}style={styles.imageStyle}/>
      <View style={styles.textbox}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.subtitle}>${params.price}</Text>
        <Text style={styles.subtitle}>Id: {params.id}</Text>
      </View>
      <Text style={[styles.description,styles.title]}>Description:</Text>
      <Text style={styles.description}>
        {params.description}</Text>
      
    </ScrollView>
   </LayoutWrapper>
  )
}

const styles = StyleSheet.create({
  imageStyle:{
    width:'100%',
    height:150
},
textbox:{
  paddingHorizontal:20,
  paddingVertical:10
},
title:{
  fontSize:20,
  fontWeight:'bold'
},
subtitle:{
  fontSize:18,
  fontWeight:'700'
},
description:{
  margin:5,
  fontSize:20,
  marginLeft:15,
}
})