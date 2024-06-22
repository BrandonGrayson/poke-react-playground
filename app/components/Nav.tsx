"use client";

import Link from "next/link";
import { Grid, Stack } from "@mui/material";

export const Nav = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
      <Stack direction="row" spacing={2}>
        <Link href="/">Home</Link>
        <Link href="/pokedex">PokeDex</Link>
        <Link href="/login">Login</Link>
        <Link href="/createUser">Create User</Link>
        <Link href="/train">Train</Link>
      </Stack>
      </Grid>

    </Grid>
  );
};
