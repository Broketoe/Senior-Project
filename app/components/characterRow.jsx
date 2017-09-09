
var React = require("react");
var actions = require("../actions/CharacterActions");

module.exports = React.createClass({
    changeHandler: function(e, key) {
        if(typeof this.props.onBlur === 'function'){
            this.props.onBlur(e, key);
        }
    },
    render:function(){
        var labelClass = "control-label col-xs-" + (12 - this.props.width);
        var formClass = "col-xs-" + this.props.width;
        this.state = {value: this.props.default, name: this.props.id, label: this.props.label, placeholder: this.props.placeholder, type: this.props.type};
        return(
            <div className="row">
                <label className={labelClass} htmlFor="name">{this.state.label}: </label>
                <div className={formClass}>
                    <input type={this.state.type} className="form-control" onChange={e => this.changeHandler(e.target.value, this.state.name)} value={this.state.value} id={this.state.name} name={this.state.name} placeholder={this.state.placeholder} />
                </div>
            </div>
        )
    }
})
