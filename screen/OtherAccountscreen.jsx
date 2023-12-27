import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
import { TextInput } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Image } from 'react-native'
const OtherAccountscreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])
function move(){
  navigation.goBack()
}
function transfer(){
  navigation.navigate('amount')
}
  return (
   <SafeAreaView style={{flex:1}}>
     <KeyboardAvoidingView  behaviour='height' style={{flex:1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={{marginLeft:15}}>
     <View style={{flexDirection:'row'}} onPress={move}>
            <TouchableOpacity style={{marginTop:5  }} onPress={move}>
            <FontAwesomeIcon icon={faArrowLeft} size={20}  />
            </TouchableOpacity>
      </View>
      <View style={{marginTop:10}}>
      <Text style={{fontWeight:'bold' , fontSize:20}}>Fast pay Account transfer</Text>
      <Text style={{marginTop:10}}>Enter the receiver's details to make an instant transfer.</Text>
      </View>
      <View style={styles.curvedView1}>
      
        <Text style={{color:'grey' , fontSize:12 ,  marginTop:6 , marginLeft:5}}>Account number..</Text>
        <TextInput style={{ marginLeft:20}}/>
      </View>
      <View style={{marginTop:100}}>
       <Text>Existing Fastpay User</Text>
       <View style={styles.curvedView}>
        <TouchableOpacity onPress={transfer}>
          <View style={{flexDirection:'row' , marginTop:15}}>
          <View style={{flex:1  , marginTop:-12 }}>
            <Image style={{ borderRadius: 50,width:50 , height:50 }} source={require('../images/mansmile.jpg')}/>
          </View>
          <Text style={{flex:4}}>Doggie</Text>
          <View style={{flex:1}}><FontAwesomeIcon icon={faChevronRight} /></View>
          </View>
        </TouchableOpacity>
        </View>
     </View>
    </View>
    </TouchableWithoutFeedback>
     </KeyboardAvoidingView>
   </SafeAreaView>
  )
}

export default OtherAccountscreen

const styles = StyleSheet.create({
  curvedView: {
    marginTop:10,
    // marginBottom:30,
    width: 380,
    height: 50,
    // backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
  },
  curvedView1: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 5,
    // padding: 12,
    marginTop:10,
    // marginBottom:30,
    width: 380,
    height: 55,
    // backgroundColor: 'white',
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
    padding: 7,
    borderRadius: 35,
},
})