import dbConnect from "db/connect";
import Invoice from "db/models/Invoice";


export default async function handler(request, response) {
  await dbConnect();
  const{ lessonId} = request.query

  if (request.method === "POST") {
    try {
      const invoiceData = request.body;
      console.log(invoiceData)
      const invoice = new Invoice(invoiceData);
      
      await invoice.save();
      response.status(201).json({ status: "Invoice info submitted" });
    } catch (error) {
      console.log(error);
      
      response.status(400).json({ error: error.message });
    }
  }
}

/*

post request  with a body: lessons
selectMany passing and array of ids




monfoose: hoew to tget a sum of certain field by their (lesson)-ids

*/
