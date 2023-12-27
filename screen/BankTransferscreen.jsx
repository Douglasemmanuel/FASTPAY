import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import { useLayoutEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import { TextInput } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
const BankTransferscreen = () => {
 
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
     <Text style={{fontWeight:'bold' , fontSize:20}}> Account transfer</Text>
     <Text style={{marginTop:10}}>Enter the receiver's details to make an instant transfer.</Text>
     </View>
     <View style={styles.curvedView}>
     
       <Text style={{color:'grey' , fontSize:12 ,  marginTop:6 , marginLeft:5}}>Account number..</Text>
       <TextInput style={{ marginLeft:20}}/>
     </View>
     <View style={{marginTop:10}}>
       <Text>Existing Bank</Text>
     </View>
   </View>
   </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </SafeAreaView>
  )
}

export default BankTransferscreen

const styles = StyleSheet.create({
  curvedView: {
    marginTop:10,
    // marginBottom:30,
    width: 380,
    height: 50,
    backgroundColor: 'white',
    // marginLeft:10,
    borderRadius: 5, // Adjust this value for the desired curve
  },
})