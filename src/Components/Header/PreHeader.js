import React from 'react';
import '../../Styles/Style.css'

export default function PreHeader(){
    return(
        <div className="PreHeaderContainer">
            <div className="DataContainer">

                <div className="WhatsappDataContainer">
                    <img src={process.env.PUBLIC_URL + "/icons/whatsapp_black_icon.svg"} alt="whatsapp icon"/>
                    <p>0998145374</p>
                </div>
                
                <div className="SiguenosContainer">
                    <p>Síguenos:</p>
                    <img src={process.env.PUBLIC_URL + "/icons/facebook_black_icon.svg"} alt="facebook icon"/>
                    <img src={process.env.PUBLIC_URL + "/icons/instagram_black_icon.svg"} alt="instagram icon"/>
                </div>

            </div>
        </div>
    );
}