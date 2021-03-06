var React = require("react");
var actions = require("../actions/CharacterActions");

module.exports = React.createClass({
    changeHandler: function(e, key) {
        if(typeof this.props.onBlur === 'function'){
            this.props.onBlur(e, key);
        }
    },
    render:function(){
        this.state = {value: this.props.default, name: this.props.id, label: this.props.label, level: this.props.level, bonus: this.props.classbonus, misc: this.props.misc, ability : this.props.ability};
        this.state.total = 10 + parseInt(this.state.level) + parseInt(this.state.bonus) + parseInt(this.state.ability) + parseInt(this.state.misc);
        return(
           <div className="row">
                <label className="control-label col-xs-2" htmlFor="name">{this.state.label}: </label>
                <div className="col-xs-2">
                    <input type="text" className="form-control" value={this.state.total} />
                </div>
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "levelOrArmor" + this.state.name)} value={this.state.level} id="levelOrArmor" />
                </div>
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "classBonus" + this.state.name)} value={this.state.bonus} id={"classBonus" + this.state.name} />
                </div>
                <div className="col-xs-2">
                    <input type="text" className="form-control" value={this.state.ability} id={"ability" + this.state.name} />
                </div>
                <div className="col-xs-2">
                    <input type="text" className="form-control" onChange={e => this.changeHandler(e.target.value, "misc" + this.state.name)} value={this.state.misc} id={"misc" + this.state.name} />
                </div>
            </div>
        )
    }
})