'use strict';

const ulCharactersList = document.querySelector('.js_characters_list');
const ulFavCharactersList = document.querySelector('.js_characters_fav');

let listCharactersApi = [];
let favListCharacter = [];

fetch('https://api.disneyapi.dev/character')
.then((response)=> response.json())
.then((data) => {
    console.log(data);
    listCharactersApi = data.data;
    renderCharacterList(listCharactersApi);
});

function renderCharacterList (listData){
    for(const eachCharacter of listData){
        ulCharactersList.innerHTML += renderCharacter(eachCharacter);
    }
    addEventCharacter();
}

function addEventCharacter(){
    const allLiElements = document.querySelectorAll('.js_li');
    for(const eachLi of allLiElements){
        eachLi.addEventListener("click", handleClick);
    }
}


function renderCharacter(data){
let html = `<li id = "${data._id}" class="characters_container--li js_li">
          <img src="${data.imageUrl}"/>
          <p class="name js_li--name">"${data.name}"</p>
        </li>`;
        return html;
}

function handleClick (event){
    const id = event.currentTarget._id;
    console.log(id);

const selectedCharacter = listCharactersApi.find((character) => character._id === id);

const indexCharacter = favListCharacter.findIndex((character) => character._id === id); 

if(indexCharacter === -1) {
favListCharacter.push(selectedCharacter);
} else {
    favListCharacter.splice(indexCharacter, 1);
    console.log(favListCharacter);
}
renderFavListCharacter();
}

function renderFavListCharacter(){
    for(const eachFavCharacter of favListCharacter){
        ulFavCharactersList.innerHTML += renderCharacter(eachFavCharacter)
    }
}
//# sourceMappingURL=main.js.map
