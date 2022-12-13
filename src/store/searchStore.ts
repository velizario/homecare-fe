import create from 'zustand'
import {  CleanFreq, CleaningServices, SearchStoreType } from '../utils/AppTypes'
import produce from 'immer'

// Define type

// Use Zustand

const searchStore = create<SearchStoreType>((set, get) => ({
    cleaningArea: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    date: "",
    hour: "",
    frequency: undefined,
    cleaningServices : {
        standard: true,
        fridge: false,
        oven: false,
        ironing: false,
    },
    toggleService: (service: CleaningServices) => set(produce((state) => {state.cleaningServices[service] = !state.cleaningServices[service]})),
    getService: (service: CleaningServices) => get().cleaningServices[service],
    setFrequency: (freq: CleanFreq) => set(() => ({frequency: freq})),
    getFrequency: () => get().frequency,
}))

export default searchStore;