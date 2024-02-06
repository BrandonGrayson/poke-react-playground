'use client'

import { Box, Typography, TextField, Button } from "@mui/material"
import { useState } from "react"
import { User } from "../schemas/schemas"

export default function CreateUser({newUser}: {newUser: (email: string, password: string) => Promise<User | undefined>}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: "center" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '200px',}}>
                <Typography
                fontSize="4em"
                fontWeight="bold"
                 sx={{ }}>
                    Welcome! Create a New Account!
                </Typography>
                <TextField
                 id="standard-basic" 
                 label="Email" 
                 variant="standard" 
                 value={email} 
                 onChange={(event) => setEmail(event.target.value)} 
                 sx={{marginTop: '30px', width: '40vw'}}
                 />
                <TextField
                 id="standard-basic" 
                 label="Password" 
                 variant="standard" 
                 value={password} 
                 onChange={(event) => setPassword(event.target.value)} 
                 sx={{marginTop: '30px', width: '40vw'}}
                 />
                 <Button 
                 variant="contained" 
                 sx={{width: '40px', marginTop: '30px'}}
                 onClick={() => newUser(email, password)}
                 >Login
                 </Button>
            </Box>
        </Box>
    )
} 