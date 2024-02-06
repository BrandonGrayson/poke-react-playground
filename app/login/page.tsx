'use client'
import { Box, Typography, TextField, Button } from "@mui/material"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = () => {
        try {
            const response = fetch("", {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                credentials: 'omit',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password})
            })
        } catch(error) {
            console.log('error', error)
        }
    }
    return (
        <Box sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: "center" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '200px',}}>
                <Typography
                fontSize="4em"
                fontWeight="bold"
                 sx={{ marginRight: "auto", marginLeft: "auto",}}>
                    Login
                </Typography>
                <TextField
                 id="standard-basic" 
                 label="UserName" 
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
                 sx={{marginTop: '30px'}}
                 />
                 <Button 
                 variant="contained" 
                 sx={{width: '40px', marginTop: '30px'}}
                 onClick={userLogin}
                 >Login
                 </Button>
            </Box>

        </Box>
    )
}