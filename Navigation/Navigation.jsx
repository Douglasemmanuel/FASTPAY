import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";
import Onboardscreen from "../screen/Onboardscreen";
import Loginscreen from "../screen/Loginscreen";
import Signupscreen from "../screen/Signupscreen";
import ForgetPassword from "../screen/ForgetPassword";
import Transferscreen from "../screen/Transferscreen";
import Bottomnavigation from "./Bottomnavigation";
import Splashscreen from "../screen/Splashscreen";
import Entrypinscreen from "../screen/Entrypinscreen";
import OtherScreeen from "../screen/OtherScreeen";
import Cardscreen from "../screen/Cardscreen";
const Stack = createStackNavigator()
export default function Navigation(){
    const onboard = useSelector((state)=> state.onboard)
    const authenticated = useSelector((state)=> state.authenticated)
    return (
        <NavigationContainer>
            {/* <StatusBar barstyle='dark-content'/> */}
            <Stack.Navigator initialRouteName='intro'  screenOptions={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black' }}>
                {!onboard?(
                   <>
                    <Stack.Screen  name='onboard' component={Onboardscreen}/>
                    <Stack.Screen name='intro' component={Splashscreen} />
                    
                   </> 
                ):!authenticated? (
                    <>
                    <Stack.Screen name='intro' component={Splashscreen} />
                    <Stack.Screen  name='entrypin' component={Entrypinscreen}/>
                <Stack.Screen name='login' component={Loginscreen}/>
                <Stack.Screen name='signup' component={Signupscreen}/>
                <Stack.Screen name='card' component={Cardscreen} />
                <Stack.Screen  name='home' component={Bottomnavigation}  options={{headerShown:false}}/>
                <Stack.Screen name='forget' component={ForgetPassword}/>
                <Stack.Screen  name='transfer' component={Transferscreen}/>
                <Stack.Screen name='other'  component={OtherScreeen}/>
                </>
                ):(
                    <>
                     <Stack.Screen  name='entrypin' component={Entrypinscreen}/>
                    <Stack.Screen name='intro' component={Splashscreen} />
                    {/* <Stack.Screen  name='transfer' component={Transferscreen}/>
                    <Stack.Screen  name='home' component={Bottomnavigation}/> */}
                    <Stack.Screen />
                    </>
                )
            }
            </Stack.Navigator>
        </NavigationContainer>
    )
}