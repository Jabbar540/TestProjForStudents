// import { View, StyleSheet,Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
// import  { useState } from 'react';
// import React from 'react'
// import LayoutWrapper from '../components/LayoutWrapper'
// import { Stack } from 'expo-router'


// export default function CreateProduct() {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('')
// };

//   const handleSaveProduct = () => {
    
//     console.log('Product Title:', title);
//     console.log('Product Price:', price);
//     console.log('Product Description:', description);
//   };
//   const handleDiscard = () => {
    
//     setTitle('');
//     setPrice('');
//     setDescription('');
//   };
  

// export default function CreateProduct() {
//   return (
//     <LayoutWrapper backgroundColor={'orange'} headerText={""} textColor='white'>
//     <Stack.Screen
//       options={{
//         headerShown:false,
//         headerStyle: {
//           backgroundColor: 'orange',

//         },
//       }}
//       />
//       <ScrollView>
//       <View style={styles.head}>
//          <Text style={styles.text}>Add a Product</Text>
//        <Text style={styles.headline}>Title</Text>
//          <TextInput style={styles.input}
//              value={value}
//              onChangeText={text=>setValue(text)}
//              placeholder = "  Search"
//          />
//        <Text style={styles.headline}>Price</Text>
//          <TextInput style={styles.input}
//              value={value}
//              onChangeText={text=>setValue(text)}
//              placeholder= "  $"
//          />
//        <Text style={styles.headline}>Description</Text>
//         <TextInput style={styles.describe}
//             value={value}
//             onChangeText={text=>setValue(text)}
//             placeholder= "  Add a description"
                    
//         />
//         <TouchableOpacity>
//           <Text style={styles.btn}>Save Product</Text>
//         </TouchableOpacity>
//        <TouchableOpacity>
//           <Text style={styles.btn2}>Discard</Text>
//         </TouchableOpacity>
        
//       </View>
//       </ScrollView>
//     </LayoutWrapper>
    
//   )
// }


// const styles = StyleSheet.create({
//   head:{
//      backgroundColor:'white',
//      margin:30,
//      borderRadius:25,
//      height:700,
//     shadowColor: "white",
//     shadowOffset: {
//     	width: 0,
//     	height: 11,
//     },
//     shadowOpacity: 0.55,
//     shadowRadius: 14.78,
    
//     elevation: 22,
     
//   },
//   text:{
//     color:'black',
//     fontWeight:'bold',
//     fontSize:30,
//     margin:30,
//   },
//   input:{
//     height: 50,
//     width: "90%",
//     borderColor: "black",
//     borderWidth:2,
//     margin: 10,
//     borderRadius:10 ,
//     textAlign:'left',
//   },
//   describe:{
//     height: 100,
//     width: "90%",
//     borderColor: "black",
//     borderWidth:2,
//     margin: 10,
//     borderRadius:10 ,
//   },
//   headline:{
//     color:'black',
//     fontSize:20,
//     marginLeft:20,
//     fontWeight:'bold',
//   },
//   btn:{
//     backgroundColor:'orange',
//     borderRadius:10,
//     textAlign:'center',
//     padding:10,
//     margin:40,
//     fontSize:25,
//     fontWeight:'bold',
  
//   },
//   btn2:{
//     backgroundColor:'orange',
//     textAlign:'center',
//     fontSize:25,
//     fontWeight:'bold',
//     padding:10,
//     marginLeft:40,
//     marginRight:40,
//     borderRadius:10,
//   }
// })




import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TextInput,Image, TouchableOpacity } from 'react-native';
import LayoutWrapper from '../components/LayoutWrapper';
import { Stack } from 'expo-router'; 

export default function CreateProduct() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  

  return (
    <LayoutWrapper backgroundColor={'orange'} headerText={""} textColor='white'>
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
      />
      <ScrollView>       
        <View style={styles.head}>
          <Text style={styles.text}>Add a Product</Text>
          <Text style={styles.headline}>Title</Text>
        <View>
          <Image source={require('../assets/images/adaptive-icon.png')}style={styles.image}/>
        </View>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
            placeholder="Enter Title"
          />
          <Text style={styles.headline}>Price</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={text => setPrice(text)}
            placeholder="Enter Price"
          />
          <Text style={styles.headline}>Description</Text>
          <TextInput
            style={styles.describe}
            value={description}
            onChangeText={text => setDescription(text)}
            placeholder="Add a Description"
            
          />
          <TouchableOpacity>
            <Text style={styles.btn}>Save Product</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LayoutWrapper>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: 'white',
    margin: 30,
    borderRadius: 25,
    height: 700,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    elevation: 22,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    margin: 30,
  },
  image:{
    height:77,
    
        
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
  describe: {
    height: 100,
    width: "90%",
    borderColor: "black",
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
  },
  headline: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'orange',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    margin: 40,
    fontSize: 25,
    fontWeight: 'bold',
  },
  btn2: {
    backgroundColor: 'orange',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
  },
});
