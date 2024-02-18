'use client'
import { TextField } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface SearchProps {
    search: string,
    setSearch: Dispatch<SetStateAction<string>> 
}

export default function SearchField({search, setSearch}: SearchProps) {
    
    return (
        <TextField
         value={search} 
         sx={{width: '300px'}} 
         id="outlined-basic" 
         label="Look Up Pokemon" 
         variant="outlined" 
         onChange={(event) => setSearch(event.target.value)} />
    )
}