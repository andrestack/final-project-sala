import dbConnect from "db/connect";
import Lesson from "db/models/Lesson";
import { lessonUnits } from "utils/lessonUnits";
import { toast } from "react-hot-toast";

export default async function handler(request, response) {
  await dbConnect();
  const { id: id } = request.query;
  const endTime = new Date();

  switch (request.method) {
    case "PATCH":
      const lesson = await Lesson.findOne({ id });
      if (!lesson) {
        toast.error("Lesson not found!");
        return response.status(404).json({ error: "Lesson not found!" });
      }
      const startTime = lesson.startTime;
      const duration = endTime - startTime;
      const unitTotal = lessonUnits(duration);

      const updatedLesson = await Lesson.updateOne(
        { id },
        { endTime, unitTotal }
      );
      /* first get the lesson and then calculate how long it took by examining 
      the start and end time and then assign a value of endtime and then also of unit */
      return response.status(200).json(updatedLesson);
    default:
      return response.status(404).json({ status: "Not found" });
  }
}
