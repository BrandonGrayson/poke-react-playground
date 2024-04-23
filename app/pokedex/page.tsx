import PokeSearch from "../components/PokeSearch";
import PokeDex from "../components/PokeTable/PokeDex";
import { getSession } from "../lib/lib";

export default async function Page() {
  const session: any = await getSession();

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <PokeSearch session={session}/>
      <PokeDex session={session} />
    </div>
  );
}
