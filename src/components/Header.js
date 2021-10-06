import React,{useContext} from 'react'
import generalContext from '../context/generalContext'
import logo from '../assets/images/logo.svg'
import iconSun from '../assets/images/iconSun.svg'
import iconMoon from '../assets/images/iconMoon.svg'

const Header = () => {
    const {backgroundColor, changeBackgroundColor} = useContext(generalContext)
    return(
        <header className={backgroundColor && 'Sun'}>
            <img src={logo} alt='Logo'/>
            <div>
                <button
                onClick={changeBackgroundColor}
                >
                    {backgroundColor
                    ?(<p>Moon <img src={iconMoon} alt="iconMoon"/></p>)
                    :(<p>Light <img src={iconSun} alt="SunIcon"/></p>)
                }
                </button>
            </div>
        </header>
    )
}

export default Header