import dbConnect from "db/connect";
import Lesson from "db/models/Lesson";

export default async function handler(request, response) {
  await dbConnect();
  const { id: roomName } = request.query;

  const startTime = new Date();

  switch (request.method) {
    case "GET":
      const lesson = await Lesson.find();

      response.status(200).json(lesson);
      break;

    case "POST":
      const lessonToCreate = await Lesson.create({
        roomName,
        startTime,
      });
      response.status(200).json(lessonToCreate);
      break;

    default:
      return response.status(404).json({ status: "Not found" });
  }
}
