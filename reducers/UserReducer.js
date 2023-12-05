import { USER_LOGIN, USER_LOGOUT , USER_REGISTER } from "../constant/Userconstant";


const initialState = {
    user:null,
    authenticated:false
}

export const UserLoginReducer =(state=initialState , action) =>{
    switch(action.type){
        case USER_LOGIN:
            return{
                ...state,
                user:action.payload,
                authenticated:true,
            };
        
        case USER_LOGOUT:
            return {
                ...state,
                user:null,
                authenticated:false
            };
        case USER_REGISTER:
            return{
                ...state

            };
        default:
                return state;
    }
}