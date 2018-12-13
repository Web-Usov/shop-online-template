import axios from 'axios'
import {SERVER} from 'config'

export const getCategories = (cb) => {
  
    // axios.get(SERVER+'/api/categories',{      
		//   withCredentials: true,
    //   headers: {"Access-Control-Allow-Origin": "*"},
    // }).then(function (res){
    //     console.log(res)        
    //   })
    //   .catch(function (error) {
    //     if (error.response) {
    //       console.log(error.response.data);
    //       console.log(error.response.status);
    //       console.log(error.response.headers);
    //     } else if (error.request) {
    //       console.log(error.request);
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       console.log('Error', error.message);
    //     }
    //     console.log(error.config);
    //   });    

    fetch(SERVER+'/api/categories',{
      method:'GET',
      mode:'no-cors'
    })
    // .then(res => {
    //   res.json()
    // })
    .then(data => console.log(data)    )
    .catch(error => console.error(error))
}