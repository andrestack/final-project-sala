import { useState } from "react";

import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  gap: 0.5rem;
  background-color: #b4c7a8;
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

export default function InvoiceForm({ invoiceInfo }) {
  console.log("first", invoiceInfo);

  const [address, setAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [bankDetails, setBankDetails] = useState("");
  const [taxID, setTaxID] = useState("");
  const [date, setDate] = useState(new Date());
  const [textArea, setTextArea] = useState("");
  const [footer, setFooter] = useState("");

  const allTotal = invoiceInfo.total;

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const invoiceData = Object.fromEntries(formData);
    const updatedInvoicesIds = invoiceInfo._id;

    const url = `/api/invoices`;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({ updatedInvoicesIds, invoiceData }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      alert("Could not submit information properly. Please inform the admin");
      console.error(`Error: ${response.status}`);
    } else {
      console.log("RESPONSE FROM PATCH ", await response.json());
      // console.error(`Error: ${response.status}`);
    }
  }

  // Handle form submission here, e.g. submit data to backend API
  return (
    <div>
      <div>
        <FormContainer onSubmit={handleSubmit}>
          <Label>
            <Input required name="name" placeholder="Your name" />
          </Label>
          <Label>
            <Input
              required
              name="address"
              placeholder="Your address"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </Label>
          <br />

          <Label>
            <Input
              required
              name="invoiceNumber"
              placeholder="Your invoice number"
              type="text"
              value={invoiceNumber}
              onChange={(event) => setInvoiceNumber(event.target.value)}
            />
          </Label>
          <br />

          <Label>
            <Input
              required
              name="IBAN"
              placeholder="Your IBAN"
              type="text"
              value={bankDetails}
              onChange={(event) => setBankDetails(event.target.value)}
            />
          </Label>

          <br />
          <Label>
            <Input
              name="taxNumber"
              required
              placeholder="Your Tax Number"
              type="text"
              value={taxID}
              onChange={(event) => setTaxID(event.target.value)}
            />
          </Label>
          <br />
          <Label>
            <Input
              name="date"
              required
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Label>
          <br />

          <div className="text-sm mt-6 grid grid-cols-6 content-around bg-white h-8">
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
          </div>
          <section className="bg-white">
            {invoiceInfo.lessons?.map((lesson) => {
              const date = new Date(lesson.startTime).toLocaleDateString();
              const duration = lesson.endTime - lesson.startTime;
              const fee = 25;
              return (
                <div
                  key={lesson._id}
                  className="bg-white grid grid-cols-6 content-around text-center"
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
              {allTotal}
            </label>
            <label
              className="text-center font-mono"
              htmlFor="Euro-unit"
            ></label>
            <label className="text-center font-mono" htmlFor="total-euro">
              {allTotal * 25}
            </label>
          </div>

          <div>
            <br />
            <Label>
              <Textarea
                name="textArea"
                placeholder="Other info"
                value={textArea}
                onChange={(event) => setTextArea(event.target.value)}
              />
            </Label>
            <br />
            <Label>
              <Textarea
                name="footer"
                placeholder="footer"
                value={footer}
                onChange={(event) => setFooter(event.target.value)}
              />
            </Label>

            <br />

            <button
              className="font-mono m-auto bg-gradient-to-r from-energy-100 to-energy-400 hover:from-focus-400 hover:to-focus-100 rounded-md text-white p-4 text-align-center"
              type="submit"
            >
              Create Invoice
            </button>
          </div>
        </FormContainer>
      </div>
    </div>
  );
}
