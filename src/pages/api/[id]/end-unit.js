import dbConnect from "db/connect";
import Lesson from "db/models/Lesson";

export default async function handler(request, response) {
  await dbConnect();
  const { id: roomName } = request.query;
  const endTime = new Date();

  switch (request.method) {
    case "PATCH":
      const lesson = await Lesson.findOneAndUpdate({ roomName }, { endTime });
      response.status(200).json(lesson);
    default:
      return response.status(404).json({ status: "Not found" });
  }
}
/*
 const { id: jitsiId } = request.query;
  const startTime = new Date()

  switch (request.method) {
    case "POST":
      const lesson = await Lesson.create({
        jitsiId,
        startTime
      });
      response.status(200).json(lesson);
    default:
      return response.status(404).json({ status: "Not found" });
  }
}




*/