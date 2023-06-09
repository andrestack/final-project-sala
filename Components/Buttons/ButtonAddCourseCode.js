import ButtonOpenJitsi from "./ButtonOpenJitsi";
import { useState } from "react";
import JitsiMeet from "../JitsiMeet";

export default function ButtonAddCourseCode() {
  const [courseCode, setCourseCode] = useState("");
  const [isMeetingButtonDisabled, setIsMeetingButtonDisabled] = useState(true);

  const noInput = courseCode.length < 4;

  function handleCourseCodeChange(event) {
    setCourseCode(event.target.value);
  }
  function handleEnableMeetingButton(event) {
    setIsMeetingButtonDisabled(false);
  }

  function handleOpenMeetingClick() {
    setIsMeetingButtonDisabled(true);
  }
  console.log(courseCode);

  return (
    <>
      <div className="text-2xl text-center m-10 text-white font-sans">
        What course are you teaching?
      </div>
      <div className="mx-96  mt-10 mb-10 bg-gradient-to-r sm:flex-col from-focus-400 via-focus-100 to-focus-300 p-6 rounded-2xl">
        <div className="grid grid-cols-2 space-x-6">
          <label className="text-right mr-2">
            <input
              required
              onChange={handleCourseCodeChange}
              disabled={!isMeetingButtonDisabled}
              placeholder="add course code"
              type="text"
              className="p-2.5 text-sm font-sans rounded-xl lg:flex-col"
            />
          </label>
          <div className="">
            <button
              name="button"
              disabled={noInput}
              onClick={handleEnableMeetingButton}
              className="font-sans m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-xl text-white p-2"
            >
              Open Meeting
            </button>
          </div>
        </div>

        <div className="mt-3 flex justify-center">
          {!isMeetingButtonDisabled && <JitsiMeet courseCode={courseCode} />}
        </div>
      </div>
    </>
  );
}
