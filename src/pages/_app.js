import "@/styles/globals.css";
import Header from "../../Components/Header";
import { SWRConfig } from "swr";
import { Lancelot, Montserrat } from "next/font/google";
import { BrowserRoutes } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import LandingPage from ".";

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

        {/* <Header /> */}

        <Component {...pageProps} on />
        
        </SWRConfig>
      </main>
    </>
  );
}
