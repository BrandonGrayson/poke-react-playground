'use client'

import "../styles/Homepage.css"

import { Box, Typography, Grid, Card, CardMedia } from "@mui/material"

export default function Homepage() {
    return (
        <Grid container>
            <Grid item id="home-grid" xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', border: '1px solid blue' }}>
                <Box sx={{ flexDirection: 'column', }} id="header-text">
                    <Typography id="pokemon-title" sx={{ fontWeight: 'Bold', color: '#FFCC00' }} variant="h1">Pokemon</Typography>
                    <Typography id="subtitle-title" sx={{ fontWeight: 'Bold', color: '#e5e4ed'}} variant="subtitle1">Gotta Catch Em All!</Typography>
                </Box>
            </Grid>

            <Grid id="home-grid" item xs={12} lg={6} sx={{ border: '1px solid black'}}>
                <Box id="iframe-box" sx={{border: '1px solid red', width: '100%'}}>
                    <iframe id="iframe" src="https://www.youtube.com/embed/rg6CiPI6h2g" title="Pokemon Theme Song" />
                </Box>
            </Grid>

            <Grid mt={3} item xs={12}>
                <Typography variant="h3" sx={{width: '100%', display: 'flex', justifyContent: 'center', color: 'red'}}>Become A Pokemon Master</Typography>
                <Card id="pokedex-card" sx={{border: '1px solid red'}}>
                    <CardMedia component="img" id="pokedex-img" alt="Pokedex" image="./img/pokedex1.png"/>
                </Card>
            </Grid>
        </Grid>
    )
}
