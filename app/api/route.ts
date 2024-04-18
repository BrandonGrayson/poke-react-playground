import { Pokemon } from "../schemas/pokemon"
import { cookies } from 'next/headers'

export async function addUserPokemon(pokemon: Pokemon, token: string) {

        try {
            // console.log('user token,', token)
            const res = await fetch('http://127.0.0.1:8000/addPokemon', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'omit',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(pokemon)
            })
        
            const data = await res.json();
    
            return data

        } catch (error) {
            console.log('error', error)
        }
}
