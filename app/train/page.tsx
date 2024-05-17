import { getSession } from "../lib/lib"
import { getPokemonForTraining } from "../actions"
import { Nav } from "../components/Nav"
import PokeCard from "../components/PokeCard"

export default async function Train() {
    const token = await getSession()
    const pokemon = await getPokemonForTraining(token)
    console.log('pokemon', pokemon)
    // component for looping through all a users pokemon and turn the data into a card
    return (
        <>
            <Nav />
            <PokeCard pokemon={pokemon} />
        </>
    )
}