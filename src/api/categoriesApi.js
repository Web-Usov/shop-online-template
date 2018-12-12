import axios from 'axios'
import {SERVER} from 'config'

export const getCategories = (cb) => {
    axios.get(SERVER+'/api/categories')
      .then(res => res.json())
      .then(data => cb(null,data))
      .catch(error => cb(error));    
}