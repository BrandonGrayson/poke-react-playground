"use client";

import { DataGrid, GridRowsProp, GridColDef, GridCellEditStopParams, MuiEvent, GridCellEditStopReasons } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { Pokemon } from "@/app/schemas/pokemon";
import { useEffect } from "react";
import { updateUserPokemon } from "@/app/api/route";

// pokedex needs to know if a pokemon has been found ~ Update functionality

interface PokedexProps {
  pokemon: Pokemon[]
  session: string
}

export default function PokeDex({ pokemon, session }: PokedexProps) {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "type", headerName: "Type" },
    { field: "level", headerName: "Level", editable: true, type: 'number' },
    { field: "caught", headerName: "Caught", editable: true, type: 'boolean' },
    { field: "party", headerName: "Party", editable: true, type: 'boolean' },
    { field: "image", headerName: "Image" },
  ];

  const rows: GridRowsProp<Pokemon> = pokemon

  useEffect(() => {

  }, [pokemon])

  console.log('rows', rows)
  // use on cell edit stop to send an update request to the api
  // will need a route handler for sending the request

  return (
    <>
      <Typography>PokeDex</Typography>

      <Box sx={{ width: 600, height: 600 }}>
        <DataGrid
         rows={rows} 
         columns={columns} 
         onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
          if (params.reason === GridCellEditStopReasons.cellFocusOut) {
            event.defaultMuiPrevented = true;
          }
        }}
         processRowUpdate={(updatedRow, originalRow) => {
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
    </>
  );
}
