import useSWR from "swr";
import useSelectAllStore from "utils/useCheckBoxStore";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList() {
  const {selectAll, toggleSelectAll } = useSelectAllStore();

  const { data } = useSWR("/api/lessons", fetcher, { fallbackData: [] });



  function lessonUnits(millis) {
    return millis < 2700000 ? 0 : millis <= 4800000 && millis > 2700000 ? 1 : 2;
  }

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      <div role="list" className="text-center font-mono mt-6">
        {data.map((lesson) => {
          const duration = lesson.endTime - lesson.startTime;
          const date = new Date(lesson.startTime).toLocaleDateString();
          const fee = 25;
          return (
            <ul
              className="h-7 my-2 grid grid-cols-7 content-around text-energy-400 text-xl"
              key={lesson._id}
            >
              <input
              
                type="checkbox"
                checked={selectAll}
                
              ></input>
              <li>{date}</li>
              <li></li>
              <li>{millisToMinutesAndSeconds(duration)}</li>
              <li>{lessonUnits(duration)}</li>
              <li>{fee}</li>
              <li>{lessonUnits(fee)}</li>
            </ul>
          );
        })}
      </div>
    </>
  );
}
