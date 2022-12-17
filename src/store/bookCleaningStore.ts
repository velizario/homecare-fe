import create from 'zustand'
import { CleanFreq, CleaningServices, FormArgs, bookCleaningStoreType } from '../utils/AppTypes'
import produce from 'immer'

// Define type

// Use Zustand

export const formDefaults:FormArgs = {
    cleaningArea: "",
    date: undefined,
    hour: "",
    viberContactEnabled: false,
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    frequency: undefined,
    cleaningServices : {
        standard: true,
        fridge: false,
        oven: false,
        ironing: false,
    },
}

const bookCleaningStore = create<bookCleaningStoreType>((set, get) => ({
    ...formDefaults,
    toggleService: (service: CleaningServices) => set(produce((state) => {state.cleaningServices[service] = !state.cleaningServices[service]})),
    getService: (service: CleaningServices) => get().cleaningServices[service],
    setFrequency: (freq: CleanFreq) => set(() => ({frequency: freq})),
    getFrequency: () => get().frequency,
}))

export default bookCleaningStore;