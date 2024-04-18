'use client'

import {
    Button,
    Stack,
    TextField,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Radio,
    RadioGroup,
    FormControlLabel,
    Box,
    FormControl,
    FormLabel,
} from "@mui/material"
import { useState, forwardRef } from "react"
import { searchPokemon } from "../actions"
import { PokemonResult, Pokemon } from "../schemas/pokemon"
import {
    Unstable_NumberInput as BaseNumberInput,
    NumberInputProps,
    numberInputClasses,
} from '@mui/base/Unstable_NumberInput';
import { styled } from '@mui/system';
import * as React from 'react';
import { addUserPokemon } from "../api/route"

const NumberInput = forwardRef(function CustomNumberInput(
    props: NumberInputProps,
    ref: React.ForwardedRef<HTMLDivElement>,
) {
    return (
        <BaseNumberInput
            slots={{
                root: StyledInputRoot,
                input: StyledInputElement,
                incrementButton: StyledButton,
                decrementButton: StyledButton,
            }}
            slotProps={{
                incrementButton: {
                    children: '▴',
                },
                decrementButton: {
                    children: '▾',
                },
            }}
            {...props}
            ref={ref}
        />
    );
});

interface PokeSearchProps {
    session: any
}

export default function PokeSearch({session}: PokeSearchProps) {
    const [search, setSearch] = useState("")
    // const [apiPokemon, setApiPokemon] = useState<PokemonResult >({
    //     name: '',
    //     image: '',
    //     type: ''
    // })
    const [open, setOpen] = useState(false);
    const [userPokemon, setUserPokemon] = useState<Pokemon>({
        name: '',
        type: '',
        level: 0,
        caught: false,
        image: '',
        party: false,
    })

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>

            <Stack spacing={2} sx={{ marginTop: '20px', width: '400px' }}>
                <TextField
                    value={search}
                    sx={{ width: '300px' }}
                    id="outlined-basic"
                    label="Look Up Pokemon"
                    variant="outlined"
                    onChange={(event) => setSearch(event.target.value)} />
                <Button
                    sx={{ width: '200px' }}
                    variant="contained"
                    onClick={async () => {
                        const pokeResults = await searchPokemon(search)
                        if (pokeResults) {
                            setUserPokemon({
                                ...userPokemon,
                                name: pokeResults.name,
                                image: pokeResults.image,
                                type: pokeResults.type
                            })
                        }
                        // if (pokeResults) setApiPokemon(pokeResults)
                            

                    }}
                >Poke Search
                </Button>

                <Box sx={{ marginTop: '20px' }}>
                    {
                        userPokemon?.name ?
                            <Card sx={{ maxWidth: 345, marginTop: '20px' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={userPokemon.image}
                                    title="Pokemon"
                                />
                                <CardContent>
                                    <Typography>Name: {userPokemon.name}</Typography>
                                    <Typography>Type: {userPokemon.type}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => setOpen(true)} variant="contained">Add To Pokedex</Button>
                                </CardActions>
                            </Card>
                            : null
                    }
                </Box>
            </Stack>

            <Dialog
                open={open}
                onClose={handleClose}
            // PaperProps={{
            //     component: 'form',
            //     onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            //       event.preventDefault();
            //       const formData = new FormData(event.currentTarget);
            //       const formJson = Object.fromEntries((formData as any).entries());
            //       const email = formJson.email;
            //       console.log(email);
            //       handleClose();
            //     },
            //   }}
            >
                <DialogTitle>Add {userPokemon?.name} To Pokedex</DialogTitle>
                <DialogContent>
                    <DialogContentText
                        sx={{ marginBottom: '20px' }}
                    >To add {userPokemon?.name} to your Pokedex assign the level it was encountered at, and whether it was successfully caught.
                    </DialogContentText>
                    <Typography>Select Pokemon Level</Typography>
                    <NumberInput
                        aria-label="Demo number input"
                        placeholder="Pokemon Level"
                        value={userPokemon.level}
                        onChange={(event, val) => setUserPokemon({
                            ...userPokemon,
                            level: val
                        })}

                    />
                    <FormControl>
                        <FormLabel sx={{ marginTop: '20px' }}>Was Pokemon Caught</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="false"
                            name="Was Pokemon Caught"
                            value={userPokemon.caught}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                if (event.target.value === 'true') {
                                    setUserPokemon({
                                        ...userPokemon,
                                        caught: true
                                    })

                                } else if (event.target.value === 'false') {
                                    setUserPokemon({
                                        ...userPokemon,
                                        caught: false
                                    })
                                }
                            }}
                        >
                            <FormControlLabel value='true' control={<Radio />} label="True" />
                            <FormControlLabel value='false' control={<Radio />} label="False" />
                        </RadioGroup>
                    </FormControl>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        variant="contained"
                        onClick={async () => {
                           
                            addUserPokemon(userPokemon, session)
                        }}
                    >Add Pokemon To Pokedex
                    </Button>
                </DialogActions>
            </Dialog>
        </>

    )
}

const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    display: grid;
    grid-template-columns: 1fr 19px;
    grid-template-rows: 1fr 1fr;
    overflow: hidden;
    column-gap: 8px;
    padding: 4px;
    width: 200px;
  
    &.${numberInputClasses.focused} {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const StyledInputElement = styled('input')(
    ({ theme }) => `
    font-size: 0.875rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.5;
    grid-column: 1/2;
    grid-row: 1/3;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: inherit;
    border: none;
    border-radius: inherit;
    padding: 8px 12px;
    outline: 0;
  `,
);

const StyledButton = styled('button')(
    ({ theme }) => `
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    appearance: none;
    padding: 0;
    width: 19px;
    height: 19px;
    font-family: system-ui, sans-serif;
    font-size: 0.875rem;
    line-height: 1;
    box-sizing: border-box;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 0;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      cursor: pointer;
    }
  
    &.${numberInputClasses.incrementButton} {
      grid-column: 2/3;
      grid-row: 1/2;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border: 1px solid;
      border-bottom: 0;
      &:hover {
        cursor: pointer;
        background: ${blue[400]};
        color: ${grey[50]};
      }
  
    border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    }
  
    &.${numberInputClasses.decrementButton} {
      grid-column: 2/3;
      grid-row: 2/3;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border: 1px solid;
      &:hover {
        cursor: pointer;
        background: ${blue[400]};
        color: ${grey[50]};
      }
  
    border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    }
    & .arrow {
      transform: translateY(-1px);
    }
  `,
);
