import InvoiceOverviewHeader from "Components/InvoicesPage/InvoiceOverviewHeader";
import InvoiceOverviewList from "Components/InvoicesPage/InvoiceOverviewList";
import { useState } from "react";
import InvoiceRenderBox from "Components/InvoicesPage/InvoiceRenderBox";
export default function InvoicesPage() {
  const [selectAll, setSelectAll] = useState(false);

  return (
    <>
      <h1 className="bg-none p-10 text-center font-mono text-energy-200 text-2xl">
        YOUR INVOICE OVERVIEW
      </h1>
      <div className="grid grid-cols-2">
        {/* <InvoiceOverviewHeader
          handleSelectAll={setSelectAll}
          selectAll={selectAll}
        /> */}
        <InvoiceOverviewList selectAllBoxes={selectAll} />

        <InvoiceRenderBox />
      </div>
    </>
  );
}
