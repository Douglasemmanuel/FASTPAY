import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback  , TouchableOpacity} from 'react-native'
import { Image } from 'react-native'
const UserImage = () => {
  return (
  <TouchableOpacity>
     <View style={styles.container}>
      {/* <Text>UserImage</Text> */}
      <Image style={{width:50 , height:50}}/>
    </View>
  </TouchableOpacity>
  )
}

export default UserImage

const styles = StyleSheet.create({

  container: {
    // backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    // padding: 7,
    borderRadius: 35,
},

})