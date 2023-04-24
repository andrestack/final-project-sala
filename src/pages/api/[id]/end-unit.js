import dbConnect from "db/connect";
import Lesson from "db/models/Lesson";

export default async function handler(request, response) {
  await dbConnect();
  const { id: jitsiId } = request.query;
  const endTime= new Date()

  switch (request.method) {
    case "PATCH":
      const lesson = await Lesson.findByIdAndUpdate({
        jitsiId,
        endTime
      });
      response.status(200).json(lesson);
    default:
      return response.status(404).json({ status: "Not found" });
  }
}

/*
create the endTime
need to use the lesson model to update an existing lesson: 
1. Update = how to find the Lesson (find by jitsiId - it should be unique) + What to change: add an endTime
2. Inside the JitsiMeetingAPI component and inside useEffect  add 2 event listeners to the object (join - you want to grab the jitsi room & and make a fetch request to the api route, POST, 
    and leave). 2nd event listener: when is triggered: get the room name, send (PATCH) the request with fetch in the end unit
*/