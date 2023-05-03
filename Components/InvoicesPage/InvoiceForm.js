import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function InvoiceForm({ lessonsIds }) {
  console.log("LESSONS IN INVOICE: ", lessonsIds);
  const [address, setAddress] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [taxID, setTaxID] = useState("");
  const [date, setDate] = useState(new Date());
  const [mainSectionData, setMainSectionData] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [footer, setFooter] = useState("");

  // const { data, isLoading, error } = useSWR("/api/invoices", fetcher, {
  //   fallbackData: [],
  // });
  // if (error) return <h1>ERROR</h1>;
  // if (isLoading) return <h1>Is isLoading</h1>;
  // console.log(data);

  async function handleSubmit(event) {
    event.preventDefault();
  }

  //   const url = `/api/invoices`;
  //   const response = await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(lessonIds),
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   if (!response.ok) {
  //     alert("Could not submit information properly. Please inform the admin");
  //   } else {
  //     console.error(`Error: ${response.status}`);
  //   }
  // }

  // Handle form submission here, e.g. submit data to backend API
  return (
    <form className="" onSubmit={handleSubmit}>
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

      <div className="h-7 my-2 grid grid-cols-6 justify-center text-white text-sm">
        <>
          <label>test</label>
          <label>test</label>
          <label>test</label>
          <label>test</label>
          <label>test</label>
          <label>test</label>
        </>

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

        <button
          className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
          type="submit"
        >
          Create Invoice
        </button>
      </div>
    </form>
  );
}
