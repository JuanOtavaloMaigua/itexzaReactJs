import React from 'react'
import ProductImageAndtext from './ProductImageAndText'
import './../Styles/Style.css'

export default function GridProduct(props){
    const { nameOfImages } = props
    return (
            <div className="OwnProducts">
                <div className="OwnProductsContainer">
                    <p>Nuestros productos</p>
                    <div className="OwnProductsContainer-Images">
                        {
                            Object.values(nameOfImages).map((nameImage, index)=>{

                                if(index%2===0){
                                    return <ProductImageAndtext className={"ProductImageContainer"} nameImage={nameImage}/>
                                }

                                return <ProductImageAndtext className={"ProductImageContainer AllScreen"} nameImage={nameImage}/>

                            })
                        }
                    </div>
                </div>
            </div>
    )
}