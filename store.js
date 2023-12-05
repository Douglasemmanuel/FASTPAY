import { legacy_createStore as createStore , combineReducers, applyMiddleware  } from "redux";
// import { combineReducers } from "redux";
// import Persist
import { OnboardReducer } from "./reducers/Onboardreducer";






const rootReducer =  combineReducers({
    onboard:OnboardReducer
})

const store = createStore(
    rootReducer
)

export default store