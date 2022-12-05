import create from 'zustand'
import { Client } from '../utils/AppTypes'

// Define type
type UserStore = {
    client: Client | null;
    updateClient: (client: Client) => void;
}


// Use Zustand

const userStore = create<UserStore>((set) => ({
    client: null,
    updateClient: (client) => {
        set(state => ({
            ...state,
            client: client
        }))
    }
}))

export default userStore;