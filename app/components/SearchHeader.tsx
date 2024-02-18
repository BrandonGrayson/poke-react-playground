'use client'

import { Button, Stack } from "@mui/material"
import SearchField from "./SearchField"
import { useState } from "react"

export default function SearchHeader() {
    const [search, setSearch] = useState("") 

    return (
        <Stack spacing={2} sx={{marginTop: '20px'}}>
         <SearchField search={search} setSearch={setSearch}/>
         <Button sx={{width: '200px'}}  variant="contained">Poke Search</Button>
        </Stack>       
    )
}