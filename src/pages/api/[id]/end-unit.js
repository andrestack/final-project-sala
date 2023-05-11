import dbConnect from "db/connect";
import Lesson from "db/models/Lesson";
import { lessonUnits } from "utils/lessonUnits";

export default async function handler(request, response) {
  await dbConnect();
  const { id: roomName } = request.query;
  const endTime = new Date();

  switch (request.method) {
    case "PATCH":
      const lesson = await Lesson.findOne({ roomName });
      const startTime = lesson.startTime;
      const duration = endTime - startTime;
      const unitTotal = lessonUnits(duration);

      const updatedLesson = await Lesson.updateOne(
        { roomName },
        { endTime, unitTotal }
      );
      /* first get the lesson and then calculate how long it took by examining 
      the start and end time and then assign a value of endtime and then also of unit */
      return response.status(200).json(updatedLesson);
    default:
      return response.status(404).json({ status: "Not found" });
  }
}
