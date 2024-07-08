
import React, { useEffect, useState } from 'react';
import CommonButton from '../components/CommonButton'
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Reg() {
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Username, setUsername] = useState('');
  


  const route=useRouter()

  const myFunction=()=>{
    console.log("first time register screen load===>>>")
  }

  
  useEffect(()=>{
    myFunction()
  },[])


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
            value={FirstName}
            onChangeText={text => setFirstName(text)}
            placeholder="First Name"
          />
          <TextInput
           style={styles.titleinput}
            value={LastName}
            onChangeText={text => setLastName(text)}
            placeholder="Last Name"
          />
          </View>

          <Text style={styles.inputhead}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Enter your Email"
          />
          <Text style={styles.headline}>Password</Text>
          <TextInput
            style={styles.input}
            value={Password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your Password"
          />
          <Text style={styles.headline}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={ConfirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholder="Confirm your Password"
          />
          
          <CommonButton text={'REGISTER'} btnStyle={{marginTop:30}}  onPress={()=>route.navigate("Home")}/>
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
