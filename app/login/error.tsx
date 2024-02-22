'use client'

import { useEffect } from "react"
import { Nav } from "../components/Nav"
import { Typography, Button } from "@mui/material"

interface ErrorProps {
    error: Error & { digest?: string },
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {

    useEffect(() => {
        console.log('error')
    }, [error])
    return (
        <>
            <Nav />
            <Typography>There Was a problem with your Request</Typography>
            {
                error.message ?? 
                <Typography>{error.message}</Typography>
            }
            <Button onClick={() => reset()}>Retry</Button>
        </>

    )
}