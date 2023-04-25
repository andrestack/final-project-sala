import "@/styles/globals.css";
import Header from "../../Components/Header";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return(
  <>
  <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    ></SWRConfig>
  <Header/>
    <Component {...pageProps} />
  </>)
}
