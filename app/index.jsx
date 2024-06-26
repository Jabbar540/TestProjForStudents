import { FlatList, Image, Text, View, } from 'react-native';
import LayoutWrapper from "../components/LayoutWrapper";
import Product from "../components/Product";

const data=[
  {
    image:require("../assets/images/Product.png"),
    title:'Sheos',
    subtitle:'45',
    id:'1'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Choclate',
    subtitle:'55',
    id:'2'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Mouse',
    subtitle:'321',
    id:'3'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Milk',
    subtitle:'321',
    id:'4'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Apple',
    subtitle:'13',
    id:'5'
  },
]

export default function Home() {
  return (
    <LayoutWrapper backgroundColor={'green'} headerText={"Home"} textColor='white'>
      <FlatList
      data={data}
      keyExtractor={(item,index)=>item.id}
      renderItem={({item,index})=>(
        <Product data={item}/>
      )}
      />
    </LayoutWrapper>
  );
}