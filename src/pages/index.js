import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import styled from "styled-components";

const NavLink = styled.a``;

export default function LandingPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="bg-focus-200 h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Sala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image
          src="/sala-logo-2.png"
          alt="Picture of the author"
          width={700}
          height={700}
          style={{ opacity: 0.5 }}
        />
        <NavLink href="/api/auth/login?returnTo=/home">
          <button className="mt-10 px-8 py-4 text-energy-200 border border-focus-100 font-sans text-xl rounded-2xl hover:shadow-[1px_1px_10px_5px_#ffc20e] transition ease-out hover:-translate-y-2 delay-150">
            Entrar
          </button>
        </NavLink>
        
      </main>

      <footer className="w-full h-12 flex justify-center items-center text-focus-400 font-sans">
        © {new Date().getFullYear()} Sala Solutions
      </footer>
    </div>
  );
}
