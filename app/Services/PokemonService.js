import {
  ProxyState
} from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import {
  pokemonApi
} from "../Services/AxiosService.js"

class PokemonService {
  constructor() {
    this.getPokemon()
  }

  async getPokemon() {
    let res = await pokemonApi.get("/?limit=500")
    ProxyState.pokemon = res.data.results
  }
  async getActivePokemon(name) {
    let res = await pokemonApi.get(name)
    ProxyState.activePokemon = new Pokemon(res.data)

  }
}

export const pokemonService = new PokemonService();