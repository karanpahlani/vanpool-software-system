import React from 'react';
import Tilt from 'react-tilt';



const Logo = () =>{
    return(
        <div>
            <Tilt className="Tilt shadow-2" options={{ max : 60 }} style={{ height: 150, width: 250 }} >
                <div className="Tilt-inner"> <img src={ require('./logo.png') } /> </div>
            </Tilt>
        </div>
    );
}

export default Logo;