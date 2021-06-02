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
                            Object.values(nameOfImages).map((value, index)=>{
                                console.log('this is the index',index)
                                return <ProductImageAndtext nameImage={value}/>
                                // if the index is at the ending then add a class to modify width in of the last photo
                                // may be this change only have to maked when the number of photos are odd(impar)
                            })
                        }
                    </div>
                </div>
            </div>
    )
}