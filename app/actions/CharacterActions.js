var state;
module.exports = {
    setInitialState: function(value) {
        state = value;
    },
    getState: function() {
        return state;
    },
    onChange: function(event, key) {
        this.setState( {
            [key] : event
        });
        this.state.header[key] = event;
        localStorage.setItem("sagaChar", JSON.stringify(this.state.__proto__));

    },
    onBlur: function(event) {
        event.defaultPrevented();
        state = {};
        console.log(event.target.value);
    }
}