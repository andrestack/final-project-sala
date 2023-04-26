import {create} from "zustand"


const useCheckBoxStore = create((set) => ({
  
  selectAll: false,
  toggleSelectAll: () => set((state) => ({selectAll: !state.selectAll}))
}));

export default useCheckBoxStore;
