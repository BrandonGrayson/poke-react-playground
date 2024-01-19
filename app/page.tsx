/* Components */
import Link from "next/link";
import PokeDex from "./components/PokeTable/PokeDex";

export default function IndexPage() {
  return <Link href="/pokedex">PokeDex</Link>;
}

export const metadata = {
  title: "Poke React Playground",
};
