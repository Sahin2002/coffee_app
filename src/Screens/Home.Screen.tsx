import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import Header from '../Componest/Header'
import Menu from'../../assets/vectors/menu.svg'
export const Home = () => {
  return (
    <View >
        <Header 
         left={<Menu />}
         title='Cart'
         right={<Image style={styles.image} source={{uri:'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Ggt-XwliwAO6QURi.jpg'}} />}
        style={styles.header}
        />
      <Text style={styles.text}>Home</Text>
    </View>
  )
}



const styles = StyleSheet.create({
   
    text:{
        color:"#fff"
    },
    header:{
         marginTop:20,
         paddingHorizontal:30
    },
    image:{
        width:30,
        height:30,
        borderRadius:30
    }
})