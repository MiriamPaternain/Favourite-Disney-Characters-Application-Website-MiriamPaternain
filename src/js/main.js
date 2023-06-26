'use strict';

const ulCharactersList = document.querySelector('.js_characters_list');
const ulFavCharactersList = document.querySelector('.js_characters_fav');
const favContainer = document.querySelector('.js_hidden');
let listCharactersApi = [];
let favListCharacter = [];

const favCharacterLocalStorage = JSON.parse(
  localStorage.getItem('localStorageFavCharacters')
);

openPage();
function openPage() {
  if (favCharacterLocalStorage) {
    favListCharacter = favCharacterLocalStorage;
    renderFavListCharacter(favListCharacter);
  }
  fetch('https://api.disneyapi.dev/character')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      listCharactersApi = data.data;
      renderCharacterList(listCharactersApi);
    });
}

function renderCharacterList(listData) {
  ulCharactersList.innerHTML = '';
  for (const eachCharacter of listData) {
    ulCharactersList.innerHTML += renderCharacter(eachCharacter);
  }
  addEventCharacter();
}

function addEventCharacter() {
  const allLiElements = document.querySelectorAll('.js_li');
  for (const eachLi of allLiElements) {
    eachLi.addEventListener('click', handleClick);
  }
}

function renderCharacter(data) {
  let html = `<li id = ${data._id} class="characters_main--li js_li">
          <div class="characters_main--imgContainer"><img src=${data.imageUrl} class="characters_main--img"/></div>
          <p class="characters_main--name js_li--name">${data.name}</p>
          
        </li>`;
  return html;
}

/* function text {

} */

function handleClick(event) {
  const id = parseInt(event.currentTarget.id);
  console.log(id); //para clickar en cualquier parte del elemento
  const selectedCharacter = listCharactersApi.find((data) => data._id === id);
  const indexCharacter = favListCharacter.findIndex((data) => data._id === id);

  if (indexCharacter === -1) {
    favListCharacter.push(selectedCharacter);
    event.currentTarget.classList.add('favColor');
    favContainer.classList.remove('js_hidden');
  } else {
    favListCharacter.splice(indexCharacter, 1);
    event.currentTarget.classList.remove('favColor');
  }
  localStorage.setItem(
    'localStorageFavCharacters',
    JSON.stringify(favListCharacter)
  );
  renderFavListCharacter();
}

function renderFavListCharacter() {
  ulFavCharactersList.innerHTML = ''; //para limpiar la lista antes de renderizar los nuevos
  for (const eachFavCharacter of favListCharacter) {
    ulFavCharactersList.innerHTML += renderFavCharacter(eachFavCharacter);
  }
  addEventRemoveFavItem();
}

function renderFavCharacter(data) {
  let html = `<li id=${data._id} class="characters_main--li js_li">
          <div class="characters_fav--img-container">
            <img src=${data.imageUrl} class="characters_fav--img"/>
          </div>
          <p class="characters_fav--name js_li--name">${data.name}</p>
        </li>
        <div class="remove-btn-container"><button class="remove-btn js_li--removeBtn">x</button></div>`;
  return html;
}


