export default function InvoiceOverviewHeader({ handleSelectAll, selectAll }) {
  return (
    <div className="ml-5 grid grid-cols-3 pr-4 text-lg rounded-xl mb-4 content-around bg-gradient-to-r from-energy-100 to-energy-400 h-10">
      {/* <input
        type="checkbox"
        name="selectAll"
        onChange={() => handleSelectAll(!selectAll)}
        checked={selectAll}
      ></input> */}

      <label className="text-center font-mono" htmlFor="Date">
        Date
      </label>

      <label className="text-center font-mono" htmlFor="Course">
        Invoice Nr.
      </label>
      
      <label className="text-center font-mono" htmlFor="Total">
        Total
      </label>
    </div>
  );
}
