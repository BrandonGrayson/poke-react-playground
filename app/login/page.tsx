'use client'
import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { userLogin } from "../actions"
import { redirect } from "next/navigation"
import { Nav } from "../components/Nav"

export default function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [inputError, setInputError] = useState(false)

    return (
        <Box sx={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', marginTop: '15vh'}} >
            <Stack spacing={2}>
            <Typography
                fontSize="4em"
                fontWeight="bold"
                >
                Login
            </Typography>
            <form action={() => {
                if (username === "" || password === "") {
                    setInputError(true)
                }
                 userLogin(username, password) 
                redirect('/')
                }}>
                <Stack spacing={2}>
                <TextField
                    id="standard-basic"
                    label="UserName"
                    variant="standard"
                    required
                    error={inputError}
                    value={username}
                    onChange={(event) => setUserName(event.target.value)}
                    sx={{ marginTop: '30px', width: '20vw' }}
                />
                <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    required
                    type="password"
                    error={inputError}
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
        </Box>
    )
}
