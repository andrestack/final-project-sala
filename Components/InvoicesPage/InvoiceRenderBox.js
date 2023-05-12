import styled from "styled-components";
import html2canvas from "html2canvas";
import { useRef } from "react";

const Label = styled.label`
  font-weight: bold;
  @media (max-width: 390px) {
    margin-top: 1rem;
  }
`;

export default function InvoiceRenderBox({ showInvoice, lessons }) {
  const captureRef = useRef(null);

  function saveAsImage() {
    html2canvas(captureRef.current).then((canvas) => {
      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "invoice.png";
      link.click();
    });
  }

  const {
    date,
    address,
    invoiceNumber,
    IBAN,
    taxNumber,
    name,
    total,
    footer,
    textArea,
  } = showInvoice;

  return (
    <div
      ref={captureRef}
      className="bg-white text-base font-mono rounded-lg ml-5 shadow-md p-5 mr-10 h-auto px-4 border-2 border-energy-200 relative"
    >
      <div className=" p-5">
        <section className="w-full sm:w-1/2">
          <p className="my-2" name="name">
            {name}
          </p>
          <p className="my-2" name="address">
            {address}
          </p>
        </section>
        <div className="mt-10 text-right">
          <p className="my-2" name="invoiceNumber">
            <b>Invoice Nr.:</b> {invoiceNumber}
          </p>
          <p className="my-2" name="IBAN">
            <b>My IBAN:</b> {IBAN}
          </p>
          <p className="my-2" name="taxNumber">
            <b>My Tax Nr.:</b> {taxNumber}
          </p>
        </div>
      </div>
      <p className="mt-20 text-right mx-10" name="date">
        Berlin, {date && new Date(date).toLocaleDateString()}
      </p>
      <div className="mt-20 text-base grid grid-cols-5 content-around border-b">
        <label className="text-center font-mono" htmlFor="Date">
          Date
        </label>
        <label className="text-center font-mono" htmlFor="Course">
          Course
        </label>

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
      <section className="h-auto">
        {lessons?.map((lesson) => {
          const options = { month: "numeric", day: "numeric" };
          const date = new Date(lesson.startTime).toLocaleDateString(
            undefined,
            options
          );
          // const duration = lesson.endTime - lesson.startTime;
          const fee = 25;
          return (
            <div
              className="grid grid-cols-5 content-around text-center text-sm mt-2 h-auto"
              key={lesson._id}
            >
              <Label htmlFor="date">{date}</Label>
              <Label htmlFor="course-code">{lesson.courseCode}</Label>

              <Label>{lesson.unitTotal}</Label>
              <Label>{fee}</Label>
              <Label htmlFor="total">{lesson.unitTotal * fee}</Label>
            </div>
          );
        })}
      </section>
      <div className="text-base mt-9 grid grid-cols-5 content-around bg-white h-8 border-t">
        <label className="text-center font-mono" htmlFor="Date"></label>
        <label className="text-center font-mono" htmlFor="Course"></label>
        {/* <label className="text-center font-mono" htmlFor="Duration"></label> */}
        <label className="text-center font-mono" htmlFor="total-units">
          {total}
        </label>
        <label className="text-center font-mono" htmlFor="Euro-unit"></label>
        <label className="text-center font-mono" htmlFor="total-euro">
          {total && total * 25}€
        </label>
      </div>
      <section className="mt-8 p-5">
        <div>
          <div className="my-2 text-sm ">{textArea}</div>
        </div>

        <div className="mt-52 flex flex-col justify-end">
          <div className="text-xs text-center">{footer}</div>
        </div>
      </section>
      <div className="absolute top-2 right-7 text-center">
        <button className="p-1 text-4xl">
          <a onClick={saveAsImage}>⎙</a>
        </button>
      </div>
    </div>
  );
}
