import { FlatList, Image, Text, View, } from 'react-native';
import LayoutWrapper from "../components/LayoutWrapper";
import Product from "../components/Product";
import { useRouter } from 'expo-router';

const data=[
  {
    image:require("../assets/images/Product.png"),
    title:'Sheos',
    subtitle:'45',
    descriptions:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    id:'1'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Choclate',
    subtitle:'55',
    descriptions:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    id:'2'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Mouse',
    subtitle:'321',
    descriptions:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    id:'3'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Milk',
    subtitle:'321',
    descriptions:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    id:'4'
  },
  {
    image:require("../assets/images/Product.png"),
    title:'Apple',
    subtitle:'13',
    descriptions:"orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu",
    id:'5'
  },
]

export default function Home() {
  const route=useRouter()
  return (
    <LayoutWrapper backgroundColor={'green'} headerText={"Home"} textColor='white'>
      <FlatList
       data={data}
       keyExtractor={(item)=>item.id}
       renderItem={({item})=>(
        <Product data={item}/>
       )}
      />
    </LayoutWrapper>
  );
}