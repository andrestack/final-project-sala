import Header from "Components/Header";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0/client";

import ButtonAddCourseCode from "Components/Buttons/ButtonAddCourseCode";

export default function Home() {
  const {user}=useUser()

  
 

  
  return (
    <>
      <Head>
        <title>Your Sala</title>
        <meta name="description" content="home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1 className="bg-none p-1 text-left ml-24 mt-9 font-sans font-bold text-energy-100 text-3xl m-1">
        Hey {user?.given_name} 
        
      </h1>
      <h2 className="bg-none p-1 text-center font-sans font-bold text-energy-200 text-7xl "> Welcome to your Sala</h2>
      <ButtonAddCourseCode />
    </>
  );
}
