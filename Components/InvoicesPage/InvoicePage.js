import useSWR from "swr";
import InvoiceOverviewList from "./InvoiceOverviewList";
import InvoiceRenderBox from "./InvoiceRenderBox";
import InvoiceOverviewHeader from "./InvoiceOverviewHeader";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function InvoicePage({ invoiceInfo }) {
 
  const [showInvoice, setShowInvoice] = useState("");
  const [lessons, setLessons] = useState([]);

  const { data, isLoading, error } = useSWR("/api/invoices", fetcher, {
    fallbackData: [],
  });

  const filteredData = data.filter((invoice) => invoice.invoiceNumber);
  // console.log("non filtered", data);

  if (error) return <h1>ERROR</h1>;
  if (isLoading) return <h1>Is isLoading</h1>;

  async function handleClick(clickedInvoiced) {
    setShowInvoice(clickedInvoiced);
    

    // const filteredId = filteredData.filter((id) => id._id);
    const url = `/api/invoices/${clickedInvoiced._id}`;
    const response = await fetch(url);
    let newData = await response.json();

    setLessons(newData.lessons);

    // GET REQUEST invoice/invoice here usando do ID
  }

  return (
    <>
      <InvoiceOverviewList onClick={handleClick} filteredData={filteredData} />
      <InvoiceRenderBox showInvoice={showInvoice} lessons={lessons} />
    </>
  );
}
