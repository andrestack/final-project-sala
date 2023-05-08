export default function InvoiceOverviewHeader({ handleSelectAll, selectAll }) {
  return (
    <div className="grid grid-3 w-1/2 pr-4 text-lg font-bold mb-4">
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
        €/Total
      </label>
    </div>
  );
}
