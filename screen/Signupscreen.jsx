import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import utilis from '../core/utils'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { Keyboard } from 'react-native'
import Input from '../components/Input'
import Button from "../components/Button"
import Tittle from "../components/Tittle"

import { useState } from 'react'
const Signupscreen = () => {
  const navigation = useNavigation()
    //to hide the header on the navigation tab
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
    },[])

    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname] = useState('')
    const [email , setEmail] = useState('')
    const [password1 , setPassword1] = useState('')
    const [password2 , setPassword2] = useState('')

    const [firstnameError , setFirstnameError] = useState('')
    const [lastnameError , setLastnameError] = useState('')
    const [emailError , setEmailError] = useState('')
    const [password1Error , setPassword1Error] = useState('')
    const [password2Error , setPassword2Error] = useState('')
  return (
    <SafeAreaView style={{flex:1}}>
      <KeyboardAvoidingView behaviour='height' style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex:1 , justifyContent:'center' , paddingHorizontal:20 }}>
        <Text style={{textAlign:'center' , marginBottom:24 , fontSize:36 , fontWeight:'bold'}}>Sign Up</Text>
        <Input
             title='Email'
             value={email}
             setValue={setEmail}
             error={emailError}
             setError={setEmailError}
            />
            <Input
             title='First Name'
             value={firstname}
             setValue={setFirstname}
             error={firstnameError}
             setError={setFirstnameError}
             />
            <Input
             title='Last Name'
             value={lastname}
             setValue={setLastname}
             error={lastnameError}
             setError={setLastnameError}
             />
            <Input 
            title='Password'
            value={password1}
            setValue={setPassword1}
            error={password1Error}
            setError={setPassword1Error}
            secureTextEntry={true}
            />
            <Input 
            title=' Confirm Password'
            value={password2}
            setValue={setPassword2}
            error={password2Error}
            setError={setPassword2Error}
            secureTextEntry={true}
            />
             <Button title='Sign Up'/>

<Text style={{textAlign:'center' , marginTop:40}}>Already have an account?<Text style={{color:'blue'}} onPress={()=>navigation.goBack()}> Sign In</Text></Text>
        </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Signupscreen

const styles = StyleSheet.create({})