import axios from 'axios';
import { GET_USERS, ADD_USERS, DELETE_USER, EDIT_USER } from './actionTypes';


export const getUsers = () => dispatch => {
    axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data').then(result => {
        dispatch({
            type: GET_USERS,
            users: result.data
        })
    }).catch(e => console.log(e))
}

export const addUser = (newData) => dispatch => {
    dispatch({
        type: ADD_USERS,
        user: newData
    })
}
export const deleteUser = (id) => dispatch => {
    dispatch({
        type: DELETE_USER,
        id
    })
}


export const updateUser = (user) => dispatch => {
    dispatch({
        type: EDIT_USER,
        user
    })
}