import React from 'react'
import '../Styles/Style.css'

export default function ProductImageAndtext(props){
    const { nameImage } = props
    return(
        <div className="ProductImageContainer">
            <img src={process.env.PUBLIC_URL + `/images/${nameImage}`}/>
            <p>{nameImage}</p>
        </div>
    )
}