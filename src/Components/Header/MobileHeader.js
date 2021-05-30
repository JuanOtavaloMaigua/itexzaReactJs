import React from 'react'
import '../../Styles/Style.css'
export default function MobileHeader(){
    return(
        <div className="Container">
            <div className="nav-container">
                <img src={process.env.PUBLIC_URL + 
                    '/icons/menu_hamburguer.svg'} 
                    alt="menu icon"/>
                
                <img src={process.env.PUBLIC_URL +
                    "/icons/icon.svg"} alt="logo"/>

                <div>
                    <img src={process.env.PUBLIC_URL +
                    "/icons/search.svg"} alt="search icon"/>
                    <img src={process.env.PUBLIC_URL +
                    "/icons/location.svg"} alt="location icon"/>
                </div>
            </div>
        </div>
    )
}