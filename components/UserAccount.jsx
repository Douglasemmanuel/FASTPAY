import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
// import Clipboard from '@react-native-clipboard/clipboard'
// import * as Clipboard from 'expo-clipboard';
const UserAccount = () => {
    const textToCopy = 'Hello Fast Pay User'

    // const handleCopyText =  async ()=>{
    //   // await Clipboard.setString(textToCopy)
    //   await Clipboard.setStringAsync(textToCopy);
    //   alert(`Text "${textToCopy}" copied to clipboard.`);
    // };
  return (
    <View >
      <Text>{textToCopy}</Text>
      {/* <TouchableOpacity onPress={handleCopyText}>
        <Text>Copy</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default UserAccount

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontSize:20,
    },
    text:{
        fontSize:18,
        marginBottom:20,
    },
})