import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CommonButton({children}) {
  return (
    <View>
      <Text>CommonButton</Text>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})