
import React, { useEffect, useState } from 'react';
import CommonButton from '../components/CommonButton'
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-root-toast';

export default function Reg() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);

  const route=useRouter()

  const submitFunction=async()=>{
    setLoading(true)
    try {
      const url='https://glamparlor.onrender.com/api/users/signup'
      const body = {
        "email":email,
        "password":password,
        "name":firstName+" "+lastName
      }
      console.log("api===>started")
      const response=await axios.post(url,body)
      Toast.show(response.data.message, {
        duration: Toast.durations.SHORT,
      });
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
      <ScrollView>
        <View style={styles.bg}>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.line}>Sign up to continue</Text>
        </View>

        <View>
          <Text style={styles.Reg}>Register</Text>
         <View style={styles.title}>
            <Text style={styles.One}>First Name</Text>
            <Text style={styles.One}>Last Name</Text>
          </View>

          <View style={styles.headinput}>
          <TextInput
            style={styles.titleinput}
            value={firstName}
            onChangeText={text => setFirstName(text)}
            placeholder="First Name"
          />
          <TextInput
           style={styles.titleinput}
            value={lastName}
            onChangeText={text => setLastName(text)}
            placeholder="Last Name"
          />
          </View>

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
          <Text style={styles.headline}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholder="Confirm your Password"
          />
          
          <CommonButton 
          loading={loading}
          text={'REGISTER'} 
          btnStyle={{marginTop:30}}  
          onPress={submitFunction}/>
          <View style={styles.last}>
              <Text style={styles.press1}>Do you have an account? </Text>
            <TouchableOpacity>
                <Text style={styles.press}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'green',
    height: '30%',
    borderBottomRightRadius:100,
    borderBottomLeftRadius:100
  },
  header: {
    textAlign: 'center',
    marginTop: 100,
    color: 'green',
    fontSize: 60,
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  One:{
    marginTop:30,
    fontWeight:'bold',
    fontSize:20,
  },

  title:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'70%',
    marginLeft:25,
  
  },
  titleinput:{
    borderColor: 'grey',
    borderWidth: 2,
    marginTop: 10,
    fontSize:15,
    borderRadius: 30,
    width:'43%',
    height:50,
    paddingLeft:10
  },
  headinput:{
    flexDirection:'row',
    justifyContent:'space-evenly',
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
    marginTop:10,
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
  }
});
