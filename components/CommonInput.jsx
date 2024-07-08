import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function CommonInput({
    titleText='',
    placeholder='',
    value='',
    onChangeText=()=>"",
    headerTextStyle={},
    inputStyle={},
    multiline=false
}) {
  return (
    <View>
       <Text style={[styles.headline,headerTextStyle]}>{titleText}</Text>
        <TextInput
          style={[styles.input,inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          multiline={multiline}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    headline: {
        color: 'black',
        fontSize: 20,
        marginLeft: 20,
        fontWeight: 'bold',
      },
      input: {
        height: 50,
        width: "90%",
        borderColor: "black",
        borderWidth: 2,
        margin: 10,
        borderRadius: 10,
        paddingLeft: 10,
      },
})