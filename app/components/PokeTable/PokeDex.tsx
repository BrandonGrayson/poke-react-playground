"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import PokeSearch from "../PokeSearch";
import { Pokemon } from "@/app/schemas/pokemon";
import { useEffect } from "react";

// pokedex needs to know if a pokemon has been found ~ Update functionality

interface PokedexProps {
  pokemon: Pokemon[]
}

export default function PokeDex({ pokemon }: PokedexProps) {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "type", headerName: "Type" },
    { field: "level", headerName: "Level" },
    { field: "caught", headerName: "Caught" },
    { field: "party", headerName: "Party" },
    { field: "image", headerName: "Image" },
  ];

  const rows: GridRowsProp<Pokemon> = pokemon

  useEffect(() => {

  }, [pokemon])

  console.log('rows', rows)

  return (
    <>
      <Typography>PokeDex</Typography>

      <Box sx={{ width: 600, height: 600 }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </>
  );
}
