'use client'

import { useEffect, useReducer, useState } from "react"
import { PokedexPokemon, Pokemon } from "../schemas/pokemon"
import { Button, Typography, Card, CardMedia, CardContent, CardActions, Stack} from "@mui/material";
import PokeCard from "./PokeCard";
import { getAllUsersPokemon, trainAllUsersPokemon } from "../api/route";

interface initialStateType {
    pokemon: PokedexPokemon[],
    loading: boolean,
    error: string | null
}

enum PokemonCountActionKind {
    INCREASEALL = "INCREASEALL",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_FAILURE = 'FETCH_FAILURE'
}

interface TrainProps {
    fetchedPokemon: PokedexPokemon[]
    token: string | null
}

interface PokemonAction {
    type: PokemonCountActionKind;
    payload?: PokedexPokemon[]
}

function reducer (state: initialStateType, action: PokemonAction): initialStateType {
    const { type, payload } = action;

    switch (type) {
        case PokemonCountActionKind.INCREASEALL: {
            return {
                ...state,
                pokemon: state.pokemon.map(p => {
                    if (p.level !== null) {
                        return { ...p, level: p.level + 1 }
                    } else {
                        return p
                    }
                })
            };
        }

        default: 
            return state
    }
}

function createInitialState(fetchedPokemon: PokedexPokemon[]): initialStateType {

    return {
        pokemon: fetchedPokemon,
        loading: false,
        error: null
    }
}

export default function TrainReducer({fetchedPokemon, token}: TrainProps) { 
    // const [pokemon, setPokemon] = useState(fetchedPokemon)

    const [state, dispatch] = useReducer(reducer, fetchedPokemon, createInitialState)
    // const action = { type:  PokemonCountActionKind.INCREASEALL};
    // const nextstate = reducer(fetchedPokemon, action)
    const [isSelected, SetIsSelected] = useState<PokedexPokemon[]>([])
    
    // console.log('pokemon next state', nextstate)

    // There needs to be a button to send pokemon updates to the db
    // 


    
    return (
        <>
            <Typography>Choose which pokemon should be trained</Typography>
            <PokeCard pokemon={state.pokemon} isSelected={isSelected} SetIsSelected={SetIsSelected} />
            <Stack direction="row" spacing={2}>
            <Typography>Pokemon Selected For Training</Typography>
            <Button variant="contained" onClick={async () => {
                if (token) {
                    dispatch(
                        {"type": PokemonCountActionKind.INCREASEALL},
                    )
                    
                    // const updatedPokemon = await trainAllUsersPokemon(token, pokemon)
                    // setPokemon(updatedPokemon)
                }
            }}>Train</Button>
            </Stack>

            <Stack direction="row" spacing={2}>
            {
                isSelected.map((pokeData) => {
                    return (
                        <Card key={pokeData.id} sx={{ maxWidth: '300px', marginBottom: '15px' }} >
                        <CardMedia
                            component="img"
                            alt="Pokemon"
                            height="180"
                            image={pokeData.image}
                        />
    
                        <CardContent >
                            <Typography>{pokeData.name}</Typography>
                            <Typography>{pokeData.type}</Typography>
                            <Typography>{pokeData.level}</Typography>
                        </CardContent>

                        <CardActions>
                            <Button onClick={() => SetIsSelected(isSelected.filter((selectedPokemon) => selectedPokemon.id !== pokeData.id))}>Remove</Button>
                        </CardActions>
                        
                    </Card>
                    )
                })
            }
            </Stack>
        </>
    )
}
