import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

const fetch = require('node-fetch');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      orderStat: "ndexno",
      type1: "any",
      type2: "any",
      generation: "any",
      orderVal: "ascending",
      numResults: 0,
      resultsPercentage: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getData = this.getData.bind(this);
    this.fillInTable = this.fillInTable.bind(this);
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  async getData(api_url) {
    const db_response = await fetch(api_url);
    const db_json = await db_response.json();

    return db_json;
  }

  async fillInTable() {
    const type1Val = this.state.type1;
    const type2Val = this.state.type2;
    const generationVal = this.state.generation;
    const sortVal = this.state.orderStat;
    const orderVal = (this.state.orderVal === "ascending" ? 1 : -1);
    const api_url = `https://lr-app-server.herokuapp.com/pokebase/search/${sortVal},${type1Val},${type2Val},${generationVal},${orderVal}`;
    const data = await this.getData(api_url);
    const numResults = parseInt(data.length, 10);
    const resultsPercentage = ((parseFloat(numResults / 807.0)) * 100).toFixed(2);
    const table = document.getElementById("results");
    const oldBody = document.getElementById("body");
    const newBody = document.createElement('tbody');
    const resultsText = document.getElementById("resultsText");

    resultsText.textContent = `${numResults} results (${resultsPercentage}% of all Pokémon)`;

    oldBody.parentElement.replaceChild(newBody, oldBody);
    newBody.id = "body";

    table.append(newBody);

    for (let item of data) {
        const link = document.createElement('a');
        const image = document.createElement('img');
        const newRow = document.createElement('tr');
        const imageCol = document.createElement('td');
        const ndexnoCol = document.createElement('td');
        const nameCol = document.createElement('td');
        const type1Col = document.createElement('td');
        const type2Col = document.createElement('td');
        const hpCol = document.createElement('td');
        const atkCol = document.createElement('td');
        const defCol = document.createElement('td');
        const spatkCol = document.createElement('td');
        const spdefCol = document.createElement('td');
        const speedCol = document.createElement('td');
        const totalCol = document.createElement('td');

        link.href = `https://bulbapedia.bulbagarden.net/wiki/${item.bulba_name}_(Pok%C3%A9mon)`;
        link.target = `iframe_pdb`;
        image.src = `https://img.pokemondb.net/sprites/sun-moon/icon/${item.name}.png`;

        imageCol.append(link);
        link.append(image);
        ndexnoCol.textContent = `${item.ndexno}`;
        nameCol.textContent = ((`${item.name}`).charAt(0).toUpperCase()) + item.name.slice(1);
        type1Col.textContent = ((`${item.type1}`).charAt(0).toUpperCase()) + item.type1.slice(1);
        item.type2 === "none" ? type2Col.textContent = `--` : type2Col.textContent = ((`${item.type2}`).charAt(0).toUpperCase()) + item.type2.slice(1);
        hpCol.textContent = `${item.hp}`;
        atkCol.textContent = `${item.atk}`;
        defCol.textContent = `${item.def}`;
        spatkCol.textContent = `${item.spatk}`;
        spdefCol.textContent = `${item.spdef}`;
        speedCol.textContent = `${item.spd}`;
        totalCol.textContent = `${item.total}`;

        imageCol.setAttribute("width", "6%");
        ndexnoCol.setAttribute("width", "4%");
        nameCol.setAttribute("width", "20%");
        type1Col.setAttribute("width", "10%");
        type2Col.setAttribute("width", "10%");
        hpCol.setAttribute("width", "7%");
        atkCol.setAttribute("width", "7%");
        defCol.setAttribute("width", "7%");
        spatkCol.setAttribute("width", "7%");
        spdefCol.setAttribute("width", "7%");
        speedCol.setAttribute("width", "7%");
        totalCol.setAttribute("width", "8%");

        newRow.setAttribute("width", "100%");

        newRow.append(imageCol);
        newRow.append(ndexnoCol);
        newRow.append(nameCol);
        newRow.append(type1Col);
        newRow.append(type2Col);
        newRow.append(hpCol);
        newRow.append(atkCol);
        newRow.append(defCol);
        newRow.append(spatkCol);
        newRow.append(spdefCol);
        newRow.append(speedCol);
        newRow.append(totalCol);

        newBody.append(newRow);
    }
  }

  render() {
    return (
      <div className="Container">
        <Header 
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          fillInTable={this.fillInTable}
          data={this.state}  
        />
        <Content />
      </div>
    );
  }
}

export default App;