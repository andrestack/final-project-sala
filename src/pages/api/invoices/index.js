import dbConnect from "db/connect";
import Invoice from "db/models/Invoice";
import Lesson from "db/models/Lesson";

async function markLessonAsInvoiced(id) {
  const lessonData = await Lesson.findByIdAndUpdate(id, {
    isInvoiced: true,
  });

  await lessonData.save();

  return lessonData;
}

export default async function handler(request, response) {
  await dbConnect();
  const { _id } = request.query;

  const date = new Date().toLocaleDateString();

  if (request.method === "GET") {
    const invoice = await Invoice.find();
    response.status(200).json(invoice);
  }

  if (request.method === "POST") {
    try {
      const invoiceData = request.body;
      console.log({ invoiceData });

      let total = 0;
      for (let data of invoiceData) {
        const lesson = await markLessonAsInvoiced(data);
        total += lesson.unitTotal;
      }

      console.log("total", invoiceData);

      const invoiceToCreate = await Invoice.create({
        total: total,
        date,
        lessons: invoiceData,
      });
      const populatedInvoice = await Invoice.populate(invoiceToCreate, {
        path: "lessons",
      });

      console.log("populate", populatedInvoice);
      return response.status(201).json(populatedInvoice);
    } catch (error) {
      console.log(error);

      response.status(400).json({ error: error.message });
    }
  }
  if (request.method === "PATCH") {
    console.log("patch body", request.body);
    try {
      const invoiceToUpdate = await Invoice.findByIdAndUpdate(
        request.body.updatedInvoicesIds,
        request.body.invoiceData,
        { new: true }
      );
      const populatedUpdateInvoices = await Invoice.populate(invoiceToUpdate, {
        path: "lessons",
      });
   
      return response.status(200).json(populatedUpdateInvoices);
    } catch (error) {
      console.log(error);
    }
  }
}

// Need to calculate the total € - do this inside the forEach
// Create a new invoice, need to pass in to it the array of ids and the total,
// invoice needs to be populated with the lesson data
// return response with the new invoice object and populate with

// if (request.method === "GET") {
//   const invoices = await Invoice.find();

//   return response.status(200).json(invoices);
// } else {
//   return response.status(405).json({ message: "Method not allowed" });
// }

/*

post request  with a body: lessons
selectMany passing and array of ids




monfoose: hoew to tget a sum of certain field by their (lesson)-ids

*/
