import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LayoutWrapper from '../components/LayoutWrapper'
import { Stack } from 'expo-router'

export default function CreateProduct() {
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
      <Text>CreateProduct</Text>
    </LayoutWrapper>
  )
}

const styles = StyleSheet.create({})