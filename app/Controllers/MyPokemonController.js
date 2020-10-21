import {
  ProxyState
} from "../AppState.js";
import {
  myPokemonService
} from "../Services/MyPokemonService.js";


function _drawMyPokemon() {
  let myPokemon = ProxyState.myPokemon
  let template = ""
  myPokemon.forEach(p => template += `<li onclick="app.myPokemonController.getActivePokemon('${p.name}')" class="pointer">${p.name}</li>`)
  document.getElementById("myPokemon").innerHTML = template
}

export default class MyPokemonController {
  constructor() {
    console.log("myPokemonController");
    ProxyState.on("myPokemon", _drawMyPokemon)
    this.getMyPokemon()
  }

  getMyPokemon() {
    try {
      myPokemonService.getMyPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  addMyPokemon() {
    console.log("test");
    try {
      myPokemonService.addMyPokemon()
    } catch (error) {
      console.error(error)
    }
  }
}