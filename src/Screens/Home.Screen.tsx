import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Home = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    text:{
        color:"#fff"
    }
})