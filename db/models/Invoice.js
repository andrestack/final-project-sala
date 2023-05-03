import mongoose from "mongoose";

const { Schema } = mongoose;

const invoiceSchema = new Schema({
  total: { type: Number},
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  date: { type: Date, default: Date.now}, // set default as current date
});

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
