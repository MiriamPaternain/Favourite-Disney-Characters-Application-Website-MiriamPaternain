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