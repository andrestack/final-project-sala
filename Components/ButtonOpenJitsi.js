import useButtonStore from "../utils/useButtonStore";
import JitsiMeet from "./JitsiMeet";


export default function ButtonOpenJitsi() {
  const isVisible = useButtonStore((state) => state.isVisible);
  const toggleVisibility = useButtonStore((state) => state.toggleVisibility);

  return (
    <div className="place-items-center w-full flex flex-col">
      <button
        name="button"
        className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
        onClick={toggleVisibility}
      >
        Open Meeting
      </button>
      {isVisible && <JitsiMeet />}
    </div>
  );
}

/* from-focus-400 to-focus-100 hover:from-energy-100 hover:to-energy-400
from-energy-100 to-energy-400 hover:from-focus-400 to-focus-100
*/
