import 'server-only'
import { cookies } from "next/headers";

export async function getSession() {
    const session = cookies().get('session')?.value
    console.log('session', session)

    if (!session) return null;

    // const sessionValue = session.value

    // console.log('SESSION VALUE', session)

    return session
}
