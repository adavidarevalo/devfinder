import React from 'react'
import '../styles/components/Loading.scss'

const Loading = () => {
    return(
        <div className='Loading-container'>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}

export default Loading