import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LayoutWrapper from "../components/LayoutWrapper";

export default function Details() {
  return (
    <LayoutWrapper backgroundColor={'green'} headerText={"Headeer Text"} textColor='white'>
      <Text>Details</Text>
   </LayoutWrapper>
  )
}

const styles = StyleSheet.create({})