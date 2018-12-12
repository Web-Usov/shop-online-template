import {categoriesConst} from '../consts'

export const setCategories = (list,totalCount) => ({
    type:categoriesConst.SET_LIST,
    payload:{
        list,
        totalCount
    }
})