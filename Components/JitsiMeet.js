"use client";

import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

export default function JitsiMeet({ courseCode }) {
  const [token, setToken] = useState(null);
  const jitsiContainer = useRef(null);
  const api = useRef(null);

  const Chance = require("chance");
  const chance = new Chance();

  const randomRoomNumber = chance.natural({ min: 156789547, max: 999999999 });

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch("/api/generateJWT");
        const data = await response.json();
        console.log(data)
        setToken(data.token);
      } catch (error) {
        console.error("Error fetching token:", error);
        toast.error("Error fetching token");
      }
    };

    const initIFrameAPI = () => {
      if (!api.current) {
        const domain = "8x8.vc";
        const options = {
          roomName: `vpaas-magic-cookie-4786ced411f94b66910a5424cfb7b1f7/a15a8f/${randomRoomNumber}`,
          jwt: `${token}`, // Use the fetched token here
          width: 700,
          height: 700,
          parentNode: jitsiContainer.current,
          lang: "en",
          interfaceConfigOverwrite: {
            SHOW_CHROME_EXTENSION_BANNER: false,
          },
        };
        try {
          api.current = new JitsiMeetExternalAPI(domain, options);
        } catch (error) {
          console.error("Error initializing JitsiMeetExternalAPI:", error);
        }
      }
    };

    fetchToken().then(() => {
      // Ensure the token is fetched before initializing the iframe API
      initIFrameAPI();
    });
  }, [randomRoomNumber, token]);

  return <div ref={jitsiContainer} />;
}
