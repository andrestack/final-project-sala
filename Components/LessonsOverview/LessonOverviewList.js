import useSWR from "swr";
import { useState } from "react";
import { lessonUnits } from "utils/lessonUnits";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList({ selectAllBoxes, getInvoiceInfo }) {
  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });

  const filteredData = data.filter((lesson) =>
    !lesson.isInvoiced ? lesson : null
  );

  // console.log(filteredData)
  // console.log(filteredData);

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  const buildLessonIds = (lessonData) => {
    const lessonIds = [];
    for (let lesson in lessonData) {
      lessonIds.push(lessonData[lesson]);
    }
    return lessonIds;
  };

  async function handleAddToInvoices(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const lessonData = Object.fromEntries(formData);

    const lessonIds = buildLessonIds(lessonData);

    const filteredLesson = filteredData.filter((lesson) =>
      lessonIds.includes(lesson._id)
    );

    // create a POST fetch
    const url = `/api/invoices`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(filteredLesson),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Could not submit information properly. Please inform the admin");
      console.error(`Error: ${response.status}`);
    } else {
      console.log("RESPONSE: ", data);
      getInvoiceInfo(data);
    }
  }

  /* create a POST route 

*/

  /*
POST request an neues Schema "invoices" mit allen overview
POST findbyid


*/

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <form onSubmit={handleAddToInvoices}>
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
              <label htmlFor="total">{lesson.unitTotal * fee}</label>
            </div>
          );
        })}

        <button
          className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
          type="submit"
        >
          Add to Invoice
        </button>
      </div>
    </form>
  );
}
