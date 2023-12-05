import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async(key, object)=>{
    try{
        await AsyncStorage.setItem(key,JSON.stringify(object))
    }catch(error){
        console.log('secure.set:', error)
    }
}


const getToken = async(key)=>{
    try{
        const data =  await AsyncStorage.getItem(key)
        if(data !== undefined){
            return JSON.parse(data)
        }
    }catch(error){
        console.log('secure.get:', error)
    }
}

