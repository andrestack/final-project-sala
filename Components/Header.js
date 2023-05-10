import Link from "next/link";

import SlideRoutes from "react-slide-routes";

/*
nav {
  display: grid;
  grid: auto / auto-flow;
  padding: 3px;
  margin-bottom: 16px;
  background: #eee;
  border-radius: 10px;
}



*/

export default function Header() {
  return (
    <div>
      {/* <nav className="flex flex-row justify-center space-x-32 p-5 bg-focus-200 text-focus-300"> */}
      <nav class="font-sans flex flex-row justify-center space-x-4 p-3 my-5 mx-20 bg-focus-400 rounded-xl">
        <Link
          href="/"
          className="font-sans px-3 py-2 text-focus-100 rounded-lg hover:bg-focus-200 hover:text-energy-400"
        >
          Home
        </Link>
        <Link
          href="/lessons"
          className="font-sans px-3 py-2 text-focus-100 rounded-lg hover:bg-focus-200 hover:text-energy-400"
        >
          Your Lessons
        </Link>
        <Link
          href="/invoices"
          className="font-sans px-3 py-2 text-focus-100 rounded-lg hover:bg-focus-200 hover:text-energy-400"
        >
          Your Invoices
        </Link>
      </nav>
    </div>
  );
}

/* 

 <Link className="font-mono" href={"/"}>
          Home
        </Link>
        <Link className="font-mono" href={"/lessons"}>
          Your Lessons
        </Link>
        <Link className="font-mono" href={"/invoices"}>
          Your Invoices
        </Link>

*/
