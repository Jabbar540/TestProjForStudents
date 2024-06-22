import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';


export default function Home() {
  const [variable,setVariable]=useState(0)


  return (
    <View style={styles.container}>
      <Text>Home Screen: {variable}</Text>
      <Button title='increment' onPress={()=>setVariable(variable+1)}/>
      <Button title='decrement' onPress={()=>setVariable(variable-1)}/>

      <Link href={{ pathname:'details',params: { name: 'Bacon' } }}>Go to Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});