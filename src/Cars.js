import React,{Fragment} from 'react';
import './Cars.css';
const Cars = ({ voiture}) => {
    let year = new Date().getFullYear();
    let age = year - voiture.year + " ans";

    const colorInfo = voiture.color ? (<td>{voiture.color} </td>) : (<td>couleur : Néant </td>);
    const yearInfo = age ? (<td> {age} </td>) : (<td> Néant </td>);
    
    return (voiture.nom) ?
        (
            <Fragment className="cars">
                <tr> 
                    <td>{voiture.nom}</td>
                {colorInfo}
               {yearInfo}
               </tr>
               
            </Fragment>
        ) :
        (null);



}



export default Cars;
