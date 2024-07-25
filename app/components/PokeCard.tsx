'use client'

import { Button, Card, CardActions, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import { PokedexPokemon } from "../schemas/pokemon"
import { Dispatch, SetStateAction } from "react"

interface PokeCardProps {
    pokemon: PokedexPokemon[]
    isSelected: PokedexPokemon[]
    SetIsSelected: Dispatch<SetStateAction<PokedexPokemon[]>>
}

export default function PokeCard({ pokemon, isSelected, SetIsSelected }: PokeCardProps) {
    if (pokemon !== null) {
        return (
            <Grid container>
                <Grid item xs={12}>
                    {
                        pokemon ? 
                        <Stack direction={{xs: 'column', lg: 'row'}} spacing={2}>
                        {
                            pokemon.map((pokeData) => {
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
                                            <Button variant="contained" onClick={() => {
                                                SetIsSelected([...isSelected, pokeData])
                                            }}>Select</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </Stack>
                    : null
                    }
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