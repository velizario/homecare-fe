import create from 'zustand'
import { User } from '../utils/AppTypes'

// Define type
type UserStore = {
    user: User | null;
    updateUser: (user: User) => void;
}

const defaultUser = {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
}


// Use Zustand

const userStore = create<UserStore>((set,get) => ({
    user: defaultUser,
    updateUser: (user) => {
        set(state => ({
            ...state,
            user: user
        }));
        console.log("State changed! New value", get().user)
    }
}))

export default userStore;