import "@/styles/globals.css";
import { SWRConfig } from "swr";
import { Montserrat } from "next/font/google";
import React from "react";
import { UserProvider, useUser } from "@auth0/nextjs-auth0/client";



const fetcher = (...args) => fetch(...args).then((res) => res.json());

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${mont.variable} font-sans`}>
        <SWRConfig
          value={{
            fetcher,
            refreshInterval: 1000,
          }}
        >
          <UserProvider>
            <Component {...pageProps} on />
          </UserProvider>
        </SWRConfig>
      </main>
    </>
  );
}
