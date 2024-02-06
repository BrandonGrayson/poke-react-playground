"use server"
import { User } from "./schemas/schemas"

export const newUser = async (email: string, password: string): Promise<User | undefined> => {
    try {
        const response = await fetch("http://127.0.0.1:8000/createUser", {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            credentials: 'omit',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        })

        const data = response.json()

        return data
    } catch(error) {
        console.log('error', error)
    }
}