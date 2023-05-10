"use client";
import { useEffect, useRef } from "react";

export default function JitsiMeet({ courseCode }) {
  const jitsiContainer = useRef(null);
  const jitsiApi = useRef(null);

  const Chance = require("chance");
  const chance = new Chance();

  const randomCountry = chance.country({ full: true });
  const randomAnimal = chance.animal({ type: "ocean" });
  const randomRoomNumber = chance.natural({ min: 156789547, max: 999999999 });
  const randomRoomName = randomCountry + randomAnimal;

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: randomRoomName,
      width: "500px",
      height: "700px",
      text: "center",
      parentNode: jitsiContainer.current,
      configOverwrite: {},
      lang: "de",
      interfaceConfigOverwrite: {
        SHOW_CHROME_EXTENSION_BANNER: false,
      },
    };

    jitsiApi.current = new JitsiMeetExternalAPI(domain, options);

    jitsiApi.current.addListener("videoConferenceJoined", () => {
      alert("The start time has been registered!");
      handleMeetingStart();
    });

    jitsiApi.current.addListener("videoConferenceLeft", () => {
      alert("The end time has been registered. You will end the meeting");
      handleMeetingEnd();
      window.location.href = "http://localhost:3000/lessons";
    });

    async function handleMeetingStart() {
      const url = `/api/${options.roomName}/start-unit`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ courseCode }),

        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert("Unable to register meeting start time. Please inform the admin");
      } else {
        console.error(`Error: ${response.status}`);
      }
    }

    async function handleMeetingEnd() {
      const url = `/api/${options.roomName}/end-unit`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert("Unable to register meeting end time. Please inform the admin");
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
      styles={
        {
          // text: "center",
          // padding: "10px",
          // height: "400px",
          // border: "10px dashed #df486f",
        }
      }
      ref={jitsiContainer}
    />
  );
}

/* "use client";
import { useEffect, useRef } from "react";

export default function JitsiMeet() {
  const jitsiContainer = useRef(null);
  const jitsiApi = useRef(null);

  const Chance = require("chance");
  const chance = new Chance();

  // const randomCountry = chance.country({ full: true });
  // const randomAnimal = chance.animal({ type: "ocean" });
  const randomRoomNumber = chance.natural({ min: 156789547, max: 999999999 });
  // const randomRoomName = (randomCountry,randomAnimal);

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: randomRoomNumber,
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

    jitsiApi.current.addListener("videoConferenceJoined", () => {
      alert("You started a meeting!");
      handleMeetingStart();
    });

    jitsiApi.current.addListener("videoConferenceLeft", () => {
      alert("Are you sure you want to leave the meeting?");
      handleMeetingEnd();
    });

    // console.log(options.roomName);

    async function handleMeetingStart() {
      const url = `/pages/api/lessons/`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({roomName: options.roomName}),

        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert("Unable to start Meeting");
      } else {
        console.error(`Error: ${response.status}`);
      }
    }

    async function handleMeetingEnd() {
      const url = `/api/id/${options.roomName}/`;
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert("Unable to update, please inform the admin!");
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
*/
