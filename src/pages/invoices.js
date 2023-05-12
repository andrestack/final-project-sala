import InvoiceOverviewHeader from "Components/InvoicesPage/InvoiceOverviewHeader";
import InvoiceOverviewList from "Components/InvoicesPage/InvoiceOverviewList";
import { useState } from "react";
import InvoicePage from "Components/InvoicesPage/InvoicePage";
import Header from "Components/Header";
import Head from "next/head";


export default function InvoicesPage({invoiceInfo}) {
  console.log("invoiceInfo on invoices page", invoiceInfo)
  
  
  const [selectAll, setSelectAll] = useState(false);

  return (
    <>
    <Head>
        <title>Your Invoices</title>
        <meta name="description" content="invoices" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>
      <h1 className="bg-none p-5 m-20 text-center font-sans font-bold text-energy-200 text-3xl">
        YOUR INVOICE OVERVIEW
      </h1>
      <div className="grid grid-cols-2 p-5 my-5">
        <InvoicePage invoiceInfo={invoiceInfo}/>
        
        
      </div>
    </>
  );
}
