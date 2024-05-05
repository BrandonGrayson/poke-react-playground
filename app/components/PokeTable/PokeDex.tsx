"use client";

import { DataGrid, GridRowsProp, GridColDef, GridCellEditStopParams, MuiEvent, GridCellEditStopReasons, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Stack, Typography } from "@mui/material";
import { Pokemon } from "@/app/schemas/pokemon";
import { useEffect, useState } from "react";
import { deleteUserPokemon, updateUserPokemon } from "@/app/api/route";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
// pokedex needs to know if a pokemon has been found ~ Update functionality

interface PokedexProps {
  pokemon: Pokemon[]
  session: string
}

export default function PokeDex({ pokemon, session }: PokedexProps) {

  // Inside the GridColDef array I need to define a field for actions
  // which will have a getActions field that will  
  // allow a user to delete a row if the row isineditmode === true

  
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
          // setPokedexPokemon(pokedexPokemon.filter())
        }}
        color="inherit"
      />,
      ]
    }}
  ];

  const rows: GridRowsProp<Pokemon> = pokemon

  useEffect(() => {
    console.log('pokedex table mounts')
  }, [pokemon])

  console.log('rows', rows)
  // use on cell edit stop to send an update request to the api
  // will need a route handler for sending the request

  return (
    <Stack spacing={2}>
      <Typography>PokeDex</Typography>

      <Box sx={{ width: 800, height: 600 }}>
        <DataGrid
         rows={rows} 
         columns={columns} 
         onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
         processRowUpdate={async (updatedRow, originalRow) => {
          console.log('updated row', updatedRow)

          const id = updatedRow.id

          const pokemon = {
            "name": updatedRow.name,
            "level": updatedRow.level,
            "type": updatedRow.type,
            "caught": updatedRow.caught,
            "image": updatedRow.image,
            "party": updatedRow.party
          }

          updateUserPokemon(session, id, pokemon)
         }}
        />
      </Box>
    </Stack>
  );
}
