import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useRef, useEffect } from 'react'
import { Animated, Easing } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import getToken from "../Services/AsyncStorage"
import { Platform } from 'react-native'
import { useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet"
const Splashscreen = () => {
  const translateY = useRef(new Animated.Value(0)).current
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
  const moveText = ()=>{
   Animated.loop(
    Animated.sequence([
      Animated.timing(translateY, {
        toValue:-50, //move up
        duration:2000,
        easing:Easing.linear,
        useNativeDriver:true,
      }),
      Animated.timing(translateY, {
        toValue:0, //move down
        duration:2000,
        easing:Easing.linear,
        useNativeDriver:true,
      }),
    ])
   ).start();
  };
  useEffect(()=>{
    moveText();
    setTimeout(()=>{
      handleGetToken();
  },5000);
  },[]);
  const navigation = useNavigation()

    

  // useEffect(()=>{
  //     setTimeout(()=>{
  //         handleGetToken();
  //     },5000);
  // },[])

  const handleGetToken = async ()=>{
    navigation.replace('login')
      // const token = await getToken()
      // if(token){
      //     navigation.replace('home')
      // }else{
      //     navigation.replace('login')
      // }
  }
  return (
    <SafeAreaView>
    <View>
      <Animated.Text
      style={{
        transform:[{translateY}],
        fontSize:30,
        textAlign:'center',
        marginTop:300,
        fontWeight:'bold',
      }}
      >
       {/* <View><FontAwesomeIcon icon={faWallet} /></View> */}
         Fastpay
        </Animated.Text>
    </View>
    </SafeAreaView>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})