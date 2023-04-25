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

    jitsiApi.current = new JitsiMeetExternalAPI(domain, options);

    const startMeeting = jitsiApi.current.addListener(
      "videoConferenceJoined",
      () => {
        alert("You started a meeting!");
      }
    );

    const leaveMeeting = jitsiApi.current.addListener(
      "videoConferenceLeft",
      () => {
        alert("you left the meeting");
      }
    );

    // console.log(options.roomName);

    async function handleMeetingStart(event) {
      event.preventDefault();

      const response = await fetch("/api/start-unit", {
        method: "POST",
        body: JSON.stringify(startMeeting, options.roomName),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        await response.json();
      } else {
        console.error(`Error: ${response.status}`);
      }
    }

    async function handleMeetingEnd(event) {
      event.preventDefault();

      const response = await fetch("/api/end-unit", {
        method: "PATCH",
        body: JSON.stringify(leaveMeeting, options.roomName),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        await response.json();
      } else {
        console.error(`Error: ${response.status}`);
      }
    }

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
