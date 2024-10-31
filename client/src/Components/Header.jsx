import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-zinc-500 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-100">Estate</span>
            <span className="text-red-300">Hub</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-1 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-red-100 font-semibold hover:text-xl hover:text-black hover:underline">
              Home
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden sm:inline  text-red-100 font-semibold hover:text-xl hover:text-black hover:underline">
              About
            </li>
          </Link>

          <Link to={"/sign-in"}>
            <li className=" text-red-100 font-semibold hover:underline hover:text-xl hover:text-black">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
