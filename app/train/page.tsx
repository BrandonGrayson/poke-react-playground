import { getSession } from "../lib/lib"
import { getPokemonForTraining } from "../actions"
export default async function Train() {
    const token = await getSession()
    const pokemon = await getPokemonForTraining(token)
    console.log('pokemon', pokemon)
    return (
        <>
            <h1>Train</h1>
        </>
    )
}