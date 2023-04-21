import useButtonStore from "../utils/useButtonStore";
import JitsiMeet from "./JitsiMeet";

export default function ButtonOpenJitsi() {
  const isVisible = useButtonStore((state) => state.isVisible);
  const toggleVisibility = useButtonStore((state) => state.toggleVisibility);

  return (
    <>
      
        <button className="bg-focus-100 " onClick={toggleVisibility}>
          Open Meeting
        </button>
        {isVisible && <JitsiMeet />}
      
    </>
  );
}
