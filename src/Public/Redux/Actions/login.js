import axios from 'axios';

export function postLogin(data){
    return {
        type: 'POST_LOGIN',
        payload: axios.post(
            'http://localhost:8080/login',
            data,
            ),
    }
}