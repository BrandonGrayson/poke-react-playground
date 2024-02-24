'use client'

import { useEffect } from "react"
import { Nav } from "../components/Nav"
import { Typography, } from "@mui/material"
import { ErrorProps } from "../schemas/schemas"
import ErrorMessage from "../components/ErrorMessage"

export default function Error({error, reset}: ErrorProps) {

    useEffect(() => {
        console.log('error')
    }, [error])

    return (
        <>
            <Nav />
            <Typography> There was a problem creating your account.</Typography>
            <ErrorMessage error={error} reset={reset} />
        </>
    )
}
