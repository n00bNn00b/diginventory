import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="my-20 flex mx-auto w-full">
      <img
        src="https://i.ibb.co/PNmzYRX/diginventory.png"
        className="lg:flex md:hidden sm:hidden"
        alt="logo"
      />
      <div className="card w-96 bg-base-100 shadow-xl flex mx-auto">
        <figure className="px-5">
          <img
            src="https://i.ibb.co/PNmzYRX/diginventory.png"
            alt="logo"
            className="rounded-xl"
          />
        </figure>
        <h1 className="text-center text-xl font-bold">Create an account</h1>
        <div className="card-body">
          <p>
            Name <span className="text-red-500 text-left">*</span>{" "}
          </p>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full max-w-xs"
          />
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
            value="Sign Up"
          />
          <button className="btn bg-base-100 text-neutral hover:bg-yellow-100">
            <img
              className="h-10 w-10"
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              alt="google"
            />
            Sign up with Google
          </button>
        </div>
        <p className="text-center mb-5">
          Already have an account?{" "}
          <Link className="text-primary font-bold" to="/login">
            Log In
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
