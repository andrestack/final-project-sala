import Header from "Components/Header";
import Head from "next/head";

import ButtonAddCourseCode from "Components/Buttons/ButtonAddCourseCode";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Sala</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1 className="bg-none p-10 text-center font-sans font-bold text-energy-200 text-7xl my-12">
        WELCOME TO YOUR SALA
      </h1>
      <ButtonAddCourseCode />
    </>
  );
}
