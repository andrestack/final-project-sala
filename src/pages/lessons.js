import LessonOverviewHeader from "Components/LessonsOverview/LessonOverviewHeader";
import LessonOverviewList from "Components/LessonsOverview/LessonOverviewList";
import { useState } from "react";
import InvoiceForm from "Components/LessonsOverview/InvoiceForm";
import ButtonOpenInvoiceForm from "Components/Buttons/ButtonOpenInvoiceForm";
import MockUp from "Components/LessonsOverview/InvoiceForm";

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
      <h1 className="bg-none p-5 m-20 text-center font-sans font-bold text-energy-200 text-3xl">
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
        } bg-grey-50 absolute right-0 top-0 h-screen w-1/2 z-10 ${isFormOpen}`}
      >
        <InvoiceForm handleToggleForm={handleToggleForm} invoiceInfo={invoiceInfo} />
        {/* <InvoiceForm invoiceInfo={invoiceInfo} /> */}
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
