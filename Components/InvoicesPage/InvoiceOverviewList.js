import useSWR from "swr";
import useButtonStore from "utils/useButtonStore";
import { useState } from "react";

export default function InvoiceOverviewList({ filteredData, onClick }) {

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

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
            <ul key={invoice._id} id="lessons">
              {/* <input
                name={lesson.roomName}
                value={lesson._id}
                type="checkbox"
                checked={selectAllBoxes ? "checked" : null}
              ></input> */}
              <div isVisible={isVisible}
                className="grid grid-cols-4 content-center shadow-md p-4 mr-5 "
                onClick={() => handleClick(invoice)}
              >
                <li htmlFor="date">{date}</li>
                <li htmlFor="invoice-nr">{invoice.invoiceNumber}</li>
                <li htmlFor="total">{invoice.total * fee}</li>
                
              </div>
            </ul>
          );
        })}
        <button onClick={toggleVisibility} htmlFor="delete">X</button>

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
