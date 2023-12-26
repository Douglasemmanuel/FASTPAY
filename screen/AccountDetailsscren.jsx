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
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet"
const AccountDetailsscren = () => {
  const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  function move(){
    navigation.goBack()
  }
  return (
  <SafeAreaView>
      <View style={{marginLeft:15}}>
      <View style={{flexDirection:'row'}} onPress={move}>
            <TouchableOpacity style={{marginTop:5  , marginLeft:15}} onPress={move}>
            <FontAwesomeIcon icon={faArrowLeft} size={30}  />
            </TouchableOpacity>
            <View style={{marginLeft:10}}>
            <Text style={{fontWeight:'bold' , fontSize:30}}>Account Details</Text>
            </View>
      </View>
      <Account/>
      <History/>
    </View>
  </SafeAreaView>
  )
}
const Account=()=>{
  return (
    <View >
      <Text style={{fontWeight:'bold' , fontSize:20 , color:'black' , marginLeft:10}}>Account Credentials</Text>
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
const History=()=>{
  return (
    <View>
    <View style={{flexDirection:'row' , marginLeft:10}}>
    <Text style={{fontWeight:'bold' , fontSize:20 , color:'black' , flex:3 }}>Account History</Text>
    <TouchableOpacity style={{flex:1 , marginTop:5}}><Text style={{color:'grey' , fontSize:15}}>See more</Text><FontAwesomeIcon icon={faChevronRight} size={20}/></TouchableOpacity>
    </View>
      <View style={styles.curvedView}>
       <View style={{marginLeft:10 , marginTop:10}}>
       <View style={{flexDirection:'row'}}>
       <Text style={{color:'grey' , flex:3 , fontSize:16}}>25 December 2023</Text>
       </View>
       <View style={{flexDirection:'row' , marginLeft:10, marginTop:10 }}>
        <View style={styles.container1}><FontAwesomeIcon icon={faWallet} size={30} /></View>
        {/* <Text style={{fontWeight:'bold' , fontSize:20 }}>Fast Pay</Text> */}
       <View style={{  marginLeft:15}}>
       <Text style={{color:'black' ,fontSize:18 , marginTop:2}}>Doggie</Text>
        <Text style={{fontSize:12, color:'grey' , marginTop:5}}>Transfer</Text>
       </View>
        {/* <View style={{borderRadius:50 ,backgroundColor:'black' , width:50 , height:20  , marginLeft:100 }}>
        <Text style={{color:'white' , paddingTop:3 , fontWeight:'bold', fontSize:12 , paddingLeft:5}}>{'\u20A6'}0.00</Text>
        </View> */}
        <Text  style={{color:'grey' , paddingTop:3 , fontSize:12 , paddingLeft:5}}> From .1823</Text>
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
    width: 350,
    height: 120,
    backgroundColor: 'white',
    marginLeft:10,
    borderRadius: 10, // Adjust this value for the desired curve
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
    padding: 9,
    borderRadius: 35,
    height:50,
    width:50,
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