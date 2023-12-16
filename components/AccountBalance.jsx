import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faEye} from "@fortawesome/free-solid-svg-iconsfaEye"
import {faEyeSlash} from "@fortawesome/free-solid-svg-iconsfaEyeSlash"
const AccountBalance = () => {
    const [vissible , setVissible] = useState(true)
    const toggleComponent =()=>{
      setVissible(!vissible)
    }
  return (
    <View style={styles.curvedView}>
    {vissible ? <Show/> : <Hide/> }
    <TouchableOpacity onPress={toggleComponent}>
      {vissible?<FontAwesomeIcon icon={faEye} /> :<FontAwesomeIcon icon={faEyeSlash} />}
    </TouchableOpacity>
    </View>
  )
}
const Show =()=>{
    return (
        <View>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'bold' , flex:1}}>{'\u20A6'} 50000.00</Text>
         <View style={{flex:1}}></View>
         </View>
    
          <Text>Book balance <Text  style={{fontWeight:'bold' , fontSize:20}}>50000.00</Text></Text>
        </View>
    )
}
const Hide=()=>{
    return (
        <View>
         <View style={{flexDirection:'row'}}>
         <Text style={{fontWeight:'bold' , flex:1}}>000</Text>
         <View style={{flex:1}}></View>
         </View>
    
          <Text>Book balance <Text style={{fontWeight:'bold' , fontSize:20}}>...</Text></Text>
        </View>
      )
}
export default AccountBalance

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    borderRadius: 8,
},
container1: {
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  padding: 7,
  borderRadius: 35,
},
curvedView: {
    width: 350,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 20, // Adjust this value for the desired curve
  },
})