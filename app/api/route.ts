import { Pokemon } from "../schemas/pokemon"

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

export async function getAllUsersPokemon(token: string) {
    try {
        // console.log('user token,', token)
        const res = await fetch('http://127.0.0.1:8000/getAllPokemon', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
    
        const data = await res.json();

        return data

    } catch (error) {
        console.log('error', error)
    }
}

export async function updateUserPokemon(token: string, id: string, pokemon: Pokemon) {
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/updatePokemon/${id}`, {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(pokemon)
        })

        const updatePokemon = await response.json()
    
        return updatePokemon
    } catch (error) {
        console.log('error', error)
    }

}
