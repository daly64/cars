import React from 'react';
import './Cars.css';
const Cars = ({ voiture}) => {
    let year = new Date().getFullYear();
    let age = year - voiture.year + " ans";

    const colorInfo = voiture.color ? (<p>couleur : {voiture.color} </p>) : (<p>couleur : Néant </p>);
    const yearInfo = age ? (<p>age : {age} </p>) : (<p>age : Néant </p>);
    
    return (voiture.nom) ?
        (
            <div className="cars">
                <p>marque : {voiture.nom}</p>
                {colorInfo}
               {yearInfo}
            </div>
        ) :
        (null);



}



export default Cars;
