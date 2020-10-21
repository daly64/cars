import React from 'react';
import './Cars.css';
const Cars = ({ children, color }) => {

    const colorInfo = color ?
        (<p>couleur : {color} </p>) :
        (<p>couleur : Néant </p>);

    if (children) {
        return (
            <div className="cars">
                <p>marque : {children}</p>
                {colorInfo}
            </div>
        );
    }
    else {
        return (
            <div className="cars">
                <p>Pas de Data !</p>
            </div>
        );
    }

}



export default Cars;
