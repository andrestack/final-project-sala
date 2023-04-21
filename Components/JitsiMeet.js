"use client";
import { useEffect, useRef } from "react";


export default function JitsiMeet() {
  const jitsiContainer = useRef(null);
  const jitsiApi = useRef(null);

  const Chance = require("chance");
  const chance = new Chance();
  
  const randomCountry = chance.country({ full: true });
  const randomAnimal = chance.animal({ type: "ocean" });
  // const randomNumber = chance.integer({max: 100})
  const randomRoomName = randomCountry + randomAnimal;

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: `${randomRoomName}`,
      width: "700px",
      height: "700px",
      parentNode: jitsiContainer.current,
      configOverwrite: {},
      interfaceConfigOverwrite: {
        SHOW_CHROME_EXTENSION_BANNER: false,
      },
    };

    jitsiApi.current = new JitsiMeetExternalAPI(domain, options);

    return () => {
      jitsiApi.current?.dispose?.();
    };
  },);

  return (
    <div
      styles={{
        padding: "10px",
        height: "400px",
        border: "10px dashed #df486f",
      }}
      ref={jitsiContainer}
    />
  );
}
