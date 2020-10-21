import {
  ProxyState
} from "../AppState.js";
import {
  pokemonService
} from "../Services/PokemonService.js";

//Private
function _drawPokemon() {
  let pokemon = ProxyState.pokemon
  let template = ""
  pokemon.forEach(p => template += `<li onclick="app.pokemonController.getActivePokemon('${p.name}')" class="pointer">${p.name}</li>`)
  document.getElementById("pokemonList").innerHTML = template
}

function _drawActivePokemon() {
  if (ProxyState.activePokemon) {
    document.getElementById("activePokemon").innerHTML = ProxyState.activePokemon.Template;
  } else {
    document.getElementById("activePokemon").innerHTML = ""
  }
}

//Public
export default class PokemonController {
  constructor() {
    ProxyState.on("pokemon", _drawPokemon);
    _drawPokemon()
    ProxyState.on("activePokemon", _drawActivePokemon)
  }


  getPokemon() {
    try {
      pokemonService.getPokemon()
    } catch (error) {
      console.log(error)
    }
  }

  getActivePokemon(url) {
    try {
      pokemonService.getActivePokemon(url)
    } catch (error) {

    }
  }
}