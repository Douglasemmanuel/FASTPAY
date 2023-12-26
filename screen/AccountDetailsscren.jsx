import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useState , useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import {faClipboard}  from "@fortawesome/free-solid-svg-icons/faClipboard"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
const AccountDetailsscren = () => {
  const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  return (
  <SafeAreaView>
      <View style={{marginLeft:15}}>
      <View style={{flexDirection:'row'}} onPress={move}>
            <TouchableOpacity style={{marginTop:5  , marginLeft:15}} onPress={move}>
            <FontAwesomeIcon icon={faArrowLeft} size={30}  />
            </TouchableOpacity>
            <View style={{marginLeft:10}}>
            <Text style={{fontWeight:'bold' , fontSize:30}}>Payments</Text>
            </View>
            
        </View>
    </View>
  </SafeAreaView>
  )
}
const Account=()=>{
  return (
    <View>
      <Text style={{fontWeight:'bold' , fontSize:30 , color:'black'}}>Account Credentials</Text>
      <View style={styles.curvedView}>
       <View style={{marginLeft:10}}>
       <View style={{flexDirection:'row'}}>
       <Text style={{color:'grey' , flex:3 , fontSize:16}}>Beneficiary</Text>
       <TouchableOpacity style={{flex:1}} >
        <View style={styles.container4} ><FontAwesomeIcon icon={faClipboard} size={15} /></View>
         </TouchableOpacity>
       </View>
        <Text style={{fontSize:15}}>Doggie</Text>
        <View>
          <Text style={{color:'grey' ,  fontSize:16}}>Account number</Text>
          <Text style={{fontSize:15}}>0123456789</Text>
        </View>
       </View>
      </View>
    </View>
  )
}
const history=()=>{
  return (
    <View>
    <View style={{flexDirection:'row'}}>
    <Text style={{fontWeight:'bold' , fontSize:30 , color:'black'}}>Account History</Text>

    </View>
      <View style={styles.curvedView}>
       <View style={{marginLeft:10}}>
       <View style={{flexDirection:'row'}}>
       <Text style={{color:'grey' , flex:3 , fontSize:16}}>25 December 2023</Text>
       </View>
        <View>
          <Text style={{color:'grey' ,  fontSize:16}}>Account number</Text>
          <Text style={{fontSize:15}}>0123456789</Text>
        </View>
       </View>
      </View>
    </View>
  )
}
export default AccountDetailsscren

const styles = StyleSheet.create({
  curvedView: {
    marginTop:10,
    width: 380,
    height: 120,
    backgroundColor: 'white',
    marginLeft:15,
    borderRadius: 10, // Adjust this value for the desired curve
  },
  container4: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5,
    borderRadius: 50,
    width: 24,
    height: 24,
    marginLeft:5,
  },
})