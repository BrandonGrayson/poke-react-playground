import PokeSearch from "../components/PokeSearch";
import PokeDex from "../components/PokeTable/PokeDex";

export default function Page() {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <PokeSearch />
      <PokeDex />
    </div>
  );
}
