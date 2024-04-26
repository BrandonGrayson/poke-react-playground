import { getAllUsersPokemon } from "../api/route";
import PokeSearch from "../components/PokeSearch";
import PokeDex from "../components/PokeTable/PokeDex";
import { getSession } from "../lib/lib";

export default async function Page() {
  const session: any = await getSession();
  const pokemon = await getAllUsersPokemon(session)

  console.log('users pokemon', pokemon)

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <PokeSearch session={session}/>
      <PokeDex pokemon={pokemon} session={session}/>
    </div>
  );
}
