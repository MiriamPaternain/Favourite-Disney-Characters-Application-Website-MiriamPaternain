'use strict';
const inputSearch = document.querySelector('.js_text_input');
const btnSearch = document.querySelector('.js_search_btn');
const btnLog = document.querySelector('.js_logBtn');

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

const handleClickLog = (ev) => {
    for( const eachFavName of favListCharacter){
console.log(eachFavName.name);
    }
    
}

btnLog.addEventListener('click', handleClickLog);