'use client'

import { Box, Card, CardContent, Typography } from "@mui/material"
import { PokedexPokemon } from "../schemas/pokemon"

interface PokeCardProps {
    pokemon: PokedexPokemon[]
}


export default function PokeCard({pokemon}: PokeCardProps ) {
    if (pokemon !== null) {
        return (
            <Box>
                {
                    pokemon.map((pokeData) => {
                        return (
                            <Card>
                                <CardContent >
                                    <Typography>{pokeData.name}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Box>

        )
    }

    return (
        <>
            <Typography>Empty pokemon card</Typography>        
        </>
    )
}