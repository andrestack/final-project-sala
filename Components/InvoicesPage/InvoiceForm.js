import { useState } from "react";

export default function InvoiceForm() {
  const [address, setAddress] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [taxID, setTaxID] = useState("");
  const [date, setDate] = useState(new Date());
  const [mainSectionData, setMainSectionData] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [footer, setFooter] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission here, e.g. submit data to backend API
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        
        <input
        placeholder="Your address"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <br />
      <label>
        
        <input
        placeholder="Your IBAN"
          type="text"
          value={bankDetails}
          onChange={(event) => setBankDetails(event.target.value)}
        />
      </label>
      <br />
      <label>
        
        <input
        placeholder="Your Tax Number"
          type="text"
          value={taxID}
          onChange={(event) => setTaxID(event.target.value)}
        />
      </label>
      <br />
      <label>
        
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <br />
      <label>
        
        <textarea
          value={mainSectionData}
          onChange={(event) => setMainSectionData(event.target.value)}
        />
      </label>
      <br />
      <label>
        
        <textarea
        placeholder="Other info"
          value={otherInfo}
          onChange={(event) => setOtherInfo(event.target.value)}
        />
      </label>
      <br />
      <label>
      
        <textarea
        placeholder="footer"
          value={footer}
          onChange={(event) => setFooter(event.target.value)}
        />
      </label>
      <br />
      <button           className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"type="submit">Create Invoice</button>
    </form>
  );
}
