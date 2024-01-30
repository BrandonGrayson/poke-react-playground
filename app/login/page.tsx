'use client'
import { Box, Typography, TextField, Button } from "@mui/material"
import { useState } from "react"

export default async function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = () => {
        try {
            const response = fetch("/login", {
                method: 'POST',
                mode: 'cors',
                cache: 'default',
                credentials: 'omit',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({userName, password})
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
                 value={userName} 
                 onChange={(event) => setUserName(event.target.value)} 
                 sx={{marginTop: '30px', width: '40vw'}}
                 />
                <TextField
                 id="standard-basic" 
                 label="Password" 
                 variant="standard" 
                 value={password} 
                 onChange={(event) => setUserName(event.target.value)} 
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