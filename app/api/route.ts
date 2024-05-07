import { Pokemon, PokedexPokemon } from "../schemas/pokemon"

export async function addUserPokemon(pokemon: Pokemon, token: string): Promise<PokedexPokemon> {

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

            throw error
        }    
}

export async function getAllUsersPokemon(token: string):Promise<PokedexPokemon[]> {
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
        throw error
    }
}

export async function updateUserPokemon(token: string, id: string, pokemon: Pokemon): Promise<PokedexPokemon> {
    
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

        const updatePokemon: PokedexPokemon = await response.json()
    
        return updatePokemon
    } catch (error) {
        console.log('error', error)
        throw error
    }
}

export async function deleteUserPokemon(token: string, id: string) {
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/delete/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        const pokemon = await response.json()
    
        return pokemon
    } catch (error) {
        console.log('error', error)
    }

}
