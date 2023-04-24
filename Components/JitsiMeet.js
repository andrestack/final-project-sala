"use client";
import { useEffect, useRef } from "react";

export default function JitsiMeet() {
  const jitsiContainer = useRef(null);
  const jitsiApi = useRef(null);

  const Chance = require("chance");
  const chance = new Chance();

  // const randomCountry = chance.country({ full: true });
  // const randomAnimal = chance.animal({ type: "ocean" });
  const randomRoomNumber = chance.integer({ max: 100000 });
  // const randomRoomName = (randomCountry,randomAnimal);

  useEffect(() => {
    jitsiApi.current = new JitsiMeetExternalAPI(domain, options);
    
    const domain = "meet.jit.si";
    const options = {
      roomName: `${randomRoomNumber}`,
      width: "700px",
      height: "700px",
      parentNode: jitsiContainer.current,
      configOverwrite: {},
      lang: "de",
      interfaceConfigOverwrite: {
        SHOW_CHROME_EXTENSION_BANNER: false,
      },
    };

    
   
    
    
jitsiApi.addListener("videoConferenceJoined", ()=> {console.log("Hello!")});
    
    // const leaveMeeting = api.addListener("videoConferenceLeft", () => {console.log("you left the meeting")} );


console.log(joinMeeting);


    return () => {
      jitsiApi.current?.dispose?.();
    };
  });

  return (
    <div
      styles={{
        text: "center",
        padding: "10px",
        height: "400px",
        border: "10px dashed #df486f",
      }}
      ref={jitsiContainer}
    />
  );
}
