import { Link, Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

const paramObj={
  name:"jasd",
  age:123
}


export default function Home() {
  const router=useRouter()
  const [variable,setVariable]=useState(0)
  const [data,setData]=useState([
    {
    name:"saim",
    age:40,
    dob:"12-20-2000"
  },
    {
    name:"asim",
    age:40,
    dob:"12-20-2000"
  },
    {
    name:"arslam",
    age:40,
    dob:"12-20-2000"
  },
    {
    name:"saif",
    age:40,
    dob:"12-20-2000"
  },
])

  const routeToDetailPage=()=>{
    router.push('/ViewImage')
  }


  return (
    <View style={styles.container}>
      <Stack.Screen
      options={{
        title:'Home'
      }}
      />
      {
        data.map((item)=>(
           <TouchableOpacity 
          //  onPress={routeToDetailPage}
           style={{borderWidth:1,borderRadius:20,backgroundColor:'grey',padding:20,width:"90%",}}>
              <Image  source={{uri:'https://www.wikihow.com/images/thumb/d/db/Get-the-URL-for-Pictures-Step-2-Version-6.jpg/v4-460px-Get-the-URL-for-Pictures-Step-2-Version-6.jpg.webp'}}/>
              <Text>
                Name: {item.name}
              </Text>
              <Text>
                age: {item.age}
              </Text>
              <Text>
                dob: {item.dob}
              </Text>
              <Link href={{ pathname:'details',params: item }}>Go to Details</Link>
           </TouchableOpacity>
        ))}
      <Text>Home Screen: {variable}</Text>
      <Button title='increment' onPress={()=>setVariable(variable+1)}/>
      <Button title='decrement' onPress={()=>setVariable(variable-1)}/>

      {/* <Link href={{ pathname:'details',params: { name: 'Bacon' } }}>Go to Details</Link> */}
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