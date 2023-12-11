import AsyncStorage from "@react-native-async-storage/async-storage";

 export const storeToken = async(key, object)=>{
    try{
        await AsyncStorage.setItem(key,JSON.stringify(object))
    }catch(error){
        console.log('secure.set:', error)
    }
}


export const getToken = async(key)=>{
    try{
        const data =  await AsyncStorage.getItem(key)
        if(data !== undefined){
            return JSON.parse(data)
        }
    }catch(error){
        console.log('token', error)
    }
}


export const deleteToken = async (key)=>{
    try{
        await AsyncStorage.removeItem(key)
    }catch(error){
        console.log('secure.remove:', error)
    }
}