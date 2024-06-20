'use client'

import { useEffect, useReducer } from "react"
import { PokedexPokemon, Pokemon } from "../schemas/pokemon"
import { Button } from "@mui/material";

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
            return pokemon.map(p => {
                if (p.level !== null) {
                    return {...p, level: p.level + 1}
                } else {
                    return p
                }
            })
        }

        default: 
            return pokemon
    }
}

export default function TrainReducer({pokemon}: TrainProps) { 
    const [state, dispatch] = useReducer(reducer, pokemon)
    const action = { type:  PokemonCountActionKind.INCREASEALL};
    const nextstate = reducer(pokemon, action)

    console.log('pokemon next state', nextstate)

    // useEffect(() => {
    //     const updatePokemonLevels = async () => {
    //         const response = 
    //     }
    // }, [])
    
    return (
        <>
            <h1>Train</h1>
            <Button onClick={() => dispatch({type: PokemonCountActionKind.INCREASEALL})}>Increase Level</Button>
        </>
    )
}
