
import React, { Component } from 'react';
import MyCars from './MyCars'
import './App.css'

export default class App extends Component {
  state = { title: "Mon Catalogue Voitures" };
  changeTitle = (e) => {
    this.setState({ title: "Mon Nouveau Titre" });
  }

  changerViaParam = (title) => {
    this.setState({ title: title })
  }
  changerViaBind = (param) => {
    this.setState({ title: param })
  }
  changerViaInput = (e) => {
    this.setState({ title: e.target.value })
  }

  render() {
    return (
      <div className="App">
      <MyCars title={this.state.title}/>
        <button onClick={this.changeTitle}>changer le nom en dure</button>
        <button onClick={() => this.changerViaParam("titre via un param")}>via param</button>
        <button onClick={this.changerViaBind.bind(this, "titre via bind")} >via bind</button>
        <input type="text" onChange={this.changerViaInput} value={this.state.title} />
    </div>
    );
  }
}


