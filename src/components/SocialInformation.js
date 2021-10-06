import React, {useContext} from 'react'
import generalContext from '../context/generalContext'

import iconWebsite from '../assets/images/iconWebsite.svg'
import iconTwitter from '../assets/images/iconTwitter.svg'
import iconLocation from '../assets/images/iconLocation.svg'
import iconCompany from '../assets/images/iconCompany.svg'


const SocialInformation = () =>{
    const {DataApi, backgroundColor} = useContext(generalContext)
    const {
        location,
        blog,
        twitter_username,
        company
    } = DataApi
    return(
    <div className={`Social-Container ${backgroundColor ? 'Change-color': null} `}>
        <div>
            <img src={iconLocation} alt='Location'/>
            <p>{location ? location : 'Not Available'}</p>
        </div>
        <div>
            <img src={iconWebsite} alt='Personal Blog'/>
            <p>{blog ? blog : 'Not Available'}</p>
        </div>
        <div>
            <img src={iconTwitter} alt='Twitter'/>
            <p>{twitter_username ? twitter_username : 'Not Available'}</p>
        </div>
        <div>
            <img src={iconCompany} alt='Company'/>
            <p>{company ? company: 'Not Available'}</p>
        </div>
    </div>
    )
}

export default SocialInformation