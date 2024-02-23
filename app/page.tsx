import { Nav } from "./components/Nav";
import SearchHeader from "./components/SearchHeader";

export default function IndexPage() {
  return (
    <>
    <Nav />
     <SearchHeader />
    </>
  );
}

export const metadata = {
  title: "PokeDex",
};
