import mongoose from "mongoose";

const { Schema } = mongoose;

const invoiceSchema = new Schema({
  total: { type: Number },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  date: { type: Date, default: Date.now }, // set default as current date,
  name: { type: String },
  address: { type: String },
  IBAN: { type: String },
  "tax number": { type: String },
  "text-area": { type: String },
  footer: { type: String },
});

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
