import { create } from 'zustand'

interface FilterStore {
  genre: number | null
  setGenre: (genre: number | null) => void
}

export const useFilterStore = create<FilterStore>((set) => ({
  genre: null,
  setGenre: (genre) => set({ genre }),
}))
