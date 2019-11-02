import axios from 'axios';
import {getJwt} from '../../../Components/Helpers/jwt';

export const getCategory = () => {
    const jwt = getJwt();
    return {
        type: 'GET_CATEGORY',
        payload: axios.get (
            'http://localhost:8080/categories', 
            {headers: {'x-access-token': jwt}}
        ),
    };
};
export function postCategory(data){
    const jwt = getJwt();
    // console.log(jwt)
    // console.log(data)
    return {
        type: 'POST_CATEGORY',
        payload: axios.post (
            'http://localhost:8080/categories',data,
            { headers: {"x-access-token" : jwt} },
        ),
    };
};
export function patchCategory(data){
    const jwt = getJwt();
    // console.log(jwt)
    console.log(data)
    return {
        type: 'PATCH_CATEGORY',
        payload: axios.patch (
            `http://localhost:8080/categories/${data.id}`,data,
            { headers: {"x-access-token" : jwt} },
        ),
    };
};
export function deleteCategory(id){
    const jwt = getJwt();
    // console.log(jwt)
    // console.log(id)
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete (
            `http://localhost:8080/categories/${id}`,
            { headers: {"x-access-token" : jwt} },
        ),
    };
};
