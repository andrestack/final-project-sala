import useSWR from "swr";
import { useState } from "react";
import { lessonUnits } from "utils/lessonUnits";
// import useCheckBoxStore from "utils/useCheckBoxStore";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList({ selectAllBoxes }) {
  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });

  console.log(data.unitTotal);

  const filteredData = data.filter((lesson) =>
    lesson.isInvoiced ? lesson : null
  );

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <form>
      <div role="list" className="text-center font-mono mt-6">
        {filteredData.map((lesson) => {
          const duration = lesson.endTime - lesson.startTime;
          const date = new Date(lesson.startTime).toLocaleDateString();
          const fee = 25;
          return (
            <div
              className="h-7 my-2 grid grid-cols-7 content-around text-energy-400 text-xl"
              key={lesson._id}
              id="lessons"
            >
              <input
                name={lesson.roomName}
                value={lesson._id}
                type="checkbox"
                checked={selectAllBoxes ? "checked" : null}
              ></input>
              <label htmlFor="date">{date}</label>
              <label htmlFor="course-code"></label>
              <label htmlFor="duration">
                {millisToMinutesAndSeconds(duration)}
              </label>
              <label htmlFor="units">{lesson.unitTotal}</label>
              <label htmlFor="fee">{fee}</label>
              <label htmlFor="total">{lessonUnits(duration, fee)}</label>
            </div>
          );
        })}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
