let React = require("react");
let ReactDOM = require("react-dom");
let SwCharSheet = require('./CharacterSheet.jsx');
let SwVehicleSheet = require('./VehicleSheet.jsx');
let characterStore = require("../stores/characterStore");
let swDefaultChar = require('../stores/character.json');
let swDefaultVehicle = require('../stores/vehicle.json');
let _character = characterStore.getCharacter();

module.exports = React.createClass({
    renderOptions:function(chars) {
        let options = [];
        for(var i = 0; i < chars.length; i++){
            if(chars[i].header.name == localStorage.getItem('charSelection')) {
                options.push(
                    <option value={chars[i].header.name} selected>{chars[i].header.name}</option>
                );
            } else {
                options.push(
                    <option value={chars[i].header.name}>{chars[i].header.name}</option>
                );
            }
        }
        return options;
    },
    getSelectedChar:function(key) {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return null;
        }
    },
    createCharacter:function(type, name) {
        if(!localStorage.getItem(name)) {
            switch (type) {
                case "sagaChar":
                    let charData = swDefaultChar;
                    charData.header.name = name;
                    localStorage.setItem(name, JSON.stringify(charData));
                    localStorage.setItem('charSelection', name);
                break;
                case "sagaVehicle":
                    let swVehicleData = swDefaultVehicle;
                    swDefaultVehicle.header.name = name;
                    localStorage.setItem(name, JSON.stringify(swVehicleData));
                    localStorage.setItem('charSelection', name);
                break;
            }
            window.location.href = './';
        } else {
            alert('Please use a name that you have not already used.')
        }
    },
    activateAddChar:function() {
        this.refs.character-type-selection.addClass('active')
    },
    changeCharacter:function(name) {
        localStorage.setItem('charSelection', name);
        this.forceUpdate();
    },
    setCharCreateType:function(type) {
        this.characterCreateType = type;
    }, 
    setCharacterCreateName:function(name) {
        this.characterCreateName = name;
    },
    getCharSheet:function(character) {
        if(character) {
        return character.charType;
        } else {
            return null;
        }
    },
    render:function(){
        this.characterCreateType = "sagaChar";
        this.characterCreateName = "";
        let createCharMarkup = <div id="create-character-pop-up-disable">
                                    <select id="character-type-selection" onChange={e => this.setCharCreateType(e.target.value)}>
                                        <option value="sagaChar" selected>Saga Character</option>
                                        <option value="sagaVehicle">Saga Vehicle</option>
                                    </select>
                                    <input type="text" className="character-name-creation" onChange={e => this.setCharacterCreateName(e.target.value)}></input>
                                    <button className="addButton" onClick={e => this.createCharacter(this.characterCreateType, this.characterCreateName)}>Create Character</button>
                                </div>;
        this.character = this.getSelectedChar(localStorage.getItem('charSelection'));
        if (_character.length > 0 && this.getCharSheet(this.character)) {
            
            let optionsRendered = this.renderOptions(_character);
            let charSelector = <div><label class="control-label">Select your character: </label>
                            <select id="character-selector" class="form-control" onChange={e => this.changeCharacter(e.target.value)}>
                                {optionsRendered}
                            </select></div>;
            if(this.getCharSheet(this.character) == 'swChar') {
                return(
                <div>
                   {charSelector}
                   <SwCharSheet  default={this.character}/>
                   {createCharMarkup}
                </div>
                );
            } else {
                return(
                <div>
                    {charSelector}
                    <SwVehicleSheet default={this.character} />
                    {createCharMarkup}
                </div>
                );
            }
        } else {
            console.log('else');
            return (
                <div id="create-character-pop-up-disable">
                    <select id="character-type-selection" onChange={e => this.setCharCreateType(e.target.value)}>
                        <option value="sagaChar" selected>Saga Character</option>
                        <option value="sagaVehicle">Saga Vehicle</option>
                    </select>
                    <input type="text" className="character-name-creation" onChange={e => this.setCharacterCreateName(e.target.value)}></input>
                    <button className="addButton" onClick={e => this.createCharacter(this.characterCreateType, this.characterCreateName)}>Create Character</button>
                </div>
            );
        }
        
    }
});