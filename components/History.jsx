import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const History = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Recent Activities</Text>
      <View style={{flexDirection:'row'}}>
        <Text></Text>
        <Text></Text>
        <View style={{borderRadius:50 ,backgroundColor:'black' , width:90 , height:30 }}>
        <Text style={{color:'white' , paddingTop:3 , fontWeight:'bold', fontSize:20 , paddingLeft:5}}>{'\u20A6'}0.00</Text>
        </View>
      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({})