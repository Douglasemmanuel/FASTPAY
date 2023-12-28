import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homescreen from '../screen/Homescreen'
import Transferscreen from '../screen/Transferscreen'
import Historyscreen from '../screen/Historyscreen'
import Profilescreen from '../screen/Profilescreen'
import Cardscreen from '../screen/Cardscreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'

const homeName = "Home";
const cardName = "Card";
const profileName = "profile" ;
const historyName = "History";
const Tab = createBottomTabNavigator();
const Bottomnavigation = () => {
  return (
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route})=>({
      tabBarIcon:({focused , color , size})=>{
        let iconName;
        let rn = route.name;
        if (rn === homeName){
          iconName = focused ? 'home' :'home-outline';
        }else if(rn === cardName){
          iconName = focused ? 'card' :'card-outline';
        }else if(rn === profileName){
          iconName = focused ? 'settings' :'settings-outline';
        }else if (rn === historyName){
          iconName = focused ? 'home' :'home-outline';
        }
        return <Ionicons name={iconName} size={size} color={color}/>;
    },
    })}
    tabBarOptions={{
      activeTintColor:'blue',
      inactiveTintColor:'gray',
      labelStyle:{paddingBottom:5 , fontSize:10},
      style:{padding:10 , height:70}
   }}>
    <Tab.Screen name={homeName} component={Homescreen}/>
    <Tab.Screen name={cardName} component={Cardscreen}/>
    <Tab.Screen name={historyName} component={Historyscreen}/>
    <Tab.Screen name={profileName} component={Profilescreen}/>
    </Tab.Navigator>
  //  <Tab.Navigator
  //  initialRouteName="home"
  //   activeColor="#FF4433"
  //   inactiveColor="black"
  //   // activeTintColor
  
  //   barStyle={{ backgroundColor: 'white' }}
  //   tabBarOptions={{
  //      activeTintColor:'blue',
  //      inactiveTintColor:'gray',
  //   }}
  //   // onTabLongPress={{backgroundColor:'white'}}
  //   ScreenOptions={{ headerShown: false }}
  //  >
  //    <Tab.Screen 
  //     name="home" 
  //     component={Homescreen}
  //     options={{
  //       tabBarLabel: 'Home',
  //       // tabBarIcon: ({ color, size }) => (
  //       //   <MaterialCommunityIcons name="home" color={color} size={size} />
  //       // ),
  //       tabBarIcon: ({ color , size }) => (
  //         <MaterialCommunityIcons name="home" color={color} size={26} />
  //         // <Icon name="home" color={color} size={26} />
  //       ),
  //     }}
  //     />
      
  //       <Tab.Screen 
  //     name="card" 
  //     // options={{ headerShown: false }}
  //     component={Cardscreen}
  //     options={{
  //       tabBarLabel: 'Card',
  //       tabBarIcon: ({ color  }) => (
  //         <MaterialCommunityIcons name="account" color={color} size={26} />
  //         // <Icon name="person" color={color} size={26} />
  //       ),
  //       tabBarColor:"#FF4433"
  //       // headerShown: false
  //     }}
  //     />
  //      <Tab.Screen 
  //     name="history" 
  //     component={Historyscreen}
  //     options={{
  //       tabBarLabel: 'History',
  //       tabBarIcon: ({ color }) => (
  //         <MaterialCommunityIcons name="help-box" color={color} size={26} />
  //         //  <Icon name="help" color={color} size={26} />
  //       ),
  //       tabBarColor:"#FF4433"
  //     }}
  //     />
  //      <Tab.Screen 
  //     name="profile" 
  //     // options={{ headerShown: false }}
  //     component={Profilescreen}
  //     options={{
  //       tabBarLabel: 'Profile',
  //       tabBarIcon: ({ color  }) => (
  //         <MaterialCommunityIcons name="account" color={color} size={26} />
  //         // <Icon name="person" color={color} size={26} />
  //       ),
  //       tabBarColor:"#FF4433"
  //       // headerShown: false
  //     }}
  //     />
     
  //  </Tab.Navigator>

  )
}

export default Bottomnavigation

const styles = StyleSheet.create({})