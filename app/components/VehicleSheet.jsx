var React = require("react");
var CharacterRow = require("./characterRow.jsx");
var GeneralRow = require("./GeneralRow.jsx");
var actions = require("../actions/CharacterActions");
var state;
module.exports = React.createClass({
    onChange: function(event, key) {
        this.setState( {
            [key] : event
        });
        this.state.header[key] = event;
        localStorage.setItem(this.charName, JSON.stringify(this.state.__proto__));
    },
    onChangeStats: function(event, key) {
        var num = this.makeInt(event);
        this.setState( {
            [key] : num
        });
        this.state.stats[key] = num;
        localStorage.setItem(this.charName, JSON.stringify(this.state.__proto__));  
    },
    makeInt: function(num){
        return parseInt(num) || 0;
    },
    onChangeItem: function(event, key, index, item) {
        this.setState( {
            [key] : event
        });
        this.state[item][index].eq[key] = event;
        localStorage.setItem(this.charName, JSON.stringify(this.state.__proto__));

    },
    render:function(){
        this.state = Object.create(this.props.default);
        this.charName = this.state.header.name;
        return(
            <form className="characterForm">
                <div className="row row-margin">
                    <div className="col-md-12 col-xs-12">                            
                        <div className="col-md-5 col-xs-5">
                            <CharacterRow default={this.state.header.name}  width="10" label="Name" placeholder="Character Name" id="name" type="text" />
                        </div>
                        <div className="col-md-4 col-xs-4">
                            <CharacterRow default={this.state.header.class} onBlur={this.onChange} width="10" label="Class" placeholder="Class" id="class" type="text"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.cl} onBlur={this.onChange} width="10" label="CL" placeholder="CL" id="cl" type="tel"/>
                        </div>                               
                    </div>                
                </div>
                <div className="row row-margin">
                    <div className="col-md-12 col-xs-12">                            
                        <div className="col-md-5 col-xs-5">
                            <CharacterRow default={this.state.header.type} onBlur={this.onChange} width="9" label="Type" placeholder="Type" id="Type" type="text"/>
                        </div>
                        <div className="col-md-4 col-xs-4">
                            <CharacterRow default={this.state.header.senses} onBlur={this.onChange} width="8" label="Senses" placeholder="Senses" id="senses" type="text"/>
                            <p>(perception)</p>
                        </div>  
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.level} onBlur={this.onChange} width="8" label="Sensors" placeholder="Sensors" id="level" type="tel"/>
                            <p>(use computer)</p>
                        </div>                            
                    </div>                
                </div>
                <div className="statsArea">
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-3 col-xs-3">
                                <label className="headline-label col-xs-12" htmlFor="name">SCORE</label>
                            </div>
                            <div className="col-md-1 col-xs-1">
                                <label className="headline-label col-xs-12" htmlFor="name">MODIFIER</label>
                            </div>
                            <div className="col-md-4 col-xs-4">
                                <label className="headline-label col-xs-12" htmlFor="name">HIT POINTS</label>
                            </div>    
                            <div className="col-md-4 col-xs-4">
                                <label className="headline-label col-xs-12" htmlFor="name"></label>
                            </div>                          
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.strength} onBlur={this.onChangeStats} width="5" label="STRength" id="strength" type="tel"/>
                            </div>
                            <div className="col-md-1 col-xs-1 modifier">
                                <input type="text" className="form-control" value={this.state.stats.strModifier} onChange={e => this.onChangeStats(e.target.value, "strModifier")} id="strmodifier" name="strModifier" />
                            </div>
                            <div className="col-md-4 col-xs-4">
                                <CharacterRow default={this.state.stats.hitPoints} onBlur={this.onChangeStats} width="5" label="Total" id="hitPoints" />
                            </div>    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.speed} onBlur={this.onChangeStats} width="6" label="Speed" id="speed" />
                            </div>                          
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.dexterity} onBlur={this.onChangeStats} width="5" label="DEXterity" id="dexterity" />
                            </div>
                            <div className="col-md-1 col-xs-1 modifier">
                                <input type="text" className="form-control" value={this.state.stats.dexModifier} onChange={e => this.onChangeStats(e.target.value, "dexModifier")} id="dexmodifier" name="dexModifier" />
                            </div>
                            <div className="col-md-4 col-xs-4">
                                <CharacterRow default={this.state.stats.currentHP} onBlur={this.onChangeStats} width="5" label="Current" id="currentHP" />
                            </div>    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.heroLevel} onBlur={this.onChangeStats} width="4" label="Pilot Heroic Level" id="heroLevel" />
                            </div>                          
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.constitution} onBlur={this.onChangeStats} width="5" label="CONstitution" id="constitution" />
                            </div>
                            <div className="col-md-1 col-xs-1 modifier">
                                <input type="text" className="form-control" value={this.state.stats.conModifier} onChange={e => this.onChangeStats(e.target.value, "conModifier")} id="conmodifier" name="conModifier" />
                            </div>
                            <div className="col-md-4 col-xs-4">
                                <CharacterRow default={this.state.stats.armorBonus} onBlur={this.onChangeStats} width="5" label="Armor Bonus" id="armorBonus" />
                            </div>    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.pilotAttack} onBlur={this.onChangeStats} width="4" label="Pilot Range Atk" id="pilotAttack" />
                            </div>                          
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.intelligence} onBlur={this.onChangeStats} width="5" label="INTelligence" id="intelligence" />
                            </div>
                            <div className="col-md-1 col-xs-1 modifier">
                                <input type="text" className="form-control" value={this.state.stats.intModifier} onChange={this.onChangeStats} onChange={e => this.onChangeStats(e.target.value, "intModifier")} id="intmodifier" name="intModifier" />
                            </div>
                            <div className="col-md-4 col-xs-4">
                                <CharacterRow default={this.state.stats.miscBonus} onBlur={this.onChangeStats} width="5" label="Misc Bonus" id="miscBonus" />
                            </div>    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.pilotSkill} onBlur={this.onChangeStats} width="5" label="Pilot Skill" id="pilotSkill" />
                            </div>                          
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.size} onBlur={this.onChangeStats} width="5" label="Size" id="size" />
                            </div>
                            <div className="col-md-1 col-xs-1 modifier">
                                <input type="text" className="form-control" value={this.state.stats.sizeModifier} id="sizeModifier" onChange={e => this.onChangeStats(e.target.value, "sizeModifier")} name="sizeModifier" />
                            </div>
                            <div className="col-md-4 col-xs-4">
                                <CharacterRow default={this.state.stats.damageReduction} onBlur={this.onChangeStats} width="4" label="Damage Reduction" id="damageReduction" />
                            </div>    
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.pilotInitiative} onBlur={this.onChangeStats} width="5" label="Pilot Initiative" id="pilotInitiative" />
                            </div>                          
                        </div>                
                    </div>
                </div>
                <div className="conditionArea">
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12"> 
                                <label className="headline-label condition" htmlFor="name">CONDITION</label>                                                 
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-2 col-xs-2">
                                <input type="radio" name="condition" value="1" checked={this.state.stats.condition == 1} onChange={e => this.onChangeStats(e.target.value, "condition")}/> Normal
                            </div>
                            <div className="col-md-2 col-xs-2">
                                <input type="radio" name="condition" value="2" checked={this.state.stats.condition == 2} onChange={e => this.onChangeStats(e.target.value, "condition")}/> -1 to all Def, Attacks, Skill, ability Checks
                            </div>
                            <div className="col-md-2 col-xs-2">
                                <input type="radio" name="condition" value="3" checked={this.state.stats.condition == 3} onChange={e => this.onChangeStats(e.target.value, "condition")}/> -2 to all Def, Attacks, Skill, ability Checks
                            </div>    
                            <div className="col-md-2 col-xs-2">
                                <input type="radio" name="condition" value="4" checked={this.state.stats.condition == 4} onChange={e => this.onChangeStats(e.target.value, "condition")}/> -5 to all Def, Attacks, Skill, ability Checks
                            </div>
                            <div className="col-md-2 col-xs-2">
                                <input type="radio" name="condition" value="5" checked={this.state.stats.condition == 5} onChange={e => this.onChangeStats(e.target.value, "condition")}/> -10 to all Def, Attacks, Skill, ability Checks
                            </div>    
                            <div className="col-md-2 col-xs-2">
                                <input type="radio" name="condition" value="6"checked={this.state.stats.condition == 6} onChange={e => this.onChangeStats(e.target.value, "condition")}/> HELPLESS
                            </div>                          
                        </div>                
                    </div>
                </div>
                <div className="defenseArea">
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12"> 
                                <label className="headline-label condition" htmlFor="name">DEFENSE</label>                                                 
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12">    
                            <div className="col-md-4 col-xs-4">
                                <CharacterRow default={this.state.stats.shieldRating} onBlur={this.onChangeStats} width="3" label="Sheild Rating Current" id="shieldRating" id="shieldRating" />
                            </div>
                            <div className="col-md-4 col-xs-4">
                                <div className="row">
                                    <label className="control-label col-xs-9" htmlFor="name">Sheild Rating max: </label>
                                    <div className=" col-xs-3">
                                        <input type="text" className="form-control" value={this.state.stats.sheildMax} onChange={e => this.onChangeStats(e.target.value, "sheildMax")} id="sheildMax" name="sheildMax" />
                                    </div>
                                </div>
                            </div>   
                            <div className="col-md-3 col-xs-3">
                                <CharacterRow default={this.state.stats.sheildRecharge} onBlur={this.onChangeStats} width="4" label="Sheild Recharge" id="sheildRecharge" />
                                <p>(pilot mechanic skill)</p>
                            </div>                          
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={ 10 + parseInt(this.state.stats.strModifier)} width="4" label="Fortitude" />   
                        </div>
                        <div className="col-md-4 col-xs-4"> 
                            <label className="control-label col-xs-9" htmlFor="name"> 10 + vehicle Strength Mod</label>
                        </div>
                        <div className="col-md-4 col-xs-4"> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={ 10 + parseInt(this.state.stats.strModifier) + parseInt(this.state.stats.sizeModifier) } width="4" label="Threshold"/>   
                        </div>
                        <div className="col-md-6 col-xs-6"> 
                            <label className="control-label" htmlFor="name"> Fortitude Defense + Vehicle Size Mod</label>
                        </div>
                        <div className="col-md-2 col-xs-2"> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={10 + parseInt(this.state.stats.dexModifier) + parseInt(this.state.stats.sizeModifier) + (parseInt(this.state.stats.armorBonus) > parseInt(this.state.stats.heroLevel) ? parseInt(this.state.stats.armorBonus) : parseInt(this.state.stats.heroLevel))} width="4" label="Reflex"/>   
                        </div>
                        <div className="col-md-7 col-xs-7"> 
                            <label className="control-label" htmlFor="name">10 + Vehicle Dex Mod + Vehicle Size Mod + Armor Bonus or Heroic Level</label>
                        </div>
                        <div className="col-md-1 col-xs-1"> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={10 + parseInt(this.state.stats.sizeModifier) + (parseInt(this.state.stats.armorBonus) > parseInt(this.state.stats.heroLevel) ? parseInt(this.state.stats.armorBonus) : parseInt(this.state.stats.heroLevel))} width="4" label="Flat-Footed" />   
                        </div>
                        <div className="col-md-5 col-xs-5"> 
                            <label className="control-label" htmlFor="name"> 10 + Vehicle Size Mod + Armor Bonus or Heroic Level</label>
                        </div>
                        <div className="col-md-3 col-xs-3"> 
                        </div>
                    </div>
                </div>
                <div className="skillsArea">
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12"> 
                                <label className="headline-label condition" htmlFor="name">SKILLS</label>                                                 
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={parseInt(this.state.stats.sizeModifier) + (parseInt(this.state.stats.pilotInitiative) > parseInt(this.state.stats.pilotSkill) ? parseInt(this.state.stats.pilotInitiative) : parseInt(this.state.stats.pilotSkill)) + parseInt(this.state.stats.dexModifier)} width="4" label="Initiative" />   
                        </div>
                        <div className="col-md-7 col-xs-7"> 
                            <label className="control-label" htmlFor="name">Pilot's Initiative or Pilot's Skill + Vehicle Size Mod + Vehicle Dex Mod</label>
                        </div>
                        <div className="col-md-1 col-xs-1"> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={parseInt(this.state.stats.sizeModifier) + parseInt(this.state.stats.pilotAttack)} width="4" label="Grapple" />   
                        </div>
                        <div className="col-md-5 col-xs-5"> 
                            <label className="control-label" htmlFor="name">Vehicle Size Mod + Pilot Attack + Grapple Size Mod</label>
                        </div>
                        <div className="col-md-3 col-xs-3"> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={this.state.header.fightingSpace} onBlur={this.onChange} width="6" label="Fighting Space" id="fightingSpace" type="text"/>  
                        </div>
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={this.state.header.cover} onBlur={this.onChange} width="8" label="Cover" id="cover" type="text"/> 
                        </div>
                        <div className="col-md-5 col-xs-5"> 
                            <CharacterRow default={this.state.header.crew} onBlur={this.onChange} width="8" label="Crew" id="crew" type="text"/> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-4 col-xs-4"> 
                            <CharacterRow default={this.state.header.cargo} onBlur={this.onChange} width="6" label="Cargo" id="cargo" type="text" />  
                        </div>
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={this.state.header.consumables} onBlur={this.onChange} width="6" label="Consumables" id="consumables" type="text"/> 
                        </div>
                        <div className="col-md-4 col-xs-4"> 
                            <CharacterRow default={this.state.header.carriedCraft} onBlur={this.onChange} width="6" label="Carried Craft" id="carriedCraft" type="text"/> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-7 col-xs-7"> 
                            <CharacterRow default={this.state.header.hyperdrive} onBlur={this.onChange} width="8" label="Hyperdrive" id="hyperdrive" type="text"/>  
                        </div>
                        <div className="col-md-4 col-xs-4"> 
                            <CharacterRow default={this.state.header.payload} onBlur={this.onChange} width="7" label="Payload" id="payload" type="text"/> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-7 col-xs-7"> 
                            <CharacterRow default={this.state.header.cost} onBlur={this.onChange} width="8" label="Cost" id="cost" type="text"/>  
                        </div>
                        <div className="col-md-4 col-xs-4"> 
                            <CharacterRow default={this.state.header.availability} onBlur={this.onChange} width="6" label="Availability" id="availability" type="text"/> 
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-9 col-xs-9"> 
                            <CharacterRow default={this.state.header.passengers} onBlur={this.onChange} width="8" label="Passengers" id="passengers" type="text"/>  
                        </div>
                        <div className="col-md-2 col-xs-2"> 
                        </div>
                    </div>
                </div>
                <div className="weaponsArea">
                    <div className="row row-margin">
                        <div className="col-md-12 col-xs-12"> 
                                <label className="headline-label condition" htmlFor="name">WEAPONS</label>                                                 
                        </div>                
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-7 col-xs-7"> 
                            <CharacterRow default={this.state.header.weapon1} onBlur={this.onChange} width="9" label="Weapon" id="weapon1" type="text"/>  
                        </div> 
                        <div className="col-md-1 col-xs-1">
                            <input type="radio" name="weapon1Pilot" value="1" checked={this.state.stats.weapon1Pilot == 1} onChange={e => this.onChangeStats(e.target.value, "weapon1Pilot")}/>Pilot
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <input type="radio" name="weapon1Pilot" value="2" checked={this.state.stats.weapon1Pilot == 2} onChange={e => this.onChangeStats(e.target.value, "weapon1Pilot")}/>Gunner
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={parseInt(this.state.stats.intModifier) + parseInt(this.state.header.weapon1BAB) + parseInt(this.state.header.weapon1Misc)}  width="5" label="Attack" type="tel"/>  
                        </div> 
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon1BAB} onBlur={this.onChange} width="5" label="= rangedBAB" id="weapon1BAB" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon1Misc} onBlur={this.onChange} width="5" label=" + Misc. Mods" id="weapon1Misc" type="tel"/>
                        </div>
                        <div className="col-md-2 col-xs-2">
                        <label className="control-label" htmlFor="name"> + Vehicle Int Mod</label>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={(parseInt(this.state.header.weapon1Damage) + Math.floor(parseInt(this.state.stats.heroLevel) * .5) + parseInt(this.state.header.weapon1Misc)) * parseInt(this.state.header.weapon1Multi)}  width="6" label="Damage" type="tel"/>  
                        </div> 
                        <div className="col-md-4 col-xs-4">
                            <CharacterRow default={this.state.header.weapon1Damage} onBlur={this.onChange} width="5" label="= (Weapon Damage" id="weapon1Damage" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <label className="control-label" htmlFor="name"> + 1/2 Hero Lvl + Misc Mod ) x </label>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <CharacterRow default={this.state.header.weapon1Multi} onBlur={this.onChange} width="5" label="Multiplier" id="weapon1Multi" type="tel"/>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-7 col-xs-7"> 
                            <CharacterRow default={this.state.header.weapon2} onBlur={this.onChange} width="9" label="Weapon" id="weapon2" type="text"/>  
                        </div> 
                        <div className="col-md-1 col-xs-1">
                            <input type="radio" name="weapon2Pilot" value="1" checked={this.state.stats.weapon2Pilot == 1} onChange={e => this.onChangeStats(e.target.value, "weapon2Pilot")}/>Pilot
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <input type="radio" name="weapon2Pilot" value="2" checked={this.state.stats.weapon2Pilot == 2} onChange={e => this.onChangeStats(e.target.value, "weapon2Pilot")}/>Gunner
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={parseInt(this.state.stats.intModifier) + parseInt(this.state.header.weapon2BAB) + parseInt(this.state.header.weapon2Misc)}  width="5" label="Attack" type="tel"/>  
                        </div> 
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon2BAB} onBlur={this.onChange} width="5" label="= rangedBAB" id="weapon2BAB" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon2Misc} onBlur={this.onChange} width="5" label=" + Misc. Mods" id="weapon2Misc" type="tel"/>
                        </div>
                        <div className="col-md-2 col-xs-2">
                        <label className="control-label" htmlFor="name"> + Vehicle Int Mod</label>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={(parseInt(this.state.header.weapon2Damage) + Math.floor(parseInt(this.state.stats.heroLevel) * .5) + parseInt(this.state.header.weapon2Misc)) * parseInt(this.state.header.weapon2Multi)}  width="6" label="Damage" type="tel"/>  
                        </div> 
                        <div className="col-md-4 col-xs-4">
                            <CharacterRow default={this.state.header.weapon2Damage} onBlur={this.onChange} width="5" label="= (Weapon Damage" id="weapon2Damage" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <label className="control-label" htmlFor="name"> + 1/2 Hero Lvl + Misc Mod ) x </label>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <CharacterRow default={this.state.header.weapon2Multi} onBlur={this.onChange} width="5" label="Multiplier" id="weapon2Multi" type="tel"/>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-7 col-xs-7"> 
                            <CharacterRow default={this.state.header.weapon3} onBlur={this.onChange} width="9" label="Weapon" id="weapon3" type="text"/>  
                        </div> 
                        <div className="col-md-1 col-xs-1">
                            <input type="radio" name="weapon5Pilot" value="1" checked={this.state.stats.weapon5Pilot == 1} onChange={e => this.onChangeStats(e.target.value, "weapon5Pilot")}/>Pilot
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <input type="radio" name="weapon5Pilot" value="2" checked={this.state.stats.weapon5Pilot == 2} onChange={e => this.onChangeStats(e.target.value, "weapon5Pilot")}/>Gunner
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={parseInt(this.state.stats.intModifier) + parseInt(this.state.header.weapon3BAB) + parseInt(this.state.header.weapon3Misc)}  width="5" label="Attack" type="tel"/>  
                        </div> 
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon3BAB} onBlur={this.onChange} width="5" label="= rangedBAB" id="weapon3BAB" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon3Misc} onBlur={this.onChange} width="5" label=" + Misc. Mods" id="weapon3Misc" type="tel"/>
                        </div>
                        <div className="col-md-2 col-xs-2">
                        <label className="control-label" htmlFor="name"> + Vehicle Int Mod</label>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={(parseInt(this.state.header.weapon3Damage) + Math.floor(parseInt(this.state.stats.heroLevel) * .5) + parseInt(this.state.header.weapon3Misc)) * parseInt(this.state.header.weapon3Multi)}  width="6" label="Damage" type="tel"/>  
                        </div> 
                        <div className="col-md-4 col-xs-4">
                            <CharacterRow default={this.state.header.weapon3Damage} onBlur={this.onChange} width="5" label="= (Weapon Damage" id="weapon3Damage" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <label className="control-label" htmlFor="name"> + 1/2 Hero Lvl + Misc Mod ) x </label>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <CharacterRow default={this.state.header.weapon3Multi} onBlur={this.onChange} width="5" label="Multiplier" id="weapon3Multi" type="tel"/>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-7 col-xs-7"> 
                            <CharacterRow default={this.state.header.weapon4} onBlur={this.onChange} width="9" label="Weapon" id="weapon4" type="text"/>  
                        </div> 
                        <div className="col-md-1 col-xs-1">
                            <input type="radio" name="weapon3Pilot" value="1" checked={this.state.stats.weapon4Pilot == 1} onChange={e => this.onChangeStats(e.target.value, "weapon4Pilot")}/>Pilot
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <input type="radio" name="weapon3Pilot" value="2" checked={this.state.stats.weapon4Pilot == 2} onChange={e => this.onChangeStats(e.target.value, "weapon4Pilot")}/>Gunner
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={parseInt(this.state.stats.intModifier) + parseInt(this.state.header.weapon4BAB) + parseInt(this.state.header.weapon4Misc)}  width="5" label="Attack" type="tel"/>  
                        </div> 
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon4BAB} onBlur={this.onChange} width="5" label="= rangedBAB" id="weapon4BAB" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <CharacterRow default={this.state.header.weapon4Misc} onBlur={this.onChange} width="5" label=" + Misc. Mods" id="weapon4Misc" type="tel"/>
                        </div>
                        <div className="col-md-2 col-xs-2">
                        <label className="control-label" htmlFor="name"> + Vehicle Int Mod</label>
                        </div>
                    </div>
                    <div className="row row-margin">
                        <div className="col-md-3 col-xs-3"> 
                            <CharacterRow default={(parseInt(this.state.header.weapon4Damage) + Math.floor(parseInt(this.state.stats.heroLevel) * .5) + parseInt(this.state.header.weapon4Misc)) * parseInt(this.state.header.weapon4Multi)}  width="6" label="Damage" type="tel"/>  
                        </div> 
                        <div className="col-md-4 col-xs-4">
                            <CharacterRow default={this.state.header.weapon4Damage} onBlur={this.onChange} width="5" label="= (Weapon Damage" id="weapon4Damage" type="tel"/>
                        </div>
                        <div className="col-md-3 col-xs-3">
                            <label className="control-label" htmlFor="name"> + 1/2 Hero Lvl + Misc Mod ) x </label>
                        </div>
                        <div className="col-md-2 col-xs-2">
                            <CharacterRow default={this.state.header.weapon4Multi} onBlur={this.onChange} width="5" label="Multiplier" id="weapon4Multi" type="tel"/>
                        </div>
                    </div>
                </div>
                <div className="row row-margin">
                    <div className="col-md-12 col-xs-12"> 
                        <div className="col-md-1 col-xs-1"> 
                            <label className="headline-label col-xs-2" htmlFor="name">NOTES</label>
                        </div>
                        <div className="col-md-12 col-xs-12"> 
                            <textarea rows="20" className="col-xs-12" value={this.state.header.notes} onChange={e => this.onChange(e.target.value, "notes")}></textarea>
                        </div>
                    </div>
                </div>

            </form>
        )
    } 
});