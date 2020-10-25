import  React,{ Component } from 'react'
import Car from './Cars';

export default class MyCars extends Component {
    state = {
        title: "Mon Catalogue Voitures",
        voitures: [
            { nom: "ford", color: "red", year: 2000 },
            { nom: "mercedes", color: "red", year: 2010 },
            { nom: "peugot", color: "red", year: 2018 },
        ],
    }

    addTenYears = () => {
        let updatedState = this.state.voitures.map(e => {
            return e.year -= 10;
        });

        this.setState({ updatedState })
    };

    render() {
        let carsList = this.state.voitures.map((voiture, index) => {
            return <Car key={index} voiture={voiture} />
        });
        return (
            <>
                <h1>{this.state.title}</h1>
                <button onClick={this.addTenYears}>+10 ans</button>
                <table className="carsTable">
                    <tr>
                        <th>marque</th>
                        <th>couleur</th>
                        <th>age</th>
                    </tr>
                {carsList}
                </table>

            </>
        )
    }
}
