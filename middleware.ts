import { NextResponse, type NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    console.log('middleware ran')
    const current_user = request.cookies.get("session")

    if (!current_user) {
        console.log('You must sign in')
        return Response.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: '/addPokemon'
}
