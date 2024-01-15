/* Components */
import { Counter } from "./components/Counter/Counter";
import PokeTable from "./components/PokeTable/PokeTable";

export default function IndexPage() {
  return <PokeTable />;
}

export const metadata = {
  title: "Poke React Playground",
};
