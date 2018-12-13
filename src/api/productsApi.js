import {SERVER} from 'config'

export const getAllProducts = (cb) => { 

  fetch(SERVER+'/api/products',{
    method:'get',
    mode:'cors'
  })
  .then(res => res.json())
  .then(data => cb(null,data))
  .catch(error => cb(error))
}