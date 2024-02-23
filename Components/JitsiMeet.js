"use client";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import JitsiScript from "./JitsiScript";

export default function JitsiMeet({ courseCode }) {
  const [joinEvent, setJoinEvent] = useState(null);

  const jitsiContainer = useRef(null);

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: "1234556674",
      width: "",
      height: 600,
      parentNode: jitsiContainer.current,
      lang: "en",
      interfaceConfigOverwrite: {
        SHOW_CHROME_EXTENSION_BANNER: false,
      },
    };

    const api = new JitsiMeetExternalAPI(domain, options);

    api.addListener("videoConferenceJoined", (e) => {
      console.log("Start", e);
    });

    return () => {
      if (api) {
        api.dispose();
      }
    };
  }, []);

  return <div ref={jitsiContainer} />;
}

// const Chance = require("chance");
// const chance = new Chance();

// const randomCountry = chance.country({ full: true });
// // const randomAnimal = chance.animal({ type: "ocean" });
// const randomRoomNumber = chance.natural({ min: 156789547, max: 999999999 });
// const randomRoomName = `${randomRoomNumber} ${randomCountry}`;

//   useEffect(() => {
//     api.current = new JitsiMeetExternalAPI(domain, options);

//     api.current.addListener("videoConferenceJoined", () => {
//       toast.success("The start time has been registered!");
//       handleMeetingStart();
//     });

//     api.current.addListener("videoConferenceLeft", () => {
//       toast.success("The end time has been registered");
//       handleMeetingEnd();
//       window.location.href = "localhost:3000/lessons";
//       jitsiClose();
//     });

//     function jitsiClose() {
//       jitsiApi.current?.dispose?.();
//     }

//     async function handleMeetingStart() {
//       const url = `/api/${options.roomName}/start-unit`;
//       const response = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify({ courseCode }),

//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         toast.error("ERROR! Please inform the admin");
//       } else {
//         console.error(`Error: ${response.status}`);
//       }
//     }

//     async function handleMeetingEnd() {
//       const url = `/api/${options.roomName}/end-unit`;
//       const response = await fetch(url, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         alert("Unable to register meeting end time. Please inform the admin");
//       } else {
//         console.error(`Error: ${response.status}`);
//       }
//     }

//     return () => {
//       jitsiApi.current?.dispose?.();
//     };
//   });

//   return (
//     <div
//       styles={
//         {
//           // text: "center",
//           // padding: "10px",
//           // height: "400px",
//           // border: "10px dashed #df486f",
//         }
//       }
//       ref={jitsiContainer}
//     />
//   );
// }
