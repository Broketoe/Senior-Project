var savedCharacter = require('./character.json');
function CharacterStore() {
    
    let characters = [],
        keys = Object.keys(localStorage);

    if(keys.length) {
        for(let i = 0; i < keys.length; i++) {
            if(keys[i] != 'charSelection'){
                characters.push(JSON.parse(localStorage.getItem(keys[i])));
            }
        }
    }
    function getCharacter() {
        return characters;
    }

    return {
        getCharacter: getCharacter
    }
}

module.exports = CharacterStore();