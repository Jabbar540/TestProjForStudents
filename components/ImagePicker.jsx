import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as _ImagePicker from 'expo-image-picker';
import { Entypo } from '@expo/vector-icons';

export default function ImagePicker({
    image=[],
    setImage=()=>"",
    crossPress=()=>""
}) {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await _ImagePicker.launchImageLibraryAsync({
          mediaTypes: _ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection:true
        });
    
        if (!result.canceled) {
        //   setImage(result.assets);
          setImage([...image,...result.assets]);
        }
      };
      
      
  return (
    <View style={{marginBottom:10,flexDirection:'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <TouchableOpacity onPress={pickImage} style={[styles.imagePicker]}>
                 <Entypo name='images' size={75}/>
               </TouchableOpacity>
               {image.length > 0 && image.map((i)=>(
                <View>
                   <Image source={{ uri: i.uri }} style={styles.imagePicker} />
                   <TouchableOpacity onPress={()=>crossPress(i)} style={styles.cross}>
                     <Entypo name='circle-with-cross' size={25} color={'red'}/>
                   </TouchableOpacity>
                </View>
                 )) 
             }
            </ScrollView>
          </View>
  )
}

const styles = StyleSheet.create({
    imagePicker:{
        borderWidth:1,
        borderRadius:12,
        width:150,
        height:150,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20
      },
      cross:{
        position:'absolute',
        top:0,
        right:0,
        zIndex:1000000000,
      }
})