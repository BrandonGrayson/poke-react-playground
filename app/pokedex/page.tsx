import { getAllUsersPokemon } from "../api/route";
import PokedexPage from "../components/Pokedex";

import { getSession } from "../lib/lib";

export default async function Page() {
  const session: any = await getSession();
  const pokemon = await getAllUsersPokemon(session)

  console.log('users pokemon', pokemon)

  return (
    <PokedexPage session={session} pokemon={pokemon} />
  );
}
