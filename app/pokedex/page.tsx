import { getAllPokemon } from "../helpers/pokemon";
import PokeDex from "../components/PokeTable/PokeDex";

export default async function Page() {
  const data = await getAllPokemon();

  const { results } = data;

  console.log("data", results);
  return (
    <>
      <PokeDex data={results} />
    </>
  );
}
