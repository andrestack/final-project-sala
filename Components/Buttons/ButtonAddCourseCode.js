import ButtonOpenJitsi from "./ButtonOpenJitsi";
import { useState } from "react";

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
console.log(courseCode)



  return (
    <>
      <label className="text-lg">What course are you teaching?</label>
      <div className="place-items-center w-full flex justify-self-auto flex-row">
        <label className="text-lg">
          <input
            required
            onChange={handleCourseCodeChange}
            disabled={!isMeetingButtonDisabled}
            placeholder="Course Code"
            type="text"
            className="p-2"
          />
        </label>

        <button
          name="button"
          disabled={noInput}
          onClick={handleEnableMeetingButton}
          className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-2 text-align-center"
        >
          Add Course Code
        </button>
      </div>
      {!isMeetingButtonDisabled && (
        <ButtonOpenJitsi courseCode={courseCode} onClick={handleOpenMeetingClick} />
      )}
    </>
  );
}
