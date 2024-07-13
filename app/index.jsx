
import React, { useEffect, useState } from 'react';
import CommonButton from '../components/CommonButton'
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-root-toast';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const route=useRouter()

  const loginFunction=async()=>{
    setLoading(true)
    try {
      const url='https://glamparlor.onrender.com/api/auth'
      const body = {
        "email":email,
        "password":password,
      }
      const response=await axios.post(url,body)
      await AsyncStorage.setItem("name",response.data.user.name)
      await AsyncStorage.setItem("email",response.data.user.email)
      await AsyncStorage.setItem("token",response.data.token)
      console.log("ress====?",response.data)
      Toast.show("Login Successfully", {
        duration: Toast.durations.SHORT,
      });
      route.push("Home")
    } catch (error) {
      Toast.show(error.response.data.message, {
        duration: Toast.durations.SHORT,
      });
    }finally{
      setLoading(false)
    }
  }

  return (
    <View>
      <View style={styles.bg}>
        <Text style={styles.header}>Welcome</Text>
        <Text style={styles.line}>Sign in to continue</Text>
      </View>
      <View>
        <Text style={styles.Reg}>Login</Text>
        <Text style={styles.inputhead}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          autoCapitalize='none'
          onChangeText={text => setEmail(text)}
          placeholder="Enter your Email"
        />
        <Text style={styles.headline}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Enter your Password"
        />
        <TouchableOpacity>
           <Text style={styles.forget}>Forget Password?</Text>
        </TouchableOpacity>
        <CommonButton loading={loading} text={'LOGIN'} btnStyle={{marginTop:30}}  onPress={loginFunction}/>
        <View style={styles.last}>
            <Text style={styles.press1}>Don't have an account? </Text>
          <TouchableOpacity onPress={()=>route.navigate("Register")}>
              <Text style={styles.press}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'green',
    height: 250,
  },
  header: {
    textAlign: 'center',
    marginTop: 100,
    color: 'green',
    fontSize: 60,
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  line: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    marginTop:10,
  },
  Reg: {
    fontSize: 40,
    marginTop: 30,
    fontWeight: 'bold', 
    color: 'green',
    marginLeft:20,
  },
  input: {
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 2,
    margin: 10,
    fontSize:15,
    borderRadius: 30,
    paddingLeft: 10,
  },
  inputhead: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    marginTop:30,
    fontWeight: 'bold',
  },
  headline: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  last:{
    flexDirection:'row',
    padding:20,
    marginLeft:40,
  },
  press:{
    textAlign:'center',
    fontSize:20,
    textDecorationLine:'underline',
    color:'green',
    fontWeight:'bold'
  },
  press1:{
    fontSize:20,
    textAlign:'center',
  },
  forget:{
    fontSize:20,
    textAlign:'right',
    marginRight:30,
    color:'green',
    fontWeight:'bold',
    textDecorationLine:'underline',
  }
});
