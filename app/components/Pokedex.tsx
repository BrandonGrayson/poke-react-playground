'use client'

import { useState } from "react"
import { PokedexPokemon } from "../schemas/pokemon"
import PokeSearch from "../components/PokeSearch";
import PokeDex from "../components/PokeTable/PokeDex";

interface PokemonPageProps {
    pokemon: PokedexPokemon[]
    session: string
}

// there seems to be an issue with pokemon and pokedex pokemon.

export default function PokedexPage({ pokemon, session }: PokemonPageProps) {
    const [pokedexPokemon, setPokedexPokemon] = useState<PokedexPokemon[]>(pokemon)

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <PokeSearch session={session} setPokedexPokemon={setPokedexPokemon} pokedexPokemon={pokedexPokemon} />
            
            <PokeDex pokemon={pokedexPokemon} session={session} setPokedexPokemon={setPokedexPokemon}/>
        </div>
    )
}
