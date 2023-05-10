
import LessonOverviewHeader from "Components/LessonsOverview/LessonOverviewHeader";
import LessonOverviewList from "Components/LessonsOverview/LessonOverviewList";
import { useState } from "react";
import InvoiceForm from "Components/LessonsOverview/InvoiceForm";
import ButtonOpenInvoiceForm from "Components/Buttons/ButtonOpenInvoiceForm";

export default function LessonsPage() {
  const [selectAll, setSelectAll] = useState(false);
  const [invoiceInfo, setInvoiceInfo] = useState({});
  const [isFormOpen, setFormOpen] = useState(false);

  const handleToggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  function getInvoiceInfo(info) {
    setInvoiceInfo(info);
  }

  // function getInvoiceInfo(info) {
  //   setInvoiceInfo(info);
  // }

  return (
    <>
      <h1 className="bg-none p-10 text-center font-mono text-energy-200 text-2xl">
        YOUR LESSON OVERVIEW
      </h1>
      <LessonOverviewHeader
        handleSelectAll={setSelectAll}
        selectAll={selectAll}
      />
      <LessonOverviewList
        selectAllBoxes={selectAll}
        getInvoiceInfo={getInvoiceInfo}
        handleToggleForm={handleToggleForm}
      />
      {/* <ButtonOpenInvoiceForm handleToggleForm={handleToggleForm}/> */}
      {/* {lessonsIds.length != 0 &&  */}

      {/* <div className="absolute right-0 top-0 h-screen w-1/2 bg-white"> */}
      <div
        className={`transform transition-transform duration-500 ease-in ${
          isFormOpen ? "translate-x-100" : "translate-x-full"
        } bg-white h-full w-1/2}`}
      >
        <InvoiceForm invoiceInfo={invoiceInfo} />
      </div>
      {/* </div> */}
    </>
  );
}
{
  /* /* transform: translateX(100%);
    transition: all 0.35s ease-in;*/
  /*
     
 {/* {isFormOpen &&()}}*/
}

