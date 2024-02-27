"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PokeSearch from "../PokeSearch";

interface RawResults {
  name: string;
  url: string;
}

interface PokeDexProps {
  data: RawResults[];
}

interface Pokemon extends RawResults {
  id?: number;
  hasBeenFound?: string;
}

// pokedex needs to know if a pokemon has been found ~ Update functionality

export default function PokeDex() {
  // const [rows, setRows] = useState<Pokemon[]>([]);

  // useEffect(() => {
  //   // const pokemon = data.map((poke, index) => {
  //   //   return { ...poke, id: index };
  //   // });
  //   // setRows(pokemon);
  // }, [data]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Pokemon Name" },
    { field: "encountered", headerName: "Encountered" },
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
