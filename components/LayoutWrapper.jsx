import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LayoutWrapper({children,backgroundColor='red',headerText='',textColor="blue"}) {
  return (
    <SafeAreaView style={[styles.container,{backgroundColor:backgroundColor}]}>
      <Text style={{color:textColor,textAlign:'center',fontSize:20,fontWeight:'bold'}}>{headerText}</Text>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
    }
})