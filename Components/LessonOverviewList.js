import useSWR from "swr";
import { useState } from "react";
// import useCheckBoxStore from "utils/useCheckBoxStore";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList({ selectAllBoxes }) {
  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });
  console.log("data", data);

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  // const [lessons, setLessons] = useState([]);

  async function handleSubmitInvoice(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const lessonData = Object.fromEntries(formData);
    console.log("here", lessonData);
  }

  function lessonUnits(millis) {
    return millis < 2700000 ? 0 : millis <= 4800000 && millis > 2700000 ? 1 : 2;
  }

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <form>
      <div role="list" className="text-center font-mono mt-6">
        {data.map((lesson) => {
          const duration = lesson.endTime - lesson.startTime;
          const date = new Date(lesson.startTime).toLocaleDateString();
          const fee = 25;
          return (
            <ul
              className="h-7 my-2 grid grid-cols-7 content-around text-energy-400 text-xl"
              key={lesson._id}
              id="lessons"
            >
              <input
                value={lesson._id}
                type="checkbox"
                name="lesson"
                checked={selectAllBoxes ? "checked" : false}
              ></input>
              <label htmlFor="date">{date}</label>
              <label htmlFor="course-code"></label>
              <label htmlFor="duration">
                {millisToMinutesAndSeconds(duration)}
              </label>
              <label htmlFor="units">{lessonUnits(duration)}</label>
              <label htmlFor="fee">{fee}</label>
              <label htmlFor="total">{lessonUnits(fee)}</label>
            </ul>
          );
        })}

        <button
          form="lessons"
          name="submit"
          type="submit"
          onClick={handleSubmitInvoice}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

// const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
//   fallbackData: [],
// });

// useEffect(() => {
//   if (data.length === 0) {
//     setLessons(data);
//   }
// }, []);

// if (error) return <h1>ERROR</h1>;
// if (isLoading) return <h1>Is isLoading</h1>;

// setLessons(data);

// console.log("SetLessons: ");
// console.log("here:", data);

// const fetcher = (...args) => {
//   console.log("here");
//   fetch(...args).then((res) => res.json());
// };

/*



*/
