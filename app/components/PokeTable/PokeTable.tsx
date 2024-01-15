import { getAllPokemon } from "@/app/helpers/pokemon";

export default async function PokeTable() {
  const data = await getAllPokemon();

  console.log("data", data);
  return (
    <>
      <h1>Poke Table</h1>
    </>
    // <DataGrid />
  );
}
