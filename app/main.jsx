//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var CharacterController = require("./components/CharacterController.jsx");
function render(){
    ReactDOM.render(<CharacterController/>, document.getElementById("container"));    
}

render();