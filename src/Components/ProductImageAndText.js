import React from 'react'
import '../Styles/Style.css'

export default function ProductImageAndtext(props){
    const { nameImage , className} = props

    return(
        <div className={className}>
            <img src={process.env.PUBLIC_URL + `/images/${nameImage}`} alt={nameImage}/>
            <p>{nameImage}</p>
        </div>
    )   
}