import { combineReducers } from "redux";
import { reducerDataShoes } from "./storeDataShoe";
import {rootReducerStorePage} from './StorePageReducer'

export const RootReducer = combineReducers({
    rootReducerStorePage,
    reducerDataShoes
})