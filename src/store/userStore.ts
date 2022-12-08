import create from 'zustand'
import { Client } from '../utils/AppTypes'

// Define type
type UserStore = {
    client: Client | null;
    updateClient: (client: Client) => void;
}

const defaultClient = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
}


// Use Zustand

const userStore = create<UserStore>((set,get) => ({
    client: defaultClient,
    updateClient: (client) => {
        set(state => ({
            ...state,
            client: client
        }));
        console.log("State changed! New value", get().client)
    }
}))

export default userStore;