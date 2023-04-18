import Image from "next/image";
import { Inter } from "next/font/google";
import JitsiMeet from "../../Components/Jitsi/JitsiMeet";
import JitsiScript from "../../Components/Jitsi/JitsiScript";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <h1>Hello Jitsi</h1>
        <div>
          <JitsiScript />
          <JitsiMeet />
        </div>
      </>
    </main>
  );
}
