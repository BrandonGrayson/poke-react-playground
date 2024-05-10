"use client";

import { DataGrid, GridRowsProp, GridColDef, GridCellEditStopParams, MuiEvent, GridCellEditStopReasons, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Stack, Typography } from "@mui/material";
import { PokedexPokemon } from "@/app/schemas/pokemon";
import { useEffect, Dispatch, SetStateAction } from "react";
import { deleteUserPokemon, updateUserPokemon } from "@/app/api/route";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// pokedex needs to know if a pokemon has been found ~ Update functionality

interface PokedexProps {
  pokemon: PokedexPokemon[]
  session: string
  setPokedexPokemon: Dispatch<SetStateAction<PokedexPokemon[]>>
}

export default function PokeDex({ pokemon, session, setPokedexPokemon }: PokedexProps) {

  // const rows: GridRowsProp<PokedexPokemon> = pokemon

  console.log('pokedex pokemon ->',pokemon)
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "type", headerName: "Type" },
    { field: "level", headerName: "Level", editable: true, type: 'number' },
    { field: "caught", headerName: "Caught", editable: true, type: 'boolean' },
    { field: "party", headerName: "Party", editable: true, type: 'boolean' },
    { field: "image", headerName: "Image" },
    { field: 'actions', type: "actions", headerName: 'Actions', width: 100, cellClassName: 'actions', getActions: ({id}) => {
      // const idToDelete = id;
      return [
        <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        onClick={async () => {
          console.log('id to be deleted', id)
          id = id.toString()
          const remainingPokemon = await deleteUserPokemon(session, id)
          setPokedexPokemon(remainingPokemon)
        }}
        color="inherit"
      />,
      ]
    }}
  ];

  useEffect(() => {
    console.log('pokedex table mounts')
  }, [pokemon])

  // console.log('rows', rows)
  // use on cell edit stop to send an update request to the api
  // will need a route handler for sending the request
  
  // Test updated POkemon function

  return (
    <Stack spacing={2}>
      <Typography>PokeDex</Typography>

      <Box sx={{ width: 800, height: 600 }}>
        <DataGrid
         rows={pokemon} 
         columns={columns} 
         onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
         processRowUpdate={async (updatedRow, originalRow) => {
          console.log('updated row', updatedRow)

          const id = updatedRow.id

          const new_pokemon_info = {
            "name": updatedRow.name,
            "level": updatedRow.level,
            "type": updatedRow.type,
            "caught": updatedRow.caught,
            "image": updatedRow.image,
            "party": updatedRow.party
          }

          const updatedPokemon = await updateUserPokemon(session, id, new_pokemon_info)

          // loop through 
          setPokedexPokemon(pokemon.map((pokemonRow) => (pokemonRow.id === updatedRow.id ? updatedPokemon : pokemonRow)))

          return updatedPokemon
         }}
        />
      </Box>
    </Stack>
  );
}
