'use strict';

const characterList = document.querySelector('js_characters_list');

fetch('https://api.disneyapi.dev/character')
.then((response)=> response.json())
.then((data) => {
    console.log(data);
});
//# sourceMappingURL=main.js.map
