'use client'
import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { useState } from "react"
import { userLogin } from "../actions"
import { redirect } from "next/navigation"
import { Nav } from "../components/Nav"


export default function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Box sx={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', marginTop: '15vh'}} >
            <Stack spacing={2}>
            <Typography
                fontSize="4em"
                fontWeight="bold"
                >
                Login
            </Typography>
            <form method="post" action={() => {
                 userLogin(username, password) 
                redirect('/')
                }}>
                <Stack spacing={2}>
                <TextField
                    id="standard-basic"
                    label="UserName"
                    variant="standard"
                    value={username}
                    onChange={(event) => setUserName(event.target.value)}
                    sx={{ marginTop: '30px', width: '20vw' }}
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    sx={{ marginTop: '30px', width: '20vw' }}
                />
                <Button
                    variant="contained"
                    sx={{ width: '40px', marginTop: '30px' }}
                    type="submit"
                >Login
                </Button>
                </Stack>

            </form>
            </Stack>

            {/* <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '200px'}}>
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
                 value={username} 
                 onChange={(event) => setUserName(event.target.value)} 
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
                 onClick={() => userLogin(username, password)}
                 >Login
                 </Button>
            </Box> */}
        </Box>
    )
}
