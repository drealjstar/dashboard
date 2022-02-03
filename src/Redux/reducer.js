import { GET_USERS } from './actionTypes'

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, userData: action.users }

        default:
            return state
    }


}