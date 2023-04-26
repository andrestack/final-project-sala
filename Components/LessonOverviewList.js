import { useEffect } from "react";
import useSWR from "swr";
import useLessonStore from "utils/useLessonStore";

const fetcher = (...args) => {
  console.log("here");
  fetch(...args).then((res) => res.json());
};

export default function LessonOverviewList() {
  const { lessons, setLessons } = useLessonStore();

  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });

  useEffect(() => {
    if (data.length === 0) {
      setLessons(data);
    }
  }, []);

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  // setLessons(data);

  // console.log("SetLessons: ");
  // console.log("here:", data);

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
              <input type="checkbox"></input>
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
