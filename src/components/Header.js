import React from 'react';
import TypeButtons from './TypeButtons';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let modal = document.getElementById("myModal");

        if (event.target.id === "myModal" || event.target.id === "searchButton" || event.target.id === "close") {
            this.state.display ? modal.style.display = 'none' : modal.style.display = 'block';
            this.setState({display: !this.state.display});
        } else if (event.target.id === "goButton") {
            this.state.display ? modal.style.display = 'none' : modal.style.display = 'block';
            this.setState({display: !this.state.display});
            this.props.fillInTable();
        }
    }

    render() {
        const selectedType1 = (this.props.data.type1)[0].toUpperCase() + (this.props.data.type1).slice(1);
        const selectedType2 = (this.props.data.type2)[0].toUpperCase() + (this.props.data.type2).slice(1);
        
        return (
            <div className="Header"><h3 id="resultsText">0 results (0% of all Pokémon)</h3>
            <img src="https://fontmeme.com/permalink/191007/e2a442cded4c938f9c4a7f0103bebd99.png" alt="pokemon-font" border="0"/>  
                <button 
                    id="searchButton"
                    onClick={this.handleClick}
                >
                    Search
                </button>
                <div id="myModal"
                    className="modal" 
                    onClick={this.handleClick}
                >
                    <div className="modal-content">
                        <h1>Search</h1>
                        <span id="close" 
                            className="close" 
                            onClick={this.handleClick}
                        >
                            &times;
                        </span>
                        <div className="modalControls">
                            <h4>Type 1</h4>
                            <h4>Type 2</h4>
                            <TypeButtons id="buttonSet1" name="type1" onClick={this.props.handleClick}/>
                            <TypeButtons id="buttonSet2" name="type2" onClick={this.props.handleClick}/>
                            <h2>{selectedType1}</h2>
                            <h2>{selectedType2}</h2>
                            <div className="filters">
                                <div></div>
                                <div></div>
                                <div></div>
                                <h4>Generation</h4>
                                <h4>Sort by</h4>
                                <h4>Order</h4>
                                <select name="generation" className="generation" id="generation" value={this.props.data.generation} onChange={this.props.handleChange}>        
                                    <option value="any">Any</option>
                                    <option value="1">Generation 1</option>
                                    <option value="2">Generation 2</option>
                                    <option value="3">Generation 3</option>
                                    <option value="4">Generation 4</option>
                                    <option value="5">Generation 5</option>
                                    <option value="6">Generation 6</option>
                                    <option value="7">Generation 7</option>
                                </select>
                                <select name="orderStat" className="sort" id="sort" value={this.props.data.orderStat} onChange={this.props.handleChange}>
                                    <option value="ndexno">National Dex. #</option>
                                    <option value="hp">HP</option>
                                    <option value="atk">Attack</option>
                                    <option value="def">Defense</option>
                                    <option value="spatk">Sp. Attack</option>
                                    <option value="spdef">Sp. Defense</option>
                                    <option value="spd">Speed</option>
                                    <option value="total">Total</option>
                                </select>
                                <select name="orderVal" className="order" id="order" value={this.props.data.orderVal} onChange={this.props.handleChange}>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                            <div className="startSearch">
                                <button id="goButton"
                                    onClick={this.handleClick}
                                >
                                    Go!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;