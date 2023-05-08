import "@/styles/globals.css";
import Header from "../../Components/Header";
import { SWRConfig } from "swr";
import useSWR from "swr"


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {


  const {data, isLoading, error} = useSWR("api/lessons", fetcher, {fallbackData: [],})



const filteredData = data.filter((lesson) => lesson.isInvoiced)

  
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
