"use client";
import { useEffect, useRef } from "react";
import JitsiScript from "./JitsiScript";

export default function JitsiMeet() {
  const jitsiContainer = useRef(null);
  const jitsiApi = useRef(null);

  useEffect(() => {
    const domain = "meet.jit.si";
    const options = {
      roomName: "Sala",
      width: "400px",
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
  }, []);

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
