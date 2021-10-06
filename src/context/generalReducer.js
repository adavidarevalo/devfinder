import {
    Change_Background,
    Error_API,
    Loading_API,
    Data_API
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case Change_Background: 
            return{
                ...state,
                backgroundColor: !state.backgroundColor
            }
        case Error_API: 
            return{
                ...state,
                errorApi: action.payload,
                loading: false,
                DataApi: false
            }
        case Loading_API: 
            return{
                ...state,
                loading: true
            }
        case Data_API:
            return{
                ...state,
                DataApi: action.payload,
                loading: false,
                errorApi: false
            }
        default:
            return state
    }
}