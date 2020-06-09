import { combineReducers } from 'redux'
import { AuthReducers} from './AuthReducers'

const reducers = combineReducers ({
    Auth: AuthReducers
})

export default reducers