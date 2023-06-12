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
