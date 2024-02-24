'use client'

import { Box, Typography, TextField, Button } from "@mui/material"
import { useState } from "react"

export default function CreateUser({newUser}: {newUser: (username: string, password: string) => void}) {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [inputError, setInputError] = useState(false)

    return(
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: "center" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '200px',}}>
                <Typography
                fontSize="4em"
                fontWeight="bold"
                 >
                    Welcome! Create a New Account!
                </Typography>
                <TextField
                 id="standard-basic" 
                 label="User Name" 
                 variant="standard" 
                 required
                 value={username} 
                 error={inputError}
                 onChange={(event) => setUserName(event.target.value)} 
                 sx={{marginTop: '30px', width: '40vw'}}
                 />
                <TextField
                 id="standard-basic" 
                 label="Password" 
                 required
                 error={inputError}
                 type="password"
                 variant="standard" 
                 value={password} 
                 onChange={(event) => setPassword(event.target.value)} 
                 sx={{marginTop: '30px', width: '40vw'}}
                 />
                 <Button 
                 variant="contained" 
                 sx={{width: '40px', marginTop: '30px'}}
                 onClick={() => {
                    if (username === "" || password === "") {
                        setInputError(true)
                    }
                    newUser(username, password)
                 }}
                 >Login
                 </Button>
            </Box>
        </Box>
    )
} 
