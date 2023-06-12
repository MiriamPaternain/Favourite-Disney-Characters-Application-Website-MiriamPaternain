const removeItmBtn = document.querySelector('.js_li--removeBtn');

const handleClickRemoveFavItemBtn = (event) => {
    const id = parseInt(event.currentTarget.id); 
    const indexCharacter = favListCharacter.findIndex((data) => data._id === id); 
    if(indexCharacter !== -1){
   favListCharacter.splice(indexCharacter, 1);}
   localStorage.setItem('localStorageFavCharacters', JSON.stringify(favListCharacter));
  renderFavListCharacter();
}
removeItmBtn.addEventListener('click', handleClickRemoveFavItemBtn);