import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
const News = () => {
    const navigation = useNavigation()
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginLeft:9 , marginTop:10 , flexDirection:'row' }}>
      <View style={styles.curvedView}>

      <Text style={{textAlign:'center'}}>News</Text>
      </View>
      <View style={styles.curvedView}>

      <Text style={{textAlign:'center'}}>News</Text>
      </View>
    </ScrollView>
  )
}

export default News

const styles = StyleSheet.create({
  curvedView: {
    marginTop:10,
    width: 280,
    height: 150,
    backgroundColor: 'white',
    marginLeft:6,
    // padding:10,
    borderRadius: 20, // Adjust this value for the desired curve
  },
})