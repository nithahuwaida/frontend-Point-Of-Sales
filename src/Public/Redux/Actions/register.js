import axios from 'axios';

export function postRegister(data){
    return {
        type: 'POST_REGISTER',
        payload: axios.post(
            'http://localhost:8080/register',
            data,
            ),
    }
}