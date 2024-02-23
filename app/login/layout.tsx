import { Nav } from "../components/Nav"

interface logginProps{
    children: React.ReactNode
}

export default function logginLayout({children}: logginProps) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}