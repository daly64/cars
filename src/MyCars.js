import React, { Component } from "react";
import Car from "./Cars";
export default class MyCars extends Component {
  state = {
    title: "Mon Catalogue Voitures",
    voitures: [
      { nom: "ford", color: "red", year: 2000 },
      { nom: "mercedes", color: "blue", year: 2010 },
      { nom: "peugot", color: "green", year: 2018 },
    ],
    colors:["none","red","blue","green","black","pink","yellow"],
    voiture:{ nom:null, color:null, year:null },
  };

  addTenYears = () => {
    let updatedState = this.state.voitures.map((e) => {
      return (e.year -= 10);
    });

    this.setState({ updatedState });
  };



  handleMarque=(event)=>{
this.setState(prevState=>{
  return prevState.voiture.nom=event.target.value;
});
  }
  handleCouleur=(event)=>{
    this.setState(prevState=>{
      return prevState.voiture.color=event.target.value;
    });
  }
  handleAge=(event)=>{
    this.setState(prevState=>{
      return prevState.voiture.year=event.target.value;
    });
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    this.setState(prevState=>{
      return prevState.voitures.push(prevState.voiture); });
    this.setState({voiture:{ nom:null, color:null, year:null }});
  }

  render() {
    let carsList = this.state.voitures.map((voiture, index) => {
      return (
        <tr key={index}>
          <Car voiture={voiture} />
        </tr>
      );
    });
    return (
      <div>
        <h1>{this.state.title}</h1>
        <hr/>
          <form onSubmit={this.handleSubmit}>
            <div> 
              <label>marque : </label><input onChange={this.handleMarque} type="text"/>
              </div>
              <div>
              <label>couleur : </label>
                <select onChange={this.handleCouleur}>
              {this.state.colors.map((color,index)=>{return(<option key={index}>{color}</option>);})}
            </select> 
              </div>
              <div>
               <label>age : </label>
            <input type="number" max="2050" min="1960" onChange={this.handleAge}/>
            </div>
            <input type="submit" value="submit"/>
          </form>
        <hr/>
        <button onClick={this.addTenYears}>+10 ans</button>
        <table className="carsTable">
          <thead>
            <tr>
              <th>marque</th>
              <th>couleur</th>
              <th>age</th>
            </tr>
          </thead>

          <tbody>{carsList}</tbody>
        </table>
      </div>
    );
  }
}
