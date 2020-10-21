export default class Pokemon {
    constructor(data) {
        this.name = data.name
        this.url = data.url
        this.id = data.id
        this.height = data.height
        this.weight = data.weight
        this.img = data.img || data.sprites.front_default
    }

    get Template() {

        return /*html*/ `
        <div class="text-center">
        <div class="col">
            <img class="img-fluid" src="${this.img}" alt="" srcset=""/>
            <h1>Pokemon Name: ${this.name}</h1>
            <h4>Pokemon Height: ${this.height}</h4>
            <h4>Pokemon Weight: ${this.weight}</h4>
            </div>
            <button onclick="app.myPokemonController.addMyPokemon('${this.name}')" class="btn btn-block btn-success">Add Pokemon</button>
        </div>
       `
    }
}