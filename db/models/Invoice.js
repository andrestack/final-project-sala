import mongoose from "mongoose";

const { Schema } = mongoose;

const invoiceSchema = new Schema({
  total: { type: Number },
  courseCode: { type: String, required: false },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  date: { type: Date, default: Date.now }, // set default as current date,
  name: { type: String },
  address: { type: String },
  IBAN: { type: String },
  taxNumber: { type: String },
  textArea: { type: String },
  footer: { type: String },
  invoiceNumber: {type: String}
});

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
