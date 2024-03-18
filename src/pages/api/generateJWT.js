import jsonwebtoken from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@auth0/nextjs-auth0/client";

const generateJWT = (privateKey, { id, name, email, avatar, appId, kid }) => {
  const now = new Date();
  const jwt = jsonwebtoken.sign(
    {
      aud: "jitsi",
      context: {
        user: {
          id,
          name,
          avatar,
          email: email,
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
      room: "*",
      sub: appId,
      exp: Math.round(now.setHours(now.getHours() + 3) / 1000),
      nbf: Math.round(new Date().getTime() / 1000) - 10,
    },
    privateKey,
    { algorithm: "RS256", header: { kid } }
  );
  return jwt;
};

export default function handler(req, res) {
  const privateKey = process.env.NEXT_PUBLIC_JITSI_PRIVATE_KEY;
  const appID = process.env.NEXT_PUBLIC_JITSI_APP_ID;
  const kid = process.env.NEXT_PUBLIC_JITSI_API_KEY;

  const token = generateJWT(privateKey, {
    // Pass your generated private key
    id: uuidv4(), // You can generate your own id and replace uuid()
    name: `${useUser.user?.given_name}`, // Set the user name
    email: "my user email", // Set the user email
    avatar: "my avatar url", // Set the user avatar
    appId: `${appID}`, // Your AppID
    kid: `${kid}`, // Set the api key, see https://jaas.8x8.vc/#/apikeys for more info.
  });

  res.status(200).json({ token });
  
}
