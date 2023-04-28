import useSWR from "swr";
import { useState } from "react";
// import useCheckBoxStore from "utils/useCheckBoxStore";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList({ selectAllBoxes }) {
  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });
  // console.log("data", data);

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  // const [lessons, setLessons] = useState([]);

  async function handleSubmitInvoice(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const lessonData = Object.fromEntries(formData);
    console.log("here", lessonData);

    const lessonIds = [];
    for (let lesson in lessonData) {
      console.log(lesson);
      lessonIds.push(lessonData[lesson]);
    }

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

  /* Transform lessondata into an array of the lesson ids: for in prop value
create a POST route 

*/

  /*
POST request an neues Schema "invoices" mit allen overview
POST findbyid


*/
  function lessonUnits(millis) {
    // if(millis< 2700000){ !--- this is 45 minutes
    //   return 0 }
    //   else if(millis <= 4800000 !--- this is 80 Minutes ---! && millis > 2700000){
    //     return 1 }
    //   else{
    //     return 2
    //   }

    //   }
    // }
    
    return millis < 2700000 ? 0 : millis <= 4800000 && millis > 2700000 ? 1 : 2;
  }

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <form onSubmit={handleSubmitInvoice}>
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
                name={lesson.roomName}
                value={lesson._id}
                type="checkbox"
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

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
