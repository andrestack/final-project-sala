import useCheckBoxStore from "utils/useLessonStore";

export default function LessonOverviewHeader() {
  // const { selectAll, toggleSelectAll } = useCheckBoxStore();

  return (
    <div className="text-xl mt-6 grid grid-cols-7 content-around bg-gradient-to-r from-energy-100 to-energy-400 h-10">
      <input
        type="checkbox"
        // checked={selectAll}
        // onChange={toggleSelectAll}
      ></input>
      <label className="text-center font-mono" htmlFor="Date">
        Date
      </label>

      <label className="text-center font-mono" htmlFor="Course">
        Course
      </label>
      <label className="text-center font-mono" htmlFor="End Time">
        Duration
      </label>
      <label className="text-center font-mono" htmlFor="Units">
        Units
      </label>
      <label className="text-center font-mono" htmlFor="Units">
        €/Unit
      </label>
      <label className="text-center font-mono" htmlFor="Total">
        €/Total
      </label>
    </div>
  );
}
