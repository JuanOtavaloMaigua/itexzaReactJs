import React from 'react'

export default function ImageAndText(){
    return(
        <div>
            <picture>
                <img src={process.env.PUBLIC_URL + "/images/banner.png"} height="350px"/>
            </picture>
        </div>
    )
}