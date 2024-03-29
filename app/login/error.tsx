'use client'

import { useEffect } from "react"
import { Nav } from "../components/Nav"
import { Typography, Button } from "@mui/material"
import { ErrorProps } from "../schemas/schemas"
import ErrorMessage from "../components/ErrorMessage"

export default function Error({ error, reset }: ErrorProps) {

    useEffect(() => {
        console.log('error')
    }, [error])
    return (
        <>
            <Nav />
            <Typography>There was a problem with your login request. Either try to reset or navigate to one of the other pges </Typography>
            <ErrorMessage error={error} reset={reset} />
        </>

    )
}