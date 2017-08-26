//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var CharacterHeadline = require("./components/CharacterSheet.jsx");
var characterStore = require("./stores/characterStore");
var _character = characterStore.getCharacter();
console.log(CharacterHeadline);
function render(){
    ReactDOM.render(<CharacterHeadline  character={_character} />, document.getElementById("container"));    
}

render();