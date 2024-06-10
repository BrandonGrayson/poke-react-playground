'use client'

import { Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import { PokedexPokemon } from "../schemas/pokemon"

interface PokeCardProps {
    pokemon: PokedexPokemon[]
}


export default function PokeCard({ pokemon }: PokeCardProps) {
    if (pokemon !== null) {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Stack direction={{xs: 'column', lg: 'row'}} spacing={2}>
                        {
                            pokemon.map((pokeData) => {
                                return (
                                    <Card sx={{ maxWidth: '300px', marginBottom: '15px' }} >
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
                                    </Card>
                                )
                            })
                        }
                    </Stack>
                </Grid>
            </Grid>


        )
    }

    return (
        <>
            <Typography>Empty pokemon card</Typography>
        </>
    )
}