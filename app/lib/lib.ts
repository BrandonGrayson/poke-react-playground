import { cookies } from "next/headers";

export async function getSession() {
    const session = cookies().get('session')

    if (!session) return null;

    return session
}