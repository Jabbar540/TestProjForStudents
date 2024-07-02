import { useState } from 'react';
import { Button, Image, View, StyleSheet, ScrollView, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const [image, setImage] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection:true
    });

    if (!result.canceled) {
    //   setImage(result.assets);
      setImage([...image,...result.assets]);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <ScrollView horizontal={true}>
      {image.length > 0 && image.map((i)=>(
          <Image source={{ uri: i.uri }} style={styles.image} />
        )) 
    }
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:Platform.OS=='ios'? 60:0
  },
  image: {
    width: 200,
    height: 200,
  },
});
