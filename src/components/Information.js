import React, {useContext} from 'react'
import generalContext from '../context/generalContext'

const Information = () => {
    const {DataApi, backgroundColor} = useContext(generalContext)
    const {
        public_repos,
        followers,
        following,
    } = DataApi
    return(
        <div className={`information-container ${backgroundColor ? 'Change-color': null} `}>
            <div>
                <h3>Repos</h3>
                <p>{public_repos}</p>
            </div>
            <div>
                <h3>Followers</h3>
                <p>{followers}</p>
            </div>
            <div>
                <h3>Following</h3>
                <p>{following}</p>
            </div>
        </div>
    )
}

export default Information