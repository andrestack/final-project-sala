import useSWR from "swr";
import { useState } from "react";
import { lessonUnits } from "utils/lessonUnits";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList({ selectAllBoxes }) {
  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });
  // console.log("data", data);

  const filteredData = data.filter((lesson) =>
    !lesson.isInvoiced ? lesson : null
  );

  console.log(filteredData);

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  async function handleSubmitLessons(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const lessonData = Object.fromEntries(formData);
    console.log("here", lessonData);

    

    const lessonIds = [];
    for (let lesson in lessonData) {
      lessonIds.push(lessonData[lesson]);
      console.log(lessonIds);
    }
    // create a POST fetch
    const url = `/api/invoices`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(lessonIds),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      alert("Could not submit information properly. Please inform the admin");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  /* create a POST route 

*/

  /*
POST request an neues Schema "invoices" mit allen overview
POST findbyid


*/
  lessonUnits();

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <form onSubmit={handleSubmitLessons}>
      <div role="list" className="text-center font-mono mt-6">
        {filteredData.map((lesson) => {
          const duration = lesson.endTime - lesson.startTime;
          const date = new Date(lesson.startTime).toLocaleDateString();

          return (
            <div
              className="h-7 my-2 grid grid-cols-5 content-around text-energy-400 text-xl"
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
              {/* <label htmlFor="fee">{fee}</label>
              <label htmlFor="total">{lessonUnits(fee)}</label> */}
            </div>
          );
        })}

        <button
          className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
