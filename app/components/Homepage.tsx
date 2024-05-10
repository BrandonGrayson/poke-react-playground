'use client'
import "../styles/Homepage.css"

import { Box, Typography, Grid } from "@mui/material"

export default function Homepage() {
    return (
        <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: '5em' }}>
                <Box sx={{ flexDirection: 'column', }}>
                    <Typography id="pokemon" sx={{ fontWeight: 'Bold', color: '#FFCC00' }} variant="h1">Pokemon</Typography>
                    <Typography id="subtitle1" sx={{ fontWeight: 'Bold', color: '#e5e4ed', fontSize: '3em' }} variant="subtitle1">Gotta Catch Em All!</Typography>
                </Box>
            </Grid>

            <Grid item xs={12} sx={{ marginTop: '4em'}} id="sub-grid">
                <Box id="sub-header">
                    <Typography sx={{ marginLeft: '1em' }} variant="h2">Become A</Typography>
                    <Typography sx={{ marginLeft: '1em', fontWeight: "Bold" }} variant="h2"> Pokemon Master</Typography>
                </Box>
                <Box id="iframe-box">
                    <iframe id="iframe" src="https://www.youtube.com/embed/rg6CiPI6h2g" title="Pokemon Theme Song" />
                </Box>
            </Grid>


        </Grid>

    )
}
