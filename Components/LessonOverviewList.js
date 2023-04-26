import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList() {
  const { data } = useSWR("/api/", fetcher, { fallbackData: [] });
  
function lessonUnits(millis){
  if(millis < 2700000){
    return 0 
  } else if((millis <= 4800000) && (millis > 2700000 )) {
    return 1 
  } else {
    return 2
  }
}

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }



  

  // useEffect(() => {
  //   const fetchData = async () =>
  //     const data = await fetch("/api");
  //     const res = await data.json();
  //     console.log(res);
  //   };

  //   // call the function
  //   fetchData()
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, []);

  /*
  <List role="list">
        {data.map((place) => {
          return (
            <ListItem key={place._id}>
              <Card
                name={place.name}
                image={place.image}
                location={place.location}
                id={place._id}
              />
            </ListItem>
          );
        })}
      </List>
  
  */

  return (
    <>
      <div role="list" className="text-center font-mono mt-6">
        {data.map((lesson) => {
          const duration = lesson.endTime - lesson.startTime
          const date = new Date(lesson.startTime).toLocaleDateString()
         const fee = 25
          return (
            <ul className="grid grid-cols-6 text-energy-400 text-xl" key={lesson._id}>
              <li>{date}</li>
              <li></li>
              <li>
                {millisToMinutesAndSeconds(duration)}
              </li>
              <li>{lessonUnits(duration)}</li>
              <li>{fee}</li>
              <li>{lessonUnits(fee)}</li>
              
              
            </ul>
          );
        })}
      </div>
    </>
  );
}
