export interface PokemonResult {
    name: string,
    image: string,
    type: string
}

export interface Pokemon {
    name: string
    type: string
    level: number | null
    caught: boolean
    image: string
    party: boolean
}

export interface PokedexPokemon extends Pokemon {
    id: number
}
