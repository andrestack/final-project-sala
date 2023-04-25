import useSWR from "swr";
import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function LessonOverviewList() {
  const { data } = useSWR("/api/", fetcher);
  console.log(data);

  // useEffect(() => {
  //   const fetchData = async () => {
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
      <div role="list">
        {data.map((lesson) => {
          return (
            <ul key={lesson._id}>
              <li>{lesson.startTime}</li>
              <li>{lesson.endTime}</li>
              <li>{lesson.roomName}</li>
            </ul>
          );
        })}
      </div>
      <p>{data.roomName}</p>
    </>
  );
}
