import mongoose from "mongoose";

const { Schema } = mongoose;

const lessonSchema = new Schema({
  startTime: { type: Number, required: true },
  endTime: { type: Number },
  roomName: { type: String, required: true },
  unitTotal: { type: Number, required: false },
  euroTotal: { type: Number, required: false },
  isInvoiced: { type: Boolean, required: false, default: false },
  courseCode: { type: String, required: true },
});

const Lesson = mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema);

export default Lesson;
