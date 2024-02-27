'use client'

import { Button, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"

export default function PokeSearch() {  
    const [search, setSearch] = useState("")

    return (
        <Stack spacing={2} sx={{ marginTop: '20px', width: '400px' }}>
            <TextField
                value={search}
                sx={{ width: '300px' }}
                id="outlined-basic"
                label="Look Up Pokemon"
                variant="outlined"
                onChange={(event) => setSearch(event.target.value)} />
            <Button sx={{ width: '200px' }} variant="contained">Poke Search</Button>
        </Stack>
    )
}
