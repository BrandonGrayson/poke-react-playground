import { Nav } from "./components/Nav";
import Homepage from "./components/Homepage";

export default function IndexPage() {
  return (
    <>
      <Nav />
      <Homepage />
    </>
  );
}

export const metadata = {
  title: "PokeDex",
};
