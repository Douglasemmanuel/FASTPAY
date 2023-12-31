import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
import UserImage from "../components/UserImage"
const Userinfo = () => {
    const [isMorning , setIsMorning] = useState(false);
    const [isAfternoon , setIsAfternoon] = useState(false);
    const [isEvening , setIsEvening] = useState(false);
    useEffect(()=>{
        //check if it was morning
        const checkIsMorning = ()=>{
            const currentDate = new Date();
            const currentHour = currentDate.getHours();

            //define the morning time range
            const morningStarHour = 0;
            const morningEndHour = 11;
            //check if the current hour is within the morning range
            const isMorningTime = currentHour >= morningStarHour && currentHour <=  morningEndHour;

            //update the state based on the result
            setIsMorning(isMorningTime)
        };
        //check if it was Afternoon
        const checkIsAfternoon = ()=>{
            const currentDate = new Date();
            const currentHour = currentDate.getHours();

            //define the afternoon time range
            const afternoonStarHour = 11;
            const afternoonEndHour = 17;
            //check if the current hour is within the afternoon range
            const isAfternoonTime = currentHour >= afternoonStarHour && currentHour <=  afternoonEndHour;

            //update the state based on the result
            setIsAfternoon(isAfternoonTime)
        };
        //check if it was Evening
        const checkIsEvening = ()=>{
            const currentDate = new Date();
            const currentHour = currentDate.getHours();

            //define the evening time range
            const eveningStarHour = 18;
            const eveningEndHour = 24;
            //check if the current hour is within the evening range
            const isEveningTime = currentHour >= eveningStarHour && currentHour <=  eveningEndHour;

            //update the state based on the result
            setIsEvening(isEveningTime)
        };
        checkIsMorning();
        checkIsAfternoon();
        checkIsEvening();
    },[])
  return (
    <SafeAreaView>
    <View style={{flexDirection:'row' }}>
    <View style={{flex:4}}>
      <Text style={styles.text}> Hello Doggie</Text>
      <View>
        {isMorning?(
        <Morning/>
        ):isAfternoon?(
            <Afternoon/>
        ):isEvening?(
            <Evening/>
        ):(
            <Text>Hey user</Text>
        )}
      </View>
    </View>
    <View style={{flex:1}} >
         <UserImage/>   
    </View>
    </View>
    </SafeAreaView>
  )
}
const Morning = ()=>{
    return (
        <Text style={styles.text1}>Good morning,Happy new day.</Text>
    )
}
const Afternoon = ()=>{
    return (
        <Text style={styles.text1}>Good Afternoon</Text>
    )
}
const Evening = ()=>{
    return (
        <Text style={styles.text1}>Good Evening,wash your hands</Text>
    )
}
export default Userinfo

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'black',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 16,
        borderRadius: 8,
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        marginLeft:15,
    },
    text1:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:15,
    },
    curvedView: {
        marginTop:10,
        width: 350,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 20, // Adjust this value for the desired curve
      },
})