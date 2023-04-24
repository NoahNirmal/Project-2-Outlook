import {combineReducers} from "redux"
import { reducer } from "./Reducer"

const rootreducer = combineReducers({
    reducer : reducer
})

export default rootreducer