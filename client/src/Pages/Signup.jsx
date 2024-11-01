import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
        const response = await axios.post('/api/auth/signup', {
            username: userNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        });
        console.log('Signup successful:', response.data); 
        navigate('/sign-in');
    } catch (error) {
        console.error('Error during signup:', error.response ? error.response.data : error.message);
        setError(error.response ? error.response.data.message : "An unexpected error occurred.");
    } finally {
        setLoading(false);
    }
}

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-red-700 font-bold font-serif text-4xl text-center my-8">
        Sign Up
      </h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your UserName"
          className="border p-3 rounded-lg focus:outline-none"
          id="username"
          ref={userNameRef}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          className="border p-3 rounded-lg focus:outline-none"
          id="email"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="border p-3 rounded-lg focus:outline-none"
          id="password"
          ref={passwordRef}
        />
        <button disabled = {loading}className="bg-stone-600 p-3 text-white font-semibold rounded-lg text-xl hover:opacity-90 hover:text-black" type="submit">
             {loading? 'Loading...':'Sign Up'}
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
