"use client";

import Link from "next/link";
import { Stack } from "@mui/material";

export const Nav = () => {
  return (
    <nav>
      <Stack direction="row" spacing={2}>
        <Link href="/">Home</Link>
        <Link href="/pokedex">PokeDex</Link>
        <Link href="/login">Login</Link>
        <Link href="/createUser">Create User</Link>
      </Stack>
    </nav>
  );
};
