import React,{Fragment} from 'react';
import './Cars.css';
const Cars = ({voiture}) => {
    let{nom,color,year}=voiture;
  
    let curentYear = new Date().getFullYear();
    let age = `${curentYear - year} ans`;
    const colorInfo = color ? (`${color}`) : ("couleur : Néant");
    const yearInfo = age ? (`${age}`) : ("Néant");
    
    return (nom) ?
        (
            <Fragment>
             <td>{nom}</td>
             <td>{colorInfo}</td>
             <td>{yearInfo} </td>
                    
                              
            </Fragment>
        ) :
        (null);



}



export default Cars;
