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
                <button className="button buttonAny buttonType1" name={this.props.name} value="any" onClick={this.props.onClick}>Any</button>
                <button className="button buttonNone buttonType1" name={this.props.name} value="none" onClick={this.props.onClick}>None</button>
                <button className="button buttonBug buttonType1" name={this.props.name} value="bug" onClick={this.props.onClick}>Bug</button>
                <button className="button buttonDark buttonType1"  name={this.props.name} value="dark" onClick={this.props.onClick}>Dark</button>
                <button className="button buttonDragon buttonType1" name={this.props.name} value="dragon" onClick={this.props.onClick}>Dragon</button>
                <button className="button buttonElectric buttonType1" name={this.props.name} value="electric" onClick={this.props.onClick}>Electric</button>
                <button className="button buttonFairy buttonType1" name={this.props.name} value="fairy" onClick={this.props.onClick}>Fairy</button>
                <button className="button buttonFighting buttonType1" name={this.props.name} value="fighting" onClick={this.props.onClick}>Fighting</button>
                <button className="button buttonFire buttonType1" name={this.props.name} value="fire" onClick={this.props.onClick}>Fire</button>
                <button className="button buttonFlying buttonType1" name={this.props.name} value="flying" onClick={this.props.onClick}>Flying</button>
                <button className="button buttonGhost buttonType1" name={this.props.name} value="ghost" onClick={this.props.onClick}>Ghost</button>
                <button className="button buttonGrass buttonType1" name={this.props.name} value="grass" onClick={this.props.onClick}>Grass</button>
                <button className="button buttonGround buttonType1" name={this.props.name} value="ground" onClick={this.props.onClick}>Ground</button>
                <button className="button buttonIce buttonType1" name={this.props.name} value="ice" onClick={this.props.onClick}>Ice</button>
                <button className="button buttonNormal buttonType1" name={this.props.name} value="normal" onClick={this.props.onClick}>Normal</button>
                <button className="button buttonPoison buttonType1" name={this.props.name} value="poison" onClick={this.props.onClick}>Poison</button>
                <button className="button buttonPsychic buttonType1" name={this.props.name} value="psychic" onClick={this.props.onClick}>Psychic</button>
                <button className="button buttonRock buttonType1" name={this.props.name} value="rock" onClick={this.props.onClick}>Rock</button>
                <button className="button buttonSteel buttonType1" name={this.props.name} value="steel" onClick={this.props.onClick}>Steel</button>
                <button className="button buttonWater buttonType1" name={this.props.name} value="water" onClick={this.props.onClick}>Water</button>
            </div>
        );
    }
}

export default TypeButtons;