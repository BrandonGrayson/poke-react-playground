'use client'

import { Button, Stack, TextField, Card, CardActions, CardContent, CardMedia, } from "@mui/material"
import { useState } from "react"
import { searchPokemon } from "../actions"
import { PokemonResult } from "../schemas/pokemon"

export default function PokeSearch() {
    const [search, setSearch] = useState("")
    const [pokemon, setPokemon] = useState<PokemonResult | undefined>({
        name: '',
        image: '',
        type: ''
    })

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={pokemon?.image}
                    title="green iguana"
                />
            </Card>
            <Stack spacing={2} sx={{ marginTop: '20px', width: '400px' }}>
                <TextField
                    value={search}
                    sx={{ width: '300px' }}
                    id="outlined-basic"
                    label="Look Up Pokemon"
                    variant="outlined"
                    onChange={(event) => setSearch(event.target.value)} />
                <Button
                    sx={{ width: '200px' }}
                    variant="contained"
                    onClick={async () => {
                        const pokeResults = await searchPokemon(search)
                        setPokemon(pokeResults)

                    }}
                >Poke Search
                </Button>
            </Stack>
        </>

    )
}
