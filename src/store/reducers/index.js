import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'
import {combineReducers} from 'redux'

export default combineReducers({
    categories:categoriesReducer,
    products:productsReducer,
})