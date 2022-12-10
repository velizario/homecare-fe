import create from 'zustand'
import {  SearchStoreType } from '../utils/AppTypes'

// Define type

// Use Zustand

const searchStore = create<SearchStoreType>(() => ({
    cleaningArea: "",
    firstName: "string",
    lastName: "string",
    address: "string",
    phone: "string",
    frequency: undefined,
    cleaningServices : {
        standard: true,
        fridge: false,
        oven: false,
        ironing: false,
    }
}))

export default searchStore;