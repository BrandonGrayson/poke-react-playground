/* Components */
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <h3>Homepage</h3>
      <Link href="/pokedex">PokeDex</Link>
      <Link href="/login">Login</Link>
    </>

  );
}

export const metadata = {
  title: "Poke React Playground",
};
