import { Pokemon } from "../schemas/pokemon"
import { cookies } from 'next/headers'

export async function addUserPokemon(pokemon: Pokemon) {

    // console.log('user token,', token)
    // console.log('pokemon', pokemon)
    
    try {
        // console.log('user token,', token)
        console.log('pokemon', pokemon)

        const res = await fetch('http://127.0.0.1:8000/addPokemon', {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pokemon)
        })
    
        const data = await res.json();
    
        // console.log('data back from add pokemon', data)
    } catch (error) {
        console.log('error', error)
    }

}