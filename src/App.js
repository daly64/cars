
import React, { Component } from 'react';
import MyCars from './MyCars'
import './App.css'

export default class App extends Component {
  state = { title: "Mon Catalogue Voitures" };
  render() {
    return (
      <div className="App">
      <MyCars title={this.state.title}/>
    </div>
    );
  }
}


