var React = require("react");
var actions = require("../actions/CharacterActions");

module.exports = React.createClass({
    changeHandler: function(e, key) {
        if(typeof this.props.change === 'function'){
            this.props.change(e, key, this.props.index);
        }
    },
    remove: function(event){
         if(typeof this.props.change === 'function'){
            this.props.remove(event, this.props.index);
        }
    },
    render:function(){
        return(
           <div className="row">
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "name")} value={this.props.name} />
                </div>
                <div className="col-xs-1">
                    <input type="text" className="form-control" value={this.props.attack} />
                </div>
                <div className="col-xs-1">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "damage")} value={this.props.damage} />
                </div>
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "crit")} value={this.props.crit} />
                </div>                
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "type")} value={this.props.type} />
                </div>
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "notes")} value={this.props.notes} />
                </div>
                <div className="col-md-2">
                    <button className="addButton" onClick={e => this.remove(e)} >Remove Weapon</button>
                </div> 
            </div>
        )
    }
})