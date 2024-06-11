import { StyleSheet, Text, View,Image ,ViewStyle,StyleProp} from 'react-native'
import React, { ReactNode } from 'react'
import {fontsize} from'../theme/fontsize'
import { colors } from '../theme/colors'
interface IHeader{
    left?:ReactNode,
    title?:string,
    right?:ReactNode,
    style?:StyleProp<ViewStyle>

}
const Header:React.FC<IHeader> = ({left,title,right,style}) => {
    
    
  return (
    <View  style={[styles.root,style]}>
        <View  style={{flexGrow:right ? 0:0.5}}>
        {left}
        </View>
        <View style={{flexGrow:right ?0:0.6}}>
        <Text style={styles.text}>{title}</Text>
        </View>
        
        <View >
            {right}
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    root:{
       
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        
        
    },
    text:{
        fontSize:fontsize.text2,
        fontFamily:'Poppins-SemiBold',
        fontWeight:'600',
        color:colors.white
        
    },
   
   
})