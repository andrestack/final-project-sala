import useSWR from "swr";


// import useCheckBoxStore from "utils/useCheckBoxStore";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function InvoiceOverviewList({ selectAllBoxes }) {
  const { data, isLoading, error } = useSWR("/api/invoices", fetcher, {
    fallbackData: [],
  });

  const filteredData = data.filter((lesson) => lesson.total === 2);
  console.log(filteredData);

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  return (
    <form>
      <div role="list" className="ml-5">
        <h2 className="text-lg font-bold mb-4">INVOICES</h2>
        {filteredData.map((lesson) => {
          const date = new Date(lesson.date).toLocaleDateString();
          const fee = 25;
          return (
            <ul
              className="grid grid-cols-3 content-center shadow-md p-4 mr-5"
              key={lesson._id}
              id="lessons"
            >
              {/* <input
                name={lesson.roomName}
                value={lesson._id}
                type="checkbox"
                checked={selectAllBoxes ? "checked" : null}
              ></input> */}
              <li htmlFor="date">{date}</li>
              <li htmlFor="invoice-nr">{lesson.invoiceNumber}</li>
              <li htmlFor="total">{lesson.total * fee}</li>
            </ul>
          );
        })}

        {/* <button
          name="button"
          className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
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
