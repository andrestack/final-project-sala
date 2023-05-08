import { create } from "zustand";

const useCheckBoxStore = create((set) => ({
  selectAll: false,
  setSelectAll: () =>
    set((event) => ({ setSelectAll: !event.selectAll })),

  toggleChecked: () => set((state) => ({ checked: !state.checked })),
}));

export default useCheckBoxStore;
