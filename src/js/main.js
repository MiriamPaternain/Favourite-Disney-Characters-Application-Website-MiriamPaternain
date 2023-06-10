'use strict';

const charactersList = document.querySelector('.js_characters_list');

let listCharactersApi = [];

fetch('https://api.disneyapi.dev/character')
.then((response)=> response.json())
.then((data) => {
    console.log(data);
    listCharactersApi = data.data;
    renderCharacterList(listCharactersApi);
});

function renderCharacterList (listData){
    for(const eachCharacter of listData){
        charactersList.innerHTML += renderCharacter(eachCharacter);
    }
}

function renderCharacter(data){
let html = `<li id = "${data._id}" class="js_li">
          <img src="${data.imageUrl}" class="img js_li--img" alt=""/>
          <p class="name js_li--name">"${data.name}"</p>
        </li>`;
        return html;
}