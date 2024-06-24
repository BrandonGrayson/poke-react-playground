'use client'

import { useEffect, useReducer, useState } from "react"
import { PokedexPokemon, Pokemon } from "../schemas/pokemon"
import { Button, Typography, Card, CardMedia, CardContent, CardActions, Stack} from "@mui/material";
import PokeCard from "./PokeCard";

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
    const [isSelected, SetIsSelected] = useState<PokedexPokemon[]>([])

    console.log('pokemon next state', nextstate)

    // useEffect(() => {
    //     const updatePokemonLevels = async () => {
    //         const response = 
    //     }
    // }, [])

    // Users need to be able to select pokemon for training
    // move the pokecard rendering into the train reducer component
    // Add a button to the pokecard for selecting a pokemon
    // after pokemon have been selected, there should be another button to send the new pokemon data to the db
    // we'll have an isSelected array. This array will represent the pokemon that the user has selected to be trained.
    
    return (
        <>
            <h1>Choose which pokemon should be trained</h1>
            <PokeCard pokemon={pokemon} isSelected={isSelected} SetIsSelected={SetIsSelected} />
            <Typography>Pokemon Selected For Training</Typography>
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
