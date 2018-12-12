import categorieReducer from './categorieReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    categories:categorieReducer,
})