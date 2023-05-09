import "@/styles/globals.css";
import Header from "../../Components/Header";
import { SWRConfig } from "swr";
import useSWR from "swr"


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {


  
  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      ></SWRConfig>
      <Header />
      <Component {...pageProps} 
      on/>
    </>
  );
}
