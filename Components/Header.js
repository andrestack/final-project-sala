import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* <nav className="flex flex-row justify-center space-x-32 p-5 bg-focus-200 text-focus-300"> */}
      <nav className="font-sans flex flex-row justify-center space-x-4 p-3 my-5 mx-20">
        <div className="bg-focus-400 rounded-3xl px-5 py-4">
          <Link
            href="/"
            className="font-sans text-focus-100 px-3 py-2 rounded-3xl hover:bg-focus-200 hover:text-energy-400 focus:outline-none focus:text-energy-400 focus:bg-focus-200"
          >
            Home
          </Link>
          <Link
            href="/lessons"
            className="font-sans text-focus-100 px-3 py-2 rounded-3xl hover:bg-focus-200 hover:text-energy-400 focus:outline-none focus:text-energy-400 focus:bg-focus-200"
          >
            Your Lessons
          </Link>
          <Link
            href="/invoices"
            className="font-sans text-focus-100 px-3 py-2 rounded-3xl hover:bg-focus-200 hover:text-energy-400 focus:outline-none focus:text-energy-400 focus:bg-focus-200"
          >
            Your Invoices
          </Link>
        </div>
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
