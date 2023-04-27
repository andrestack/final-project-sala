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
    // checked: true,
    // toggleChecked: () => set((state) => ({ checked: !state.checked })),

  
}));

export default useLessonStore;
