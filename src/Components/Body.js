import React from 'react';
import MobileHeader from './Header/MobileHeader';
import PreHeader from './Header/PreHeader'
import ImageAndText from './ImageAndText';

export default function Body(){
    return(
        <div>
            <PreHeader/>
            <MobileHeader/>
            <ImageAndText/>
        </div>
    )
}
