import { Nav } from "../components/Nav"

interface RegisterLayoutProps {
    children: React.ReactNode
}

export default function RegisterLayout({children}: RegisterLayoutProps) {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}