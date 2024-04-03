export interface PokemonResult {
    name: string,
    image: string,
    type: string
}

export interface Pokemon {
    name: string
    type: string
    level: number | undefined
    caught: boolean
    image: string
    party: boolean
    user_id: number | null
}
