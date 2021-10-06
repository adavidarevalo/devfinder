import React, {useContext, useState} from 'react'
import generalContext from '../context/generalContext'
import iconSearch from '../assets/images/iconSearch.svg'

const Search = () =>{
    const [inputInformation, setInputInformation] = useState('')
    const [error, setError] = useState(false)
    const {backgroundColor, searchUserName, errorApi} = useContext(generalContext)
    const submitValue = () => {
        if(inputInformation === ''){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
            return 
        }
        searchUserName(inputInformation)
        setInputInformation("")
    }
    return(
        <>
        <div className={`SearchContainer ${backgroundColor ? 'changeBackground': null} `}>
            <img src={iconSearch} alt='magnifying Glass'/>
            <input 
            type='text' 
            value={inputInformation}
            placeholder='Search Github username...' 
            onChange={(e)=> setInputInformation(e.target.value)}/>
            <button
            onClick={submitValue}
            >Seach</button>
        </div>
        {error && <p className='ErrorContainer'>The user is require</p>}
        {errorApi && <p className='ErrorContainer'>{errorApi}</p>}
        </>
    )
}

export default Search