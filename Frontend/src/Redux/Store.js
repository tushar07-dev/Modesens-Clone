import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import reducer from "./PagesRedux/reducer"

const RootReducers=combineReducers({products:reducer})

export const Store=legacy_createStore(RootReducers,applyMiddleware(thunk))