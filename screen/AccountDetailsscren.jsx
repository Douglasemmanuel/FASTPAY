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
import {faCircleChevronRight} from "@fortawesome/free-solid-svg-icons/faCircleChevronRight"
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
      <Card/>
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
  const navigation = useNavigation()
  function move(){
    navigation.navigate('history')
  }
  return (
    <View>
    <View style={{flexDirection:'row' , marginLeft:10}}>
    <Text style={{fontWeight:'bold' , fontSize:20 , color:'black' , flex:4}}>Account History</Text>
    <Text style={{color:'grey' , fontSize:15 , flex:1 , marginTop:5}}>See more</Text>
    <TouchableOpacity style={{flex:1 , marginTop:5}} onPress={move}><FontAwesomeIcon icon={faChevronRight} size={18}/></TouchableOpacity>
    </View>
      <View style={styles.curvedView}>
       <View style={{marginLeft:10 , marginTop:10}}>
       <View style={{flexDirection:'row'}}>
       <Text style={{color:'grey' , flex:3 , fontSize:16}}>25 December 2023</Text>
       </View>
       <View style={{flexDirection:'row' , marginLeft:10, marginTop:10 }}>
      <View style={{flex:1}}>
      <View style={styles.container1}>
      <FontAwesomeIcon icon={faCircleChevronRight} size={25}  color='red' />
      </View>
      </View>
       <View style={{flex:2.5}}>
       <Text style={{color:'black' ,fontSize:18 , marginTop:2}}>Doggie</Text>
        <Text style={{fontSize:12, color:'grey' , marginTop:5}}>Transfer</Text>
       </View>
      
       <View style={{flex:2}}>
        <Text style={{color:'red' , fontSize:16 , fontWeight:'bold'}}>1000.00</Text>
       <Text  style={{color:'grey' , paddingTop:3 , fontSize:12 , paddingLeft:5}}> From .1823</Text>
       </View>
      </View>
       </View>
      </View>
    </View>
  )
}
const Card =()=>{
  const navigation = useNavigation()
  function move(){
    navigation.navigate('card')
  }
  return (
    <View>
    <Text style={{fontWeight:'bold' , fontSize:20 , color:'black' }}>Card</Text>
   
      <View style={styles.curvedView2}>
       <View style={{marginLeft:10 , marginTop:2}}>
       <View style={{flexDirection:'row' , marginLeft:10, marginTop:10 }}>
      <View style={{flex:1}}>
     
      </View>
       <View style={{flex:2.5}}>
       <Text style={{color:'black' ,fontSize:18 , marginTop:2}}>Card</Text>
        <Text style={{fontSize:12, color:'grey' , marginTop:5}}>Debit card</Text>
       </View>
      
       <View style={{flex:2 , marginTop:15}}>
       <FontAwesomeIcon icon={faChevronRight} size={15}  />
       </View>
      </View>
       </View>
      </View>
    </View>
  )
}
export default AccountDetailsscren

const styles = StyleSheet.create({
  curvedView: {
    // marginTop:10,
    width: 350,
    height: 100,
    backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
  },
  curvedView2: {
    // marginTop:10,
    width: 350,
    height: 60,
    backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
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
    padding: 12,
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