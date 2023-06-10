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
    const id = event.currentTarget.id;
    console.log(id);
}
