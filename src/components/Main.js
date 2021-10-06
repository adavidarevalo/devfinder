import React, {useContext} from 'react'
import generalContext from '../context/generalContext'
import iconWebsite from '../assets/images/iconWebsite.svg'
import iconTwitter from '../assets/images/iconTwitter.svg'
import iconLocation from '../assets/images/iconLocation.svg'
import iconCompany from '../assets/images/iconCompany.svg'

const Main = () => {
    const {DataApi} = useContext(generalContext)
    console.log('Pepe ',DataApi)
    const {
        avatar_url,
        login,
        name,
        created_at,
        bio,
        public_repos,
        followers,
        following,
        location,
        blog,
        twitter_username,
        company
    } = DataApi
    return(
        <div>
            <div>
                <img src={avatar_url} alt='Avatar'/>
                <div>
                    <h2>{name}</h2>
                    <p>@{login}</p>
                    <p>{created_at}</p>
                </div>
            </div>
            <p>{bio ? bio :'This profile has no bio' }</p>
            <div>
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
            <div>
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
        </div>
    )
}

export default Main