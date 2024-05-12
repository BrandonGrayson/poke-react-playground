'use client'

import "../styles/Homepage.css"

import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material"

export default function Homepage() {
    return (
        <Grid container>
            <Grid item id="home-grid" xs={12} lg={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ flexDirection: 'column', }} id="header-text">
                    <Typography id="pokemon-title" sx={{ fontWeight: 'Bold', color: '#FFCC00' }} variant="h1">Pokemon</Typography>
                    <Typography id="subtitle-title" sx={{ fontWeight: 'Bold', color: '#e5e4ed'}} variant="subtitle1">Gotta Catch Em All!</Typography>
                </Box>
            </Grid>

            <Grid id="home-grid" item xs={12} lg={6} >
                <Box id="iframe-box" sx={{ width: '100%'}}>
                    <iframe id="iframe" src="https://www.youtube.com/embed/rg6CiPI6h2g" title="Pokemon Theme Song" />
                </Box>
            </Grid>

            <Grid mt={3} item xs={12}>
                <Typography mb={3} variant="h3" sx={{width: '100%', display: 'flex', justifyContent: 'center', color: 'red'}}>Become A Pokemon Master</Typography>
                <Box id="card-container" sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Card id="pokedex-card" >
                    <CardMedia component="img" id="pokedex-img" alt="Pokedex" image="./img/pokedex1.png"/>
                    <CardContent>
                        <Typography variant="body1" id="poke-card-text">
                            The Pokedex is an encyclopedia and its the first step for any trainer to become a Master.
                            Once you search a pokemon you can add them to your Pokedex. 
                            This makes a pokemon editable. Trainers are allowed to edit a pokemons level, add and remove them from your party, and update whether a pokemon was caught or not.
                        </Typography>
                    </CardContent>
                </Card>
                </Box>

            </Grid>
        </Grid>
    )
}
