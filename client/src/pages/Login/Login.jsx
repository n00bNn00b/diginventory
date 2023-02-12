import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-20 lg:flex lg:mx-auto w-full">
      <img
        src="https://i.ibb.co/PNmzYRX/diginventory.png"
        className="flex md:hidden sm:hidden"
        alt="logo"
      />

      <div className="card w-96 bg-base-100 shadow-2xl flex mx-auto">
        <figure className="px-5">
          <img
            src="https://i.ibb.co/PNmzYRX/diginventory.png"
            alt="logo"
            className="rounded-xl h-40"
          />
        </figure>
        <h1 className="text-center text-xl font-bold">
          Log in to your account
        </h1>
        <p className="text-center">Welcome back! Please enter your details</p>
        <div className="card-body">
          <p>
            Email <span className="text-red-500 text-left">*</span>{" "}
          </p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full max-w-xs"
          />
          <p>
            Password <span className="text-red-500 text-left">*</span>{" "}
          </p>
          <input
            type="password"
            placeholder="Create a password"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="button"
            className="btn btn-primary hover:text-base-100"
            value="Sign In"
          />
          <p
            className="text-primary text-right
          "
          >
            <Link to="/">Forgot Password?</Link>
          </p>
          <button className="btn bg-base-100 text-neutral hover:bg-yellow-100">
            <img
              className="h-10 w-10"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="google"
            />
            Sign in with Google
          </button>
        </div>
        <p className="text-center mb-5">
          Don't have an account?{" "}
          <Link className="text-primary font-bold" to="/signup">
            Sign up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
