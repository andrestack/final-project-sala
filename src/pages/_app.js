import "@/styles/globals.css";
import Header from "../../Components/Header";
import { SWRConfig } from "swr";
import useLessonStore  from "../../utils/useLessonStore"
import { useEffect } from "react";
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
const setLessons = useLessonStore((state) => state.setLessons)


  const { data, isLoading, error } = useSWR("/api/lessons", fetcher, {
    fallbackData: [],
  });
  // if (error) return (<h1>ERROR</h1>);
  // if (isLoading) return <h1>Is isLoading</h1>;

  useEffect(() => {
    setLessons(data);
  }, [data, setLessons]);

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
          refreshInterval: 1000,
        }}
      ></SWRConfig>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
