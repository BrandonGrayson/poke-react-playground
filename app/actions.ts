"use server"
import { User, AccessToken } from "./schemas/schemas"
import { cookies } from 'next/headers'

export const newUser = async (username: string, password: string): Promise<User | undefined> => {
    try {
        const response = await fetch("http://127.0.0.1:8000/createUser", {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })

        const data = response.json()

        return data
    } catch(error) {
        console.log('error', error)
    }
}

export const userLogin = async (username: string, password: string) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/login", {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password})
        })

        const access_token: AccessToken = await response.json()

        console.log('access Token', access_token)

        const session = access_token.access_token

        cookies().set('session', session, {httpOnly: true})
    } catch(error) {
        console.log('error', error)
    }

}
