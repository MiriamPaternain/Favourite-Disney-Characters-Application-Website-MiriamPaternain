function addEventRemoveFavItem() {
  const removeItemBtn = document.querySelectorAll('.js_li--removeBtn');

  for (const eachRemoveItemBtn of removeItemBtn) {
    eachRemoveItemBtn.addEventListener('click', handleClickRemoveFavItemBtn);
  }
}

function handleClickRemoveFavItemBtn (event) {
  const id = parseInt(event.currentTarget.parentElement.id);
  const indexCharacter = favListCharacter.findIndex((data) => data._id === id);
  if (indexCharacter !== -1) {
    favListCharacter.splice(indexCharacter, 1);
  }
  localStorage.setItem(
    'localStorageFavCharacters',
    JSON.stringify(favListCharacter)
  );
  renderFavListCharacter();
};

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
          <img src=${data.imageUrl} class="characters_main--img"/>
          <p class="name js_li--name">${data.name}</p>
        </li>`;
  return html;
}

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
          <img src=${data.imageUrl} class="characters_main--img"/>
          <p class="name js_li--name">${data.name}</p>
          <button class="remove-btn js_li--removeBtn">x</button>
        </li>`;
  return html;
}

'use strict';

const resetFavBtn = document.querySelector('.resetbtn');

const handleClickResetBtn = (event) => {
    
    localStorage.removeItem('localStorageFavCharacters');
    favListCharacter = [];
    favContainer.classList.add('js_hidden');
    const allLiElements = document.querySelectorAll('.favColor');
    for(const eachLi of allLiElements){
    eachLi.classList.remove('favColor')};
    renderFavListCharacter();
}

resetFavBtn.addEventListener('click', handleClickResetBtn);
'use strict';
const inputSearch = document.querySelector('.js_text_input');
const btnSearch = document.querySelector('.js_search_btn');

const handleClickBtn = (event) => {
    event.preventDefault();
    const valueSearch = inputSearch.value;
    console.log(valueSearch);
    const filterApiList = listCharactersApi.filter((character) =>
    character.name.toLowerCase().includes(valueSearch.toLowerCase()));
    console.log(filterApiList);
    renderCharacterList(filterApiList);
}

btnSearch.addEventListener('click', handleClickBtn);


//# sourceMappingURL=main.js.map
