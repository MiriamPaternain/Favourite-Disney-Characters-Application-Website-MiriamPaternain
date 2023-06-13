'use strict';

const resetFavBtn = document.querySelector('.resetbtn');

const handleClickResetBtn = (event) => {
    //const allLiElements = document.querySelectorAll('.js_li');
    localStorage.removeItem('localStorageFavCharacters');
    favListCharacter = [];
    favContainer.classList.add('js_hidden');
    //allLiElements.classList.remove('.favColor');
    renderFavListCharacter();
}

resetFavBtn.addEventListener('click', handleClickResetBtn);