'use client'

import { ErrorProps } from "../schemas/schemas"
import { Typography, Button } from "@mui/material"

export default function ErrorMessage({ error, reset }: ErrorProps) {
    return (
        <>
            {
                error.message ??
                <Typography>{error.message}</Typography>
            }
            <Button onClick={() => reset()}>Retry</Button>
        </>
    )
}
