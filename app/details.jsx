import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();
  console.log(params)

  const handleRoute = () => {
    router.push('/showImage');
  };

  return (
    <View style={styles.container}>
      <Text>
        Update the title
      </Text>
      <Link href={{pathname:'showImage'}}>Go to showImage page</Link>
      <Button title="Go to showImage page by routing" onPress={handleRoute} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
