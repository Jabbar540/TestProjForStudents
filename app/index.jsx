import { Text, } from 'react-native';
import LayoutWrapper from "../components/LayoutWrapper";
import CommonButton from "../components/CommonButton";
import { Link } from 'expo-router';
export default function Home() {
  return (
    <LayoutWrapper backgroundColor={'green'} headerText={"Headeer Text"} textColor='white'>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Link href={{pathname:"Details"}} >Go to detaails</Link>
      <CommonButton>
        <Text>gggahgajgdhjasgdjasdgh</Text>
      </CommonButton>
    </LayoutWrapper>
  );
}