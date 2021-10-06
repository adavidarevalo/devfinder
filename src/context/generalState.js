import React, {useReducer} from 'react'
import generalContext from './generalContext'
import generalReducer from './generalReducer'
import clientUser from '../config/axios'
import {
    Change_Background,
    Error_API,
    Loading_API,
    Data_API
} from '../types'


const GeneralState = props => {
    const firstState = {
        backgroundColor: false,
        errorApi: false,
        DataApi: false,
        loading: false
    }
    const [state, dispatch] = useReducer(generalReducer, firstState)

    const changeBackgroundColor = () => {
        dispatch({
            type: Change_Background
        })
    }
    const searchUserName= async(user) =>{
        dispatch({
            dispatch: Loading_API
        })
        try {
            const awswer = await clientUser.get(user);
            dispatch({
                type: Data_API,
                payload: awswer.data
            })
        } catch (error) {
            dispatch({
                type: Error_API,
                payload: error.message
            })
            setTimeout(() => {
                dispatch({
                    type: Error_API,
                    payload: false
                })
            }, 3000);
        }
    }
    return(
        <generalContext.Provider
        value={{
            backgroundColor: state.backgroundColor,
            errorApi: state.errorApi,
            loading: state.loading,
            DataApi: state.DataApi,
            changeBackgroundColor,
            searchUserName
        }}
        >
          {props.children}
        </generalContext.Provider>
      )
}

export default GeneralState