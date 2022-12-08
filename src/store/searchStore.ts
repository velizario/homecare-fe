import create from 'zustand'
import { Search } from '../utils/AppTypes'

// Define type
type SearchStore = {
    searchData : Search | null;
    setSearchData : (data: Partial<Search>) => void;
}

// Use Zustand

const searchStore = create<SearchStore>((set) => ({
    searchData: null,
    setSearchData: ((data) => {
        set(state => ({
            ...state,
            searchData: {...state.searchData, ...data}
        }))
    })
}))

export default searchStore;