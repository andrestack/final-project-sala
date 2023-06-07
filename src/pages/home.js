import Header from "Components/Header";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";

import ButtonAddCourseCode from "Components/Buttons/ButtonAddCourseCode";

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <Head>
        <title>Your Sala</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1 className="m-1 ml-72 mt-9 bg-none p-1 text-left font-sans text-3xl font-bold text-energy-100">
        Hey {user?.given_name}
      </h1>
      <h2 className="bg-none p-1 text-center font-sans text-7xl font-bold text-energy-200 ">
        {" "}
        Welcome to your Sala
      </h2>
      <ButtonAddCourseCode />
    </>
  );
}
