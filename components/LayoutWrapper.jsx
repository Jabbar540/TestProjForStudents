import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LayoutWrapper({children,backgroundColor='red',headerText='',textColor="blue"}) {
  return (
    <View style={[styles.container,{backgroundColor:backgroundColor}]}>
    <Text style={{color:textColor}}>{headerText}</Text>
     {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    }
})