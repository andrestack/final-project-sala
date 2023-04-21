import {create} from "zustand";

const useButtonStore = create((set)=> ({
isVisible: false,
toggleVisibility: () => set((state) => ({isVisible: !state.isVisible}))

}))

export default useButtonStore