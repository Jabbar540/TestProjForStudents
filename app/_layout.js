import { Stack } from 'expo-router/stack';
import { RootSiblingParent } from 'react-native-root-siblings';

export default function Layout() {
  return(
      <RootSiblingParent>
        <Stack screenOptions={{headerShown:false}}/>
      </RootSiblingParent>
  )
}
