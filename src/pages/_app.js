import "@/styles/globals.css";
import Header from "../../Components/Header";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  
  // const [invoiceInfo, setInvoiceInfo] = useState({});

  // function getInvoiceInfo(info) {
  //   setInvoiceInfo(info);
  // }
  
  
  return (
    <>
      <main className={`${mont.variable} font-sans`}>
        <SWRConfig
          value={{
            fetcher,
            refreshInterval: 1000,
          }}
        ></SWRConfig>
        <Header />
        <Component {...pageProps} on />
      </main>
    </>
  );
}
