import mongoose from "mongoose";

const { Schema } = mongoose;

const lessonSchema = new Schema({
  startTime: { type: Number, required: true },
  endTime: { type: Number, required: true },
  jitsiID: { type: Number, required: true },
});

const Lesson = mongoose.models.Lesson || mongoose.model("Course", lessonSchema);

export default Lesson;
