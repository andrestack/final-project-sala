import { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-weight: bold;
  @media (max-width: 390px) {
    margin-top: 1rem;
  }
`;

export default function InvoiceForm({ invoiceInfo, handleToggleForm }) {
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [taxID, setTaxID] = useState("");
  const [date, setDate] = useState(new Date());
  const [textArea, setTextArea] = useState("");
  const [footer, setFooter] = useState("");

  const allTotal = invoiceInfo.total;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const invoiceData = Object.fromEntries(formData);
    const updatedInvoicesIds = invoiceInfo._id;

    const url = `/api/invoices`;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ updatedInvoicesIds, invoiceData }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      alert("Could not submit information properly. Please inform the admin");
      console.error(`Error: ${response.status}`);
    } else {
      console.log("RESPONSE FROM PATCH ", await response.json());
      alert("Invoice created successfully");
      // console.error(`Error: ${response.status}`);
    }

    handleToggleForm();
  }

  return (
    <form
      className="bg-gray-50 px-8 py-8 rounded-lg shadow-lg h-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full sm:w-1/2 mb-8 pr-4">
          <h2 className="text-lg font-medium mb-4">Contractor Information</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Contractor Name
            </label>
            <input
              required
              name="name"
              placeholder="Contractor's name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-medium mb-2"
            >
              Contractor Address
            </label>
            <textarea
              required
              name="address"
              placeholder="Contractor's address"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              rows="3"
              className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
            ></textarea>
          </div>
        </div>
        <div className="w-full sm:w-1/2 mb-8 pl-4">
          <h2 className="text-lg font-medium mb-4">Your Details</h2>
          <div className="mb-4">
            <label
              htmlFor="bank-details"
              className="block text-gray-700 font-medium mb-2"
            >
              Invoice Number
            </label>
            <input
              required
              name="invoiceNumber"
              placeholder="Your invoice number"
              type="text"
              value={invoiceNumber}
              onChange={(event) => setInvoiceNumber(event.target.value)}
              className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tax-number"
              className="block text-gray-700 font-medium mb-2"
            >
              Tax Number
            </label>
            <input
              type="text"
              name="taxNumber"
              id="tax-number"
              placeholder="Your tax number"
              value={taxID}
              onChange={(event) => setTaxID(event.target.value)}
              className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="tax-number"
              className="block text-gray-700 font-medium mb-2"
            >
              Your IBAN
            </label>
            <input
              required
              name="IBAN"
              placeholder="Your IBAN"
              type="text"
              value={bankDetails}
              onChange={(event) => setBankDetails(event.target.value)}
              className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-700 font-medium mb-2"
            >
              Date
            </label>
            <input
              type="date"
              required
              name="date"
              id="date"
              placeholder="Enter date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
      <div className="text-sm grid grid-cols-5 content-around border-b bg-gray-50 h-8">
        <label className="text-center font-mono" htmlFor="Date">
          Date
        </label>
        <label className="text-center font-mono" htmlFor="Course">
          Course
        </label>
        {/* <label className="text-center font-mono" htmlFor="End Time">
          Duration
        </label> */}
        <label className="text-center font-mono" htmlFor="Units">
          Units
        </label>
        <label className="text-center font-mono" htmlFor="Units">
          €/Unit
        </label>
        <label className="text-center font-mono" htmlFor="Total">
          €/Total
        </label>
      </div>
      <section className="bg-grey-50 mt-2">
        {invoiceInfo.lessons?.map((lesson) => {
          const date = new Date(lesson.startTime).toLocaleDateString();
          const duration = lesson.endTime - lesson.startTime;
          const fee = 25;
          return (
            <div
              key={lesson._id}
              className="bg-grey-50 grid grid-cols-5 content-around text-center h-auto"
            >
              <Label htmlFor="date">{date}</Label>
              <Label htmlFor="course-code">{lesson.courseCode}</Label>
              {/* <Label htmlFor="duration">
                {millisToMinutesAndSeconds(duration)}
              </Label> */}
              <Label>{lesson.unitTotal}</Label>
              <Label>{fee}</Label>
              <Label htmlFor="total">{lesson.unitTotal * fee}</Label>
            </div>
          );
        })}
      </section>

      <div className="text-sm mt-6 grid grid-cols-5 content-around border-t bg-gray-50 h-8">
        <label className="text-center font-mono" htmlFor="Date"></label>
        <label className="text-center font-mono" htmlFor="Course"></label>
        
        <label className="text-center font-mono" htmlFor="total-units">
          {allTotal}
        </label>
        <label className="text-center font-mono" htmlFor="Euro-unit"></label>
        <label className="text-center font-mono" htmlFor="total-euro">
          {allTotal && allTotal * 25}€
        </label>
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 font-medium mb-2"
        >
          Extra Information
        </label>
        <textarea
          name="textArea"
          id="address"
          placeholder="Any extra information?"
          rows="4"
          value={textArea}
          onChange={(event) => setTextArea(event.target.value)}
          className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 font-medium mb-2"
        >
          Footer
        </label>
        <textarea
          name="footer"
          id="address"
          placeholder="footer / signature/ etc."
          rows="4"
          value={footer}
          onChange={(event) => setFooter(event.target.value)}
          className="w-full py-2 px-4 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-150 ease-in-out hover:bg-gray-100"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          className="font-sans text-lg mt-6 bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
          type="submit"
        >
          Create Invoice
        </button>
      </div>
    </form>
  );
}
