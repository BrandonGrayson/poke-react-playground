'use client'

import PokeSearch from "../components/PokeSearch";
import { Stack } from "@mui/material";
import PokeDex from "../components/PokeTable/PokeDex";

export default function Page() {
  return (
    <Stack direction={{lg: 'row', md: 'column'}}>
      <PokeSearch />
      <PokeDex />
    </Stack>
  );
}
