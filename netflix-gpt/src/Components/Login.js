import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true);

  const toogleSignIn = () => {
    setIsSignInform(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="background-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black  mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm === true ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-md"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-md">
          {isSignInForm === true ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white font-serif font-medium p-2 my-2 cursor-pointer"
          onClick={toogleSignIn}
        >
          {isSignInForm === true
            ? "Already Registerd?.Please sign In Now"
            : "New to Netflix? Sign up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
