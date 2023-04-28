import useSWR from "swr";
import { useState } from "react";
import { lessonUnits } from "utils/lessonUnits";
// import useCheckBoxStore from "utils/useCheckBoxStore";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList({  }) {
  const { data, isLoading, error } = useSWR("/api/invoices", fetcher, {
    fallbackData: [],
  });

  
  return (
    <form >
      <div role="list" className="text-center font-mono mt-6">
        {data.map((lesson) => {
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
              <label htmlFor="units">{lessonUnits(duration)}</label>
              <label htmlFor="fee">{fee}</label>
              <label htmlFor="total">{lessonUnits(fee)}</label>
            </div>
          );
        })}

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
