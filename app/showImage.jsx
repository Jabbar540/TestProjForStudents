import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from "expo-router";

export default function showImage() {
  const router = useRouter();

  const handleDismissAll = () => {
    router.dismissAll()
  };
  const handleDismiss = () => {
    router.dismiss(1)
  };
  
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Stack.Screen
      options={{headerShown:false}}
      />
      <Text>showImage</Text>
      <Button title="Go to first screen" onPress={handleDismissAll} />
      <Button title="Go to back screen" onPress={handleDismiss} />
    </View>
  )
}

const styles = StyleSheet.create({})