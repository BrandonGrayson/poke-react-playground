export interface PokemonResult {
    name: string,
    image: string,
    type: string
}

export interface Pokemon {
    name: string
    type: string
    level: number
    caught: boolean
    party: boolean
    user_id: number
}
