import mongoose from "mongoose";

const { Schema } = mongoose;

const invoiceSchema = new Schema({
  total: { type: Number, required: false },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
  date: { type: String, required: false },
});

const Invoice =
  mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);

export default Invoice;
