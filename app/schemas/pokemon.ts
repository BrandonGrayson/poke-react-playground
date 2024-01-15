export interface RawPokemonResult {
    count: number
    next: string
    previous: string | null
    result: []
}

export interface PokemonResults {
    result: []
}
