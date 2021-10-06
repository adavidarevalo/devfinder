import React, {useContext} from 'react'
import generalContext from '../context/generalContext'
import Information from "./Information"
import SocialInformation from "./SocialInformation"
import DayJS from "react-dayjs";

const Main = () => {
    const {DataApi, backgroundColor} = useContext(generalContext)
    console.log('Pepe ',DataApi)
    const {
        avatar_url,
        login,
        name,
        created_at,
        bio
    } = DataApi

    return(
        <div className={`Main-Container ${backgroundColor ? 'Change-color': null} `}>
            <div className='Main-Avatar'>
                <img src={avatar_url} alt='Avatar'/>
                <div>
                    <h2>{name ? name :login}</h2>
                    <p className="Main-login">@{login}</p>
                    <p><DayJS format="D MMM YYYY">{created_at}</DayJS></p>
                </div>
            </div>
            <p className="BioParagraph">{bio ? bio :'This profile has no bio' }</p>
            <Information/>
            <SocialInformation/>
        </div>
    )
}

export default Main