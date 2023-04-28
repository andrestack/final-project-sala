
import dbConnect from "db/connect";
import Lesson from "db/models/Lesson";

export default async function handler(request, response) {
  await dbConnect();
  const { id: roomName } = request.query;
  const startTime = new Date()
  
  switch (request.method) {
    case "POST":
      const lesson = await Lesson.create({
        roomName,
        startTime
      });
      response.status(200).json(lesson);
    default:
      return response.status(404).json({ status: "Not found" });
  }
}

/**/