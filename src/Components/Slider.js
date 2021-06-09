import React from 'react'
import ProductImageAndText from './ProductImageAndText'
import '../Styles/Style.css'

const img1 = "https://images.unsplash.com/photo-1596138121396-64293423a9a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFicmljc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
const img2 = "https://images.unsplash.com/photo-1524404794194-16bae22718c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80"
const img3 = "https://images.unsplash.com/photo-1612261357585-993398d338b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGZhYnJpY3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
export default function Slider(){
    const imageNames = ['TelasPeluche.png', 'TelasTermica.png', 'TelasImpermeables.png']
    return(
        <div className="SliderContainer">
            <div className="SliderContainerMargin">
                <p>Próximamente</p>

                <div className="SliderContainerMargin-image">
                    <div className="imageContainer">
                        <img src={img1}/>
                    </div>

                    <div className="imageContainer">
                        <img src={img2}/>
                    </div>

                    <div className="imageContainer">
                        <img src={img3}/>
                    </div>
                </div>
            </div>
        </div>  
    )
}