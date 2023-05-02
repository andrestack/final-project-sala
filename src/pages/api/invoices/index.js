import dbConnect from "db/connect";
import Invoice from "db/models/Invoice";
import Lesson from "db/models/Lesson";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const invoiceData = request.body;
      console.log(invoiceData)

      async function createInvoiceFromLesson(id) {
        const lessonData = await Lesson.findByIdAndUpdate(id, {
          isInvoiced: true,
        });
     
        lessonData.save();
      }

      invoiceData.forEach((data) => {
        createInvoiceFromLesson(data);
      });

      response.status(201).json({ status: "Invoice info submitted" });
    } catch (error) {
      console.log(error);

      response.status(400).json({ error: error.message });
    }
  }

  // if (request.method === "GET") {
  //   const invoices = await Invoice.find();
 
  //   return response.status(200).json(invoices);
  // } else {
  //   return response.status(405).json({ message: "Method not allowed" });
  // }
}

/*

post request  with a body: lessons
selectMany passing and array of ids




monfoose: hoew to tget a sum of certain field by their (lesson)-ids

*/
