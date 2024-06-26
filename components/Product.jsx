import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Product({data={}}) {
  return (
      <View style={styles.container}>
        <Image source={data.image} style={styles.imageStyle}/>
        <View style={styles.textbox}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>${data.subtitle}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'grey',
        marginHorizontal:20,
        borderRadius:20,
        overflow:'hidden',
        marginTop:16
    },
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
    }
})