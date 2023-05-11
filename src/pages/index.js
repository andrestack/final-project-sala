
import { Inter } from "next/font/google";
import ButtonAddCourseCode from "Components/Buttons/ButtonAddCourseCode";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="bg-none p-10 text-center font-sans font-bold text-energy-200 text-7xl my-12">
        
        WELCOME TO YOUR SALA
      </h1>
      <ButtonAddCourseCode/>
    
    </>
  );
}
