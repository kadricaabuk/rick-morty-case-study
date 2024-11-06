// stores/filterStore.ts
import { create } from 'zustand'

interface FilterState {
  name: string
  status: string
  type: string
  gender: string
  setFilters: (filters: Partial<FilterState>) => void
}

export const useFilterStore = create<FilterState>((set) => ({
  name: '',
  status: '',
  type: '',
  gender: '',
  setFilters: (filters) => set((state) => ({ ...state, ...filters })),
}))