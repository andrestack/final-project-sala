"use client";

import { useCallback, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import getEnvVar from "../utils/env";
import jwt from "jsonwebtoken";
import { uniqueId } from "lodash";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function JitsiMeet({ courseCode }) {
  const jitsiContainer = useRef(null);
  const api = useRef(null);

  const Chance = require("chance");
  const chance = new Chance();

  const randomRoomNumber = chance.natural({ min: 156789547, max: 999999999 });
  const privateKey = getEnvVar("JITSI_PRIVATE_KEY");
  const generateJWT = useCallback(() => {
    const kid = "vpaas-magic-cookie-4786ced411f94b66910a5424cfb7b1f7/a15a8f";
    const now = new Date();
    const token = jwt.sign(
      {
        aud: "jitsi",
        context: {
          user: {
            id: uniqueId(),
            // name,
            // avatar,
            // email: email,
            moderator: "true",
          },
          features: {
            livestreaming: "true",
            recording: "true",
            transcription: "true",
            "outbound-call": "true",
          },
        },
        iss: "chat",
        room: `${randomRoomNumber}`,
        sub: "vpaas-magic-cookie-4786ced411f94b66910a5424cfb7b1f7",
        exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
        nbf: Math.round(new Date().getTime() / 1000) - 10,
      },
      privateKey,
      { algorithm: "RS256", header: { kid } }
    );
    return token;
  }, [randomRoomNumber, privateKey]);

  const { user } = useUser();
  const token = generateJWT(privateKey, {
    // Pass your generated private key
    id: uniqueId, // You can generate your own id and replace uuid()
    name: `${user?.given_name}`, // Set the user name
    email: "my user email", // Set the user email
    avatar: "my avatar url", // Set the user avatar
    appId: "vpaas-magic-cookie-4786ced411f94b66910a5424cfb7b1f7", // Your AppID
    kid: "vpaas-magic-cookie-4786ced411f94b66910a5424cfb7b1f7/a15a8f", // Set the api key, see https://jaas.8x8.vc/#/apikeys for more info.
  });

  console.log(token); // Write JWT to console.

  /*
const generate = (privateKey, { id, name, email, avatar, appId, kid }) => {
  const now = new Date()
  const jwt = jsonwebtoken.sign({
    aud: 'jitsi',
    context: {
      user: {
        id,
        name,
        avatar,
        email: email,
        moderator: 'true'
      },
      features: {
        livestreaming: 'true',
        recording: 'true',
        transcription: 'true',
        "outbound-call": 'true'
      }
    },
    iss: 'chat',
    room: '*',
    sub: appId,
    exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
    nbf: (Math.round((new Date).getTime() / 1000) - 10)
  }, privateKey, { algorithm: 'RS256', header: { kid } })
  return jwt;
}


  const token = generate('my private key', { // Pass your generated private key
    id: uuid(), // You can generate your own id and replace uuid()
    name: "my user name", // Set the user name
    email: "my user email", // Set the user email
    avatar: "my avatar url", // Set the user avatar
    appId: "my app id", // Your AppID
    kid: "my api key" // Set the api key, see https://jaas.8x8.vc/#/apikeys for more info.
});

console.log(token); // Write JWT to console.
  
  */

  useEffect(() => {
    const classToken = generateJWT();
    if (!api.current) {
      let api;
      const initIframAPI = () => {
        const domain = "8x8.vc";
        const options = {
          roomName: `vpaas-magic-cookie-4786ced411f94b66910a5424cfb7b1f7/a15a8f/${randomRoomNumber}`,
          jwt: `${classToken}`,
          width: 700,
          height: 700,
          parentNode: jitsiContainer.current,
          lang: "en",
          interfaceConfigOverwrite: {
            SHOW_CHROME_EXTENSION_BANNER: false,
          },
        };
        try {
          api = new JitsiMeetExternalAPI(domain, options);
        } catch (error) {
          console.error("Error initializing JitsiMeetExternalAPI:", error);
        }
      };

      window.onload = () => {
        initIframAPI();
      };
    }
  }, [generateJWT, randomRoomNumber]);

  return <div ref={jitsiContainer} />;
}
