import useSWR from "swr";
import useButtonStore from "utils/useButtonStore";
import { useState } from "react";
import InvoiceOverviewHeader from "./InvoiceOverviewHeader";

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
      <div role="list" className="space-y-2 pr-5">
        <InvoiceOverviewHeader />
        {filteredData.map((invoice) => {
          const date = new Date(invoice.date).toLocaleDateString();
          const fee = 25;
          return (
            <div
              className="ml-5 grid grid-cols-3 text-energy-200 text-lg  shadow-lg hover:shadow-[1px_1px_7px_3px_#ff7f11] p-5 transition ease-out hover:-translate-x-2 delay-150"
              onClick={() => handleClick(invoice)}
              key={invoice._id}
              id="lessons"
            >
              <label className="text-center" htmlFor="date">{date}</label>
              <label className="text-center" htmlFor="invoice-nr">{invoice.invoiceNumber}</label>
              <label className="text-center" htmlFor="total">{invoice.total * fee} €</label>
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
