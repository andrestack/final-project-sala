import "@/styles/globals.css";
import Header from "../../Components/Header";
import { SWRConfig } from "swr";
import useSWR from "swr"
import { useState } from "react";


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const [invoiceInfo, setInvoiceInfo] = useState({});

  function getInvoiceInfo(info) {
    setInvoiceInfo(info);
  }
  
  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      ></SWRConfig>
      <Header />
      <Component {...pageProps} getInvoiceInfo={getInvoiceInfo} invoiceInfo={invoiceInfo}
      on/>
    </>
  );
}
