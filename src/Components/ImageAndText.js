import React from 'react'
import "../Styles/Style.css"

export default function ImageAndText(){
    return(
        <div className="BannerContainer">
            <picture className="BannerContainer-Picture"> 
                <source srcSet="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png" media="(min-width: 500px)"/>
                <img src={process.env.PUBLIC_URL + "/images/banner.png"}/>
            </picture>
            <div className="BannerContainer-text">
                <p>Telas</p>
                <p>Cobijas</p>
                <p>Insumos</p>
            </div>
        </div>
    )
}
