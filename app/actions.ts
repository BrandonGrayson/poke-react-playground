"use server"
import { AccessToken } from "./schemas/schemas"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"
import { PokemonResult } from "./schemas/pokemon"

export const newUser = async (username: string, password: string) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/createUser", {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        })

        if (!response.ok) {
            throw Error('There was a problem creating your account')
        }

        redirect('/')
    } catch (error) {
        console.log('error', error)
        throw error
    }
}

export const userLogin = async (username: string, password: string) => {
    try { 
        const response = await fetch("http://127.0.0.1:8000/login", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password })
        })

        if (!response.ok) {
            throw Error('Could not fetch the data for that resource')
        }

        const access_token: AccessToken = await response.json()

        const session = access_token.access_token

        cookies().set('session', session, { httpOnly: true })
        
    } catch (error) {
        console.log(error)
        throw error
    }

}

export const searchPokemon = async (pokemon: string) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)

        if (!response.ok) {
            throw Error('There was a problem with your request')
        }

        const results = await response.json()

        // console.log('results', results)

        // extract the needed fields, name, type, image
        // create a type to represent the pokemon data I need returned from this api

        const pokeData : PokemonResult = {
            name: results.name,
            type: results.types[0].type.name,
            image: results.sprites.back_default
        }

        return pokeData

    } catch (error) {
        console.log('error', error)
        throw error
    }
}

export const getPokemonForTraining = async (token: string | null) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/pokemon/training', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })

        const data = await response.json()

        return data
    } catch (error) {
        console.log('error', error)
        throw error
    }
}
