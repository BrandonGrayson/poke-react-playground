"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import PokeSearch from "../PokeSearch";

// pokedex needs to know if a pokemon has been found ~ Update functionality

interface PokedexProps {
  session: string
}

export default function PokeDex({session}: PokedexProps) {

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "type", headerName: "Type" },
    { field: "level", headerName: "Level" },
    { field: "caught", headerName: "Caught" },
    { field: "party", headerName: "Party" },
    { field: "image", headerName: "Image" },
  ];

  

  return (
    <>
      <Typography>PokeDex</Typography>
    </>
    // <Box sx={{ width: 600, height: 600 }}>
    //   {/* <DataGrid rows={rows} columns={columns} /> */}
    // </Box>
  );
}
