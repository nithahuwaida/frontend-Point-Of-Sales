import axios from 'axios';
import {getJwt} from '../../../Components/Helpers/jwt';

export const getUser = () => {
    const jwt = getJwt();
    return {
        type: 'GET_USER',
        payload: axios.get (
            'http://localhost:8080/users', 
            {headers: {'x-access-token': jwt}}
        ),
    };
};

