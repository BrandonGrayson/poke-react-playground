import { useReducer } from "react"
import { PokedexPokemon, Pokemon } from "../schemas/pokemon"

enum PokemonCountActionKind {
    INCREASEALL = "INCREASEALL"
}

interface TrainProps {
    pokemon: PokedexPokemon[]
}

interface PokemonAction {
    type: PokemonCountActionKind;
}

function reducer (pokemon: PokedexPokemon[], action: PokemonAction) {
    const { type } = action;

    switch (type) {
        case PokemonCountActionKind.INCREASEALL: {
            pokemon.map(p => {
                if (p.level !== null) {
                    return p.level + 1
                } else {
                    return p
                }
            })
        }

        default: 
            return pokemon
    }
}

export default function Train({pokemon}: TrainProps) { 
    const [state, dispatch] = useReducer(reducer, pokemon)
    
    return (
        <>
            <h1>Train</h1>
        </>
    )
}