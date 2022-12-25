import create from 'zustand'
import { CleanFreq, CleaningServices, BookingFormArgs } from '../utils/AppTypes'
import produce from 'immer'



export interface bookCleaningStoreType extends BookingFormArgs {
    toggleService: (service: CleaningServices) => void
    getProperty: (property: keyof BookingFormArgs) => any
    setProperty: (property: keyof BookingFormArgs, newValue: any) => void
    getFrequency: () => CleanFreq | undefined
};


export const formDefaults:BookingFormArgs = {
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
    getProperty: (property: keyof BookingFormArgs) => get()[property],
    setProperty: (property: keyof BookingFormArgs, newValue: any) => set(() => ({[property]: newValue})),
    getFrequency: () => get().frequency,
}))

export default bookCleaningStore;