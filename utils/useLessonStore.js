import { create } from "zustand";

const useLessonStore = create((set) => ({
  lessons: [],
  setLessons: (newLessons) =>
    set((state) => ({
      lessons: newLessons.map((newLesson) => ({
        ...newLesson,
        checked: false,
      })),
    })),




  toggleSelectAll: () => set((state) => ({ selectAll: !state.selectAll })),
}));



export default useLessonStore;
