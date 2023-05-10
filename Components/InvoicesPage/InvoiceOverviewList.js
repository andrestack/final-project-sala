import useSWR from "swr";
import useButtonStore from "utils/useButtonStore";
import { useState } from "react";

export default function InvoiceOverviewList({ filteredData, onClick }) {
  // const [isVisible, setIsVisible] = useState(true);

  // const toggleVisibility = () => {
  //   setIsVisible(!isVisible);
  // }

  function handleClick(clickedInvoiced) {
    onClick(clickedInvoiced);
  }

  return (
    <form>
      <div role="list" className="ml-5">
        <h2 className="text-lg font-bold mb-4">INVOICES</h2>
        {filteredData.map((invoice) => {
          const date = new Date(invoice.date).toLocaleDateString();
          const fee = 25;
          return (
            <div
              className="grid grid-cols-3 content-center shadow-md p-4 mr-5 "
              onClick={() => handleClick(invoice)}
              key={invoice._id}
              id="lessons"
            >
              <label htmlFor="date">{date}</label>
              <label htmlFor="invoice-nr">{invoice.invoiceNumber}</label>
              <label htmlFor="total">{invoice.total * fee}</label>
            </div>
          );
        })}
        {/* <button onClick={toggleVisibility} htmlFor="delete">X</button> */}

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
