import {
  ProxyState
} from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import {
  myPokemonApi
} from "../Services/AxiosService.js"


class MyPokemonService {

  constructor() {
    console.log(("My Pokemon Service"));
  }
  async addMyPokemon() {
    let res = await myPokemonApi.post("", ProxyState.activePokemon)
    console.log(res)
    ProxyState.myPokemon = [...ProxyState.myPokemon, new Pokemon(res.data.data)]
  }
  async getMyPokemon() {
    let res = await myPokemonApi.get("")
    console.log(res)
    ProxyState.myPokemon = res.data.data.map(p => new Pokemon(p))
  }

}
export const myPokemonService = new MyPokemonService();