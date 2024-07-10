import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function CommonButton({onPress,text,btnStyle={},textStyle={},loading=false}) {
  return (
    <TouchableOpacity style={[styles.container,btnStyle]} onPress={onPress}>
      {
        loading==true?
        <ActivityIndicator/> :
        <Text style={[styles.textStyle,textStyle]}>{text}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'92%',
    backgroundColor:'green',
    padding:15,
    alignSelf:'center',
    borderRadius:16,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    color:'white',
    fontSize:25,
    fontWeight:'700'
  }
})