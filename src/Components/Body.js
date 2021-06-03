import React from 'react';
import MobileHeader from './Header/MobileHeader';
import PreHeader from './Header/PreHeader'
import ImageAndText from './ImageAndText';
import GridProducts from './GridProducts'

export default function Body(){
    const imageNames = ['TelasPeluche.png', 'TelasTermica.png', 'TelasImpermeables.png']
    return(
        <div>
            <PreHeader/>
            <MobileHeader/>
            <ImageAndText/>
            <GridProducts nameOfImages={imageNames}/>
        </div>
    )
}
