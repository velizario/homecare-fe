import create from 'zustand'
import { UserExtendedInfo} from '../utils/AppTypes'

// Define type
type UserStore = {
    data: UserExtendedInfo | null;
    updateUser: (user: UserExtendedInfo) => void;
}

export const defaultUserExtendedInfo= {
    about: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
}

const userStore = create<UserStore>((set,get) => ({
    data: defaultUserExtendedInfo,
    updateUser: (data) => {
        set(() => ({data}));
        console.log("State changed! New value", get().data)
    }
}))

export default userStore;