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
        Address:
        <input
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </label>
      <br />
      <label>
        Bank Details:
        <input
          type="text"
          value={bankDetails}
          onChange={(event) => setBankDetails(event.target.value)}
        />
      </label>
      <br />
      <label>
        TAX ID:
        <input
          type="text"
          value={taxID}
          onChange={(event) => setTaxID(event.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <br />
      <label>
        Main Section:
        <textarea
          value={mainSectionData}
          onChange={(event) => setMainSectionData(event.target.value)}
        />
      </label>
      <br />
      <label>
        Other Info:
        <textarea
          value={otherInfo}
          onChange={(event) => setOtherInfo(event.target.value)}
        />
      </label>
      <br />
      <label>
        Footer:
        <textarea
          value={footer}
          onChange={(event) => setFooter(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
