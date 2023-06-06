import Invoice from "db/models/Invoice";
import dbConnect from "db/connect";



export default async function handler(request, response) {
    await dbConnect();
    const { invoice } = request.query;
    

  
   
  
    if (request.method === "GET") {
      const createdInvoice = await Invoice.findById(invoice);
    
      const populatedCreatedInvoice = await Invoice.populate(createdInvoice, {
        path: "lessons",
      });
    
      response.status(200).json(populatedCreatedInvoice);
    }

}