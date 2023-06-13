"use strict";const ulCharactersList=document.querySelector(".js_characters_list"),ulFavCharactersList=document.querySelector(".js_characters_fav"),favContainer=document.querySelector(".js_hidden");let listCharactersApi=[],favListCharacter=[];const favCharacterLocalStorage=JSON.parse(localStorage.getItem("localStorageFavCharacters"));function openPage(){favCharacterLocalStorage&&(favListCharacter=favCharacterLocalStorage,renderFavListCharacter(favListCharacter)),fetch("https://api.disneyapi.dev/character").then(e=>e.json()).then(e=>{console.log(e),listCharactersApi=e.data,renderCharacterList(listCharactersApi)})}function renderCharacterList(e){ulCharactersList.innerHTML="";for(const a of e)ulCharactersList.innerHTML+=renderCharacter(a);addEventCharacter()}function addEventCharacter(){const e=document.querySelectorAll(".js_li");for(const a of e)a.addEventListener("click",handleClick)}function renderCharacter(e){return`<li id = ${e._id} class="characters_main--li js_li">\n          <img src=${e.imageUrl} class="characters_main--img"/>\n          <p class="name js_li--name">${e.name}</p>\n        </li>`}function handleClick(e){const a=parseInt(e.currentTarget.id);console.log(a);const t=listCharactersApi.find(e=>e._id===a),r=favListCharacter.findIndex(e=>e._id===a);-1===r?(favListCharacter.push(t),e.currentTarget.classList.add("favColor"),favContainer.classList.remove("js_hidden")):(favListCharacter.splice(r,1),e.currentTarget.classList.remove("favColor")),localStorage.setItem("localStorageFavCharacters",JSON.stringify(favListCharacter)),renderFavListCharacter()}function renderFavListCharacter(){ulFavCharactersList.innerHTML="";for(const e of favListCharacter)ulFavCharactersList.innerHTML+=renderFavCharacter(e);addEventRemoveFavItem()}function renderFavCharacter(e){return`<li id=${e._id} class="characters_main--li js_li">\n          <img src=${e.imageUrl} class="characters_main--img"/>\n          <p class="name js_li--name">${e.name}</p>\n          <button class="remove-btn js_li--removeBtn">x</button>\n        </li>`}function addEventRemoveFavItem(){const e=document.querySelectorAll(".js_li--removeBtn");for(const a of e)a.addEventListener("click",handleClickRemoveFavItemBtn)}function handleClickRemoveFavItemBtn(e){const a=parseInt(e.currentTarget.parentElement.id),t=favListCharacter.findIndex(e=>e._id===a);-1!==t&&favListCharacter.splice(t,1),localStorage.setItem("localStorageFavCharacters",JSON.stringify(favListCharacter)),renderFavListCharacter()}openPage();const resetFavBtn=document.querySelector(".resetbtn"),handleClickResetBtn=e=>{localStorage.removeItem("localStorageFavCharacters"),favListCharacter=[],favContainer.classList.add("js_hidden");const a=document.querySelectorAll(".favColor");for(const e of a)e.classList.remove("favColor");renderFavListCharacter()};resetFavBtn.addEventListener("click",handleClickResetBtn);const inputSearch=document.querySelector(".js_text_input"),btnSearch=document.querySelector(".js_search_btn"),handleClickBtn=e=>{e.preventDefault();const a=inputSearch.value;console.log(a);const t=listCharactersApi.filter(e=>e.name.toLowerCase().includes(a.toLowerCase()));console.log(t),renderCharacterList(t)};btnSearch.addEventListener("click",handleClickBtn);