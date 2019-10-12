import React from 'react';

class TypeButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <div className="TypeButtons" id={this.props.id}>
                <button className="button buttonAny" name={this.props.name} value="any" onClick={this.props.onClick}>Any</button>
                <button className="button buttonNone" name={this.props.name} value="none" onClick={this.props.onClick}>None</button>
                <button className="button buttonBug" name={this.props.name} value="bug" onClick={this.props.onClick}>Bug</button>
                <button className="button buttonDark"  name={this.props.name} value="dark" onClick={this.props.onClick}>Dark</button>
                <button className="button buttonDragon" name={this.props.name} value="dragon" onClick={this.props.onClick}>Dragon</button>
                <button className="button buttonElectric" name={this.props.name} value="electric" onClick={this.props.onClick}>Electric</button>
                <button className="button buttonFairy" name={this.props.name} value="fairy" onClick={this.props.onClick}>Fairy</button>
                <button className="button buttonFighting" name={this.props.name} value="fighting" onClick={this.props.onClick}>Fighting</button>
                <button className="button buttonFire" name={this.props.name} value="fire" onClick={this.props.onClick}>Fire</button>
                <button className="button buttonFlying" name={this.props.name} value="flying" onClick={this.props.onClick}>Flying</button>
                <button className="button buttonGhost" name={this.props.name} value="ghost" onClick={this.props.onClick}>Ghost</button>
                <button className="button buttonGrass" name={this.props.name} value="grass" onClick={this.props.onClick}>Grass</button>
                <button className="button buttonGround" name={this.props.name} value="ground" onClick={this.props.onClick}>Ground</button>
                <button className="button buttonIce" name={this.props.name} value="ice" onClick={this.props.onClick}>Ice</button>
                <button className="button buttonNormal" name={this.props.name} value="normal" onClick={this.props.onClick}>Normal</button>
                <button className="button buttonPoison" name={this.props.name} value="poison" onClick={this.props.onClick}>Poison</button>
                <button className="button buttonPsychic" name={this.props.name} value="psychic" onClick={this.props.onClick}>Psychic</button>
                <button className="button buttonRock" name={this.props.name} value="rock" onClick={this.props.onClick}>Rock</button>
                <button className="button buttonSteel" name={this.props.name} value="steel" onClick={this.props.onClick}>Steel</button>
                <button className="button buttonWater" name={this.props.name} value="water" onClick={this.props.onClick}>Water</button>
            </div>
        );
    }
}

export default TypeButtons;