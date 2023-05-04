export default function ButtonAddCourseCode() {
  return (
    <>
     <label className="text-lg">
      
        What course are you teaching?
       
      </label>
    <div className="place-items-center w-full flex justify-self-auto flex-row">
      <label className="text-lg">
        
        <input
          placeholder="Course Code"
          type="text"
          className="p-2"
        />
      </label>

      <button
        name="button"
        className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-2 text-align-center"
      >
        Add Course Code
      </button>
    </div>
    </>
  );
}
