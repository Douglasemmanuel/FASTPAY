import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableWithoutFeedback  , TouchableOpacity} from 'react-native'
import { Image } from 'react-native'
const UserImage = () => {
  return (
  <TouchableWithoutFeedback>
     <View style={styles.container}>
      {/* <Text>UserImage</Text> */}
      <Image style={{ borderRadius: 50,width:50 , height:50}} source={require('../images/mansmile.jpg')}/>
    </View>
  </TouchableWithoutFeedback>
  )
}

export default UserImage

const styles = StyleSheet.create({

  container: {
    // backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // padding: 7,
    // borderRadius: 50,
    // height:20,
    // width:20,
},

})