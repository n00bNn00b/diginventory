import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl my-20 flex mx-auto">
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
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
          <input type="button" className="btn btn-primary" value="Sign Up" />
          <input
            type="button"
            className="btn bg-base-100 text-neutral hover:bg-yellow-100"
            value="Sign Up with Google"
          />
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
