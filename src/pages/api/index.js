import dbConnect from "db/connect";
import Lesson from "db/models/Lesson";

export default async function handler(request, response) {
  await dbConnect();
  const { id: roomName } = request.query;
  const startTime = new Date();
  console.log(startTime);

  switch (request.method) {
    case "POST":
      const lessonToCreate = await Lesson.create({
        roomName,
        startTime,
      });
      response.status(200).json(lessonToCreate);
      break;
    case "GET":
      const lesson = await Lesson.find();
      response.status(200).json(lesson);
      break;
    default:
      return response.status(404).json({ status: "Not found" });
  }
}
