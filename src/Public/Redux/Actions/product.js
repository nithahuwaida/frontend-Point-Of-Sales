import axios from 'axios';
import {getJwt} from '../../../Components/Helpers/jwt';

export const getProduct = () => {
    const jwt = getJwt();
    return {
        type: 'GET_PRODUCT',
        payload: axios.get (
            'http://localhost:8080/products', 
            {headers: {'x-access-token': jwt}}
        ),
    };
};
export function postProduct(data){
    const jwt = getJwt();
    // console.log(jwt)
    // console.log(data)
    return {
        type: 'POST_PRODUCT',
        payload: axios.post (
            'http://localhost:8080/products',data,
            { headers: {"x-access-token" : jwt} },
        ),
    };
};
export function patchProduct(data){
    const jwt = getJwt();
    // console.log(jwt)
    return {
        type: 'PATCH_PRODUCT',
        payload: axios.patch (
            `http://localhost:8080/products/${data.id_product}`,data,
            { headers: {"x-access-token" : jwt} },
        ),
    };
};
export function deleteProduct(id){
    const jwt = getJwt();
    // console.log(jwt)
    console.log(id)
    return {
        type: 'DELETE_PRODUCT',
        payload: axios.delete (
            `http://localhost:8080/products/${id}`,
            { headers: {"x-access-token" : jwt} },
        ),
    };
};
