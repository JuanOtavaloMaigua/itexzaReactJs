import React from 'react';
import MobileHeader from './Header/MobileHeader';
import PreHeader from './Header/PreHeader'
import ImageAndText from './ImageAndText';
import ProductImageAndtext from './ProductImageAndText';
import GridProducts from './GridProducts'

export default function Body(){
    const imageNames = ['TelasImpermeables.png', 'TelasPeluche.png', 'TelasTermica.png']
    return(
        <div>
            <PreHeader/>
            <MobileHeader/>
            <ImageAndText/>
            <GridProducts nameOfImages={imageNames}/>
        </div>
    )
}
