import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Product({data={},onPress=()=>""}) {
  return (
      <View style={styles.container}>
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOBsV42g6xBERph3Xp9pGPKJAqOmM4-_Lkig&s'}} style={styles.imageStyle}/>
        <View style={styles.textbox}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>${data.price}</Text>
          <Text style={styles.subtitle}>id: {data.id}</Text>
          <Text style={styles.subtitle}>Description:</Text>
          <Text style={styles.detail}>{data.description}</Text>
          <Text style={styles.subtitle}>creationAt: {data.creationAt}</Text>
          <Text style={styles.subtitle}>updatedAt: {data.updatedAt}</Text>
        </View>
        <Link  
        style={{marginLeft:16}}
        href={{
                 pathname: "/details",
                 params: data
        }}>
            See details
        </Link>
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
    },
    detail:{
        fontSize:18,
    }
})