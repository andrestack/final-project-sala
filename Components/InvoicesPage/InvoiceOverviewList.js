import useSWR from "swr";
import { useState } from "react";
import ButtonOpenInvoiceForm from "Components/Buttons/ButtonOpenInvoiceForm";
import InvoiceForm from "./InvoiceForm";
import useLocalStorageState from "use-local-storage-state"

// import useCheckBoxStore from "utils/useCheckBoxStore";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function InvoiceOverviewList({ selectAllBoxes }) {
  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });

  console.log(data);

  const filteredData = data.filter((lesson) =>
    lesson.isInvoiced ? lesson : null
  );

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  function lessonUnitsAndFee(millis, fee) {
    return (
      (millis < 2700000 ? 0 : millis <= 4800000 && millis > 2700000 ? 1 : 2) *
      fee
    );
  }

  async function handleGenerateInvoices(event) {
    
    event.preventDefault();
    const formData = new FormData(event.target);
    const lessonData = Object.fromEntries(formData);
    

    // create a POST to api
    const url = `/api/invoice`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(lessonData),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      alert("Could not submit information properly. Please inform the admin");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <form onSubmit={handleGenerateInvoices}>
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
              <label htmlFor="total">{lessonUnitsAndFee(duration, fee)}</label>
            </div>
          );
        })}

<button
        name="button"
        className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
        // onClick={toggleVisibility}
      >
        Add to Invoice
      </button>

{/* <ButtonOpenInvoiceForm/> */}
        {/* <button
          className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
          type="submit"
        >
          Submit
        </button> */}
      </div>
    </form>
  );
}
