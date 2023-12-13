import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import CustomKeyboard from '../components/CustomKeyboard'
// import PincodeInput from 'react-native-pincode-input'
import PinCodeInput from 'react-native-pincode-input';
import { Keyboard } from 'react-native'
const Entrypinscreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
    const [pinCode, setPinCode] = useState('');
    const handleTextChange = (code) => {
      setPinCode(code);
    };
  
    const handleCodeFulfill = (code) => {
      console.log('PIN Code entered:', code);
      // Do something with the entered PIN code, e.g., validate it
    };
    const handleCustomKeyboardPress = (value) => {
      setPinCode(pinCode + value);
    };
  
  return (
    <SafeAreaView style={{flex:1}} >
    <View style={styles.container} onPress={Keyboard.dismiss()}>
      <Text>Please confirm your PIN to access your</Text>
      <Text>FastPay. Not you ? <Text style={{fontSize:15,fontWeight:'bold'}}>Log out</Text></Text>
     <View style={{marginTop:20}}>
     <SmoothPinCodeInput
        value={pinCode}
        onTextChange={handleTextChange}
        onFulfill={handleCodeFulfill}
        codeLength={6}
        cellSize={50}
        cellSpacing={10}
        autoFocus={true}
        textStyle={styles.pinCodeText}
        cellStyle={styles.pinCodeCell}
        
      />
     </View>
      <CustomKeyboard onPress={handleCustomKeyboardPress} />
    </View>
    </SafeAreaView>
  )
}

export default Entrypinscreen

const styles = StyleSheet.create({
  container: {
    marginTop:50
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  pinCodeText: {
    fontSize: 24,
  },
  pinCodeCell: {
    borderWidth: 2,
    borderRadius: 10,
  },
})