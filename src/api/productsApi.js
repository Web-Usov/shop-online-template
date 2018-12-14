import {
	SERVER
} from 'config'

export const getAllProducts = (cb) => {

	fetch(SERVER + '/api/products', {
			method: 'get',
			mode: 'cors'
		})
		.then(res => res.json())
		.then(data => cb(null, data))
		.catch(error => cb(error))
}

export const getProductsByCart = (data, cb) => {

	fetch(SERVER + '/api/products/category_id=' + data.id, {
			method: 'POST',
			mode: 'cors',
			// body:'article_id='+data.id,
		})
		// .then(res => res.json())
		.then(data => cb(null, data))
		.catch(error => cb(error))
}
