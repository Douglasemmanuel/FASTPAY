import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import utilis from '../core/utils'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import Input from '../components/Input'
import Button from "../components/Button"
import Tittle from "../components/Tittle"
import { Keyboard } from 'react-native'
import { useState } from 'react'
const Loginscreen = () => {
  const navigation = useNavigation()
  //to hide the header on the navigation tab
 useLayoutEffect(()=>{
     navigation.setOptions({
         headerShown:false
     })
 },[])
 function move(){
  navigation.navigate('signup')
}
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')
const [emailError , setEmailError] = useState('')
const [passwordError , setPasswordError] = useState('')
  return (
      <SafeAreaView style={{flex:1}}>
        <KeyboardAvoidingView behaviour='height' style={{flex:1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
          <View  style={{flex:1 , justifyContent:'center' , paddingHorizontal:20 }}>
          <Tittle text="Fastpay"  color='#202020' />
          <Input
         title='Email'
         value={email}
         setValue={setEmail}
         error={emailError}
         setError={setEmailError}
        />
        <Input 
        title='Password'
        value={password}
        setValue={setPassword}
        error={passwordError}
        setError={setPasswordError}
        secureTextEntry={true}
        />
        {/* <Input/> */}
        <Button title='Sign In'/>
     

        <Text style={{textAlign:'center' , marginTop:40}}>Don't have an account? <Text style={{color:'blue'}} onPress={move}>Sign Up</Text></Text>
        <Text style={{textAlign:'center' , marginTop:40}}>Forgot your password? <Text style={{color:'blue'}}  onPress={()=> navigation.navigate('forget')}>Rest now</Text></Text>
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
  )
}

export default Loginscreen

const styles = StyleSheet.create({})