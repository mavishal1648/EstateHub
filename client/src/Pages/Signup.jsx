import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-red-700 font-bold font-serif text-4xl text-center my-8">
        Sign Up
      </h1>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Enter your UserName"
          className="border p-3 rounded-lg focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
        />
        <button className="bg-stone-600 p-3 text-white font-semibold rounded-lg text-xl hover:opacity-90 hover:text-black">
              Sign Up
        </button>
      </form>
      <div className="mt-4">
      <span className="text-indigo-700 font-semibold">Already Have Account?</span>
      &nbsp;&nbsp;&nbsp;
      <Link to={"/sign-in"} className="hover:text-rose-600 font-semibold underline text-lg hover:text-xl text-blue-800">
        Sign In
      </Link>
      </div>
      
    </div>
  );
}
