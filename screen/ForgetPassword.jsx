import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from '../components/Input'
import Button from "../components/Button"
import Tittle from "../components/Tittle"
import { Keyboard } from 'react-native'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
const ForgetPassword = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
    const [email , setEmail] = useState('')
    const [emailError , setEmailError] = useState('')
  return (
    <SafeAreaView style={{flex:1}}>
        <KeyboardAvoidingView behaviour='height' style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View  style={{flex:1 ,paddingHorizontal:10 }}>
        {/* <Tittle text="Forget Password"  color='#202020' /> */}
        <Text style={{textAlign:'center' , marginBottom:24 , fontSize:30 , fontWeight:'bold'}}>Forget Password</Text>
          <Input
         title='Email'
         value={email}
         setValue={setEmail}
         error={emailError}
         setError={setEmailError}
        />
        <Button title='Summit'/>
        </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})