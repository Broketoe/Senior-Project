var React = require("react");
var actions = require("../actions/CharacterActions");

module.exports = React.createClass({
    changeHandler: function(e, key) {
        if(typeof this.props.change === 'function'){
            this.props.change(e, key, this.props.index, this.props.id);
        }
    },
    remove: function(event){
        if(typeof this.props.change === 'function'){
            this.props.remove(event, this.props.index, this.props.id);
        }
    },
    render:function(){
        return(
            <div className="row">
                <div className="col-xs-8">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "name")} value={this.props.name} />
                </div>
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "weight")} value={this.props.weight} />
                </div>
                <div className="col-md-2">
                    <button className="addButton" onClick={e => this.remove(e)} >Remove</button>
                </div> 
            </div>
        )
    }
})