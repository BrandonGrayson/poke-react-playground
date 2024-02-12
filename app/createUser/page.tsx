import CreateUser from "../components/CreateUser"
import { newUser } from "../actions"

export default async function Page() {
    return (
        <CreateUser newUser={newUser} />
    )
}
