"use client";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

interface RawResults {
  name: string;
  url: string;
}

interface PokeDexProps {
  data: RawResults[];
}

interface Pokemon extends RawResults {
  id?: number;
}

export default function PokeDex({ data }: PokeDexProps) {
  const [rows, setRows] = useState<Pokemon[]>([]);

  // data currently is an array of objects with a name and url property. types between rows and data currently don't match
  // I need a row function that will return an array of objects in the format of an ID field and the Name field from the data

  useEffect(() => {
    const indexedRows = data.map((pokemon: Pokemon, index) => {
      return { ...pokemon, id: index };
    });
    setRows(indexedRows);
  }, [data]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Pokemon Name" },
  ];

  return (
    <Box sx={{ width: 600, height: 600 }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
