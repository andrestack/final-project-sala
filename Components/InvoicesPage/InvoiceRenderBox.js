import styled from "styled-components";
import InvoiceForm from "Components/LessonsOverview/InvoiceForm2";
import useSWR from "swr";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: yellow;
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 15rem;
  }
`;

const Label = styled.label`
  font-weight: bold;
  @media (max-width: 390px) {
    margin-top: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  background-color: #b4c7a8;
  border-radius: 0.3rem;
  font-size: 1rem;
  @media (max-width: 390px) {
    width: 15rem;
  }
`;

const Textarea = styled.textarea`
  adding: 0.5rem;
  font-size: inherit;
  border: 1px solid black;
  background-color: #b4c7a8;
  border-radius: 0.3rem;
  font-size: 1rem;
  @media (max-width: 390px) {
    width: 15rem;
  }
`;

export default function InvoiceRenderBox({ showInvoice, lessons }) {
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
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
    <div className="bg-white sticky top-0  text-lg font-mono rounded-lg ml-5 shadow-md p-5 mr-10 h-4/5 px-4 border-2 border-energy-200">
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
      <div className="mt-20 text-lg grid grid-cols-5 content-around border-b">
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
      <section className="h-8">
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
              className="grid grid-cols-5 content-around text-center text-sm mt-2"
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
      <div className="text-lg mt-9 grid grid-cols-5 content-around bg-white h-8 border-t">
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
    </div>
  );
}
