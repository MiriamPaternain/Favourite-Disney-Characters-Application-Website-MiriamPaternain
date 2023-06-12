'use strict';

const resetFavBtn = document.querySelector('.resetbtn');

const handleClickResetBtn = (event) => {
    localStorage.removeItem('localStorageFavCharacters');
    favListCharacter = [];
    renderFavListCharacter();
}

resetFavBtn.addEventListener('click', handleClickResetBtn);