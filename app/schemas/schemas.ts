export interface User {
    username: string,
    password: string
}

export interface AccessToken {
    access_token: string,
    token_type: string
}

export interface ErrorProps {
    error: Error & { digest?: string },
    reset: () => void
}
