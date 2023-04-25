import Link from "next/link";
import styled from "styled-components";




export default function Header() {
  return (
    <div>
    <nav className="flex flex-row justify-center space-x-32 p-5 bg-focus-200 text-focus-300">
      <Link className="font-mono" href={"/"}>Home</Link>
      <Link className="font-mono" href={"/lessons"}>Your Lessons</Link>
    </nav>
    </div>
  );
}
