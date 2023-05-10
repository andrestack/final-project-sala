import styled from "styled-components";
import InvoiceForm from "Components/LessonsOverview/InvoiceForm";
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

  const { date, address, invoiceNumber, IBAN, taxNumber, name, total } =
    showInvoice;

  return (
    <div className="bg-white text-sm font-mono rounded-lg ml-5 shadow-md p-5 w-5/6 pl-4 border-2 border-energy-200">
      <section className="grid grid-cols-2">
        <p name="name">{name}</p>
        <p name="address">{address}</p>
        <p name="invoiceNumber">Invoice Nr.: {invoiceNumber}</p>
        <p name="IBAN">IBAN: {IBAN}</p>
        <p name="taxNumber">Tax Nr.: {taxNumber}</p>
        <p name="date">{date && new Date(date).toLocaleDateString()}</p>
      </section>
      <section className="text-sm mt-6 grid grid-cols-6 content-around h-8 border-b">
        <label className="text-center font-mono" htmlFor="Date">
          Date
        </label>
        <label className="text-center font-mono" htmlFor="Course">
          Course
        </label>
        <label className="text-center font-mono" htmlFor="End Time">
          Duration
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
      </section>
      <section className="border-b h-8">
        {lessons?.map((lesson) => {
          const date = new Date(lesson.startTime).toLocaleDateString();
          const duration = lesson.endTime - lesson.startTime;
          const fee = 25;
          return (
            <div
              className="grid grid-cols-6 content-around text-center text-sm mt-2"
              key={lesson._id}
            >
              <Label htmlFor="date">{date}</Label>
              <Label htmlFor="course-code">{lesson.courseCode}</Label>
              <Label htmlFor="duration">
                {millisToMinutesAndSeconds(duration)}
              </Label>
              <Label>{lesson.unitTotal}</Label>
              <Label>{fee}</Label>
              <Label htmlFor="total">{lesson.unitTotal * fee}</Label>
            </div>
          );
        })}
      </section>
      <div className="text-sm mt-6 grid grid-cols-6 content-around bg-white h-8">
        <label className="text-center font-mono" htmlFor="Date"></label>
        <label className="text-center font-mono" htmlFor="Course"></label>
        <label className="text-center font-mono" htmlFor="Duration"></label>
        <label className="text-center font-mono" htmlFor="total-units">
          {total}
        </label>
        <label className="text-center font-mono" htmlFor="Euro-unit"></label>
        <label className="text-center font-mono" htmlFor="total-euro">
          {total && (total * 25)}
        </label>
      </div>
    </div>
  );
}
