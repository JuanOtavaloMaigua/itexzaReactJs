import React from 'react';
// import MobileHeader from './Header/MobileHeader';
// import PreHeader from './Header/PreHeader'
// import ImageAndText from './ImageAndText';
// import GridProducts from './GridProducts'
// import Slider from './Slider';
import { fetchImageUrl } from '../utils'

export default function Body(){
    const imageNames = ['TelasPeluche.png', 'TelasTermica.png', 'TelasImpermeables.png']
    return(
        <div>
            {
                console.log('promesas: ' ,fetchImageUrl("purple and yellow abstract painting"))
            }
            {/* <PreHeader/>
            <MobileHeader/>
            <ImageAndText/>
            <GridProducts nameOfImages={imageNames}/>
            <Slider/> */}
        </div>
    )
}
