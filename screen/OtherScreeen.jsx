import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faWallet} from "@fortawesome/free-solid-svg-icons/faWallet"
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane"
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons/faBuildingColumns"
import {faPlus}  from "@fortawesome/free-solid-svg-icons/faPlus"
import {faArrowLeft}  from "@fortawesome/free-solid-svg-icons/faArrowLeft"
import {faCaretLeft}  from "@fortawesome/free-solid-svg-icons/faCaretLeft"
import {faChevronRight}  from "@fortawesome/free-solid-svg-icons/faChevronRight"
import {faTicket} from "@fortawesome/free-solid-svg-icons/faTicket"
import {faTv} from "@fortawesome/free-solid-svg-icons/faTv"
import {faPlugCircleBolt} from "@fortawesome/free-solid-svg-icons/faPlugCircleBolt"
import {faMobile}  from "@fortawesome/free-solid-svg-icons/faMobile"
import {faChartSimple} from "@fortawesome/free-solid-svg-icons/faChartSimple"
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons/faGraduationCap"
import {faBaseball} from "@fortawesome/free-solid-svg-icons/faBaseball"
import {faPlaceOfWorship} from "@fortawesome/free-solid-svg-icons/faPlaceOfWorship"
import {faPlane} from "@fortawesome/free-solid-svg-icons/faPlane"


const OtherScreeen = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerShown:false
      })
  },[])
  function move(){
    // navigation.goBack()
    navigation.canGoBack()
    // navigation.navigate('home')
  }
  return (
    <SafeAreaView>
        <View>
        <View style={{flexDirection:'row'}} onPress={move}>
            <View style={{marginTop:5  , marginLeft:15}} onPress={move}>
            <FontAwesomeIcon icon={faArrowLeft} size={30}  />
            </View>
            <View style={{marginLeft:10}}>
            <Text style={{fontWeight:'bold' , fontSize:30}}>Payments</Text>
            </View>
            
        </View>
      <View style={styles.curvedView}>
      <TouchableOpacity style={{ flexDirection:'row'}} >
        <View style={{flex:1}}>
      <View style={styles.container1} ><FontAwesomeIcon icon={faMobile} size={25}/></View>
        </View>
      <Text style={styles.text} > Buy Airtime</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
        <View style={{flex:1}}>
      <View style={styles.container1} ><FontAwesomeIcon icon={faChartSimple} size={25}/></View>
        </View>
      <Text style={styles.text} > Buy Data</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
        <View style={{flex:1}}>
      <View style={styles.container1} ><FontAwesomeIcon icon={faTv} size={25}/></View>
        </View>
      <Text style={styles.text} >Cable TV</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
     <View style={{flex:1}}> 
     <View style={styles.container1} ><FontAwesomeIcon icon={faPlugCircleBolt} size={25}/></View>
     </View>
      <Text style={styles.text} >Electricity</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
     <View style={{flex:1}}> 
     <View style={styles.container1} ><FontAwesomeIcon icon={faTicket} size={25}/></View>
     </View>
      <Text style={styles.text} >Events,Entertainment and Ticketing</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
     <View style={{flex:1}}> 
     <View style={styles.container1} ><FontAwesomeIcon icon={faPlaceOfWorship} size={25}/></View>
     </View>
      <Text style={styles.text} >Religious Institution & NGO</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
     <View style={{flex:1}}> 
     <View style={styles.container1} ><FontAwesomeIcon icon={faGraduationCap} size={25}/></View>
     </View>
      <Text style={styles.text} >School & Professional Bodies</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
     <View style={{flex:1}}> 
     <View style={styles.container1} ><FontAwesomeIcon icon={faBaseball} size={25}/></View>
     </View>
      <Text style={styles.text} >Sports and Gaming</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection:'row'}} >
     <View style={{flex:1}}> 
     <View style={styles.container1} ><FontAwesomeIcon icon={faPlane} size={25} /></View>
     </View>
      <Text style={styles.text} >Travels & Transportation /Logistics</Text>
      <View style={styles.container2}><FontAwesomeIcon icon={faChevronRight} size={20}/></View>
      </TouchableOpacity>
     
    </View>
    </View>
    </SafeAreaView>
  )
}

export default OtherScreeen

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 12,
        borderRadius: 50,
        width: 50,
        height: 50,
       
      
      },
      container2: {
        // backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 3,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
        marginTop:15,
        flex:1,
        // marginLeft:200,
        // borderRadius: 50,
        // width: 50,
        // height: 50,
      
      },
      text:{
        marginTop:15,
        marginLeft:10,
        fontWeight:90,
        fontSize:15,
        flex:5,
      },
      curvedView: {
        //   width: 380,
        //   height: 90,
        //   backgroundColor: 'white',
          marginLeft:15,
          marginTop:40,
        //   justifyContent:'center',
        //   alignItems:'center' ,
          flexDirection:'column' ,  
          // rowGap:10,
          rowGap:20,
        //   borderRadius: 20, // Adjust this value for the desired curve
          borderTopRightRadius: 0,  // Set to 0 to remove right top border radius
          borderBottomRightRadius: 0,
          borderBottomLeftRadius:0,
          borderTopLeftRadius:0,
        },
})