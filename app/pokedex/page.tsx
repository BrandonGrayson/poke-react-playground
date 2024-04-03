import PokeSearch from "../components/PokeSearch";
import PokeDex from "../components/PokeTable/PokeDex";
import { getSession } from "../lib/lib";

export default function Page() {
  const session = getSession();
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <PokeSearch session={session} />
      <PokeDex />
    </div>
  );
}
