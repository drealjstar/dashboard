import { GET_USERS,ADD_USERS, DELETE_USER } from './actionTypes'

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...state, userData: action.users }

        case ADD_USERS:
            return {...state, userData: [ action.user, ...state.userData]}
        
            case DELETE_USER:
                const updatedData = state.userData.filter(u => u.id !== action.id)
                return {...state, userData: updatedData}
    

        default:
            return state
    }
}