import React from 'react'
import {  Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row", 
        width:"100%"
    },
    leftIcon:{
        display:"flex", 
        margin:10, 
        justifyContent:"center"
    },
    text:{
        flex:5,
        padding:5, 
        fontSize:20
    }
})

export function ViewHeader({navigation:{goBack}, title}){
    return (
      <View style={styles.container}>
        <View style={styles.leftIcon}>
          <FontAwesome 
              name="arrow-left" 
              size={30} 
              color={"red"}
              onPress={()=>goBack()}
          /> 
        </View>
        <Text style={styles.text} numberOfLines={5} >{title}</Text>
      </View>
    )
}
