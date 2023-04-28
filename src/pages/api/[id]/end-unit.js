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
     const unitTotal = lessonUnits(duration)
     const fee = 25
     const euroTotal=lessonUnits(fee)
console.log(euroTotal);
     const updatedLesson = await Lesson.updateOne({roomName}, {endTime, unitTotal, euroTotal }  )
      /* first get the lesson and then calculate how long it took by examining 
      the start and end time and then assign a value of endtime and then also of unit */
      response.status(200).json(updatedLesson);
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