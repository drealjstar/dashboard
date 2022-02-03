import axios from 'axios';
import {GET_USERS} from './actionTypes';
export const getUsers = () => dispatch => {

axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data').then(result => {
    dispatch({
        type: GET_USERS,
        users: result.data
    })
}).catch(e => console.log(e))
}