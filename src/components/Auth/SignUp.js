import React from "react";
const SignUp = () => {
  return (
    <div className="container mt-5">
      <form className="border border-info rounded signup p-2 mx-auto my-auto">
        <h3 className="text-center">Sign Up</h3>
        <div className="form-group">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="username"
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="email"
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <button type="submit" class="btn btn-info btn-block">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
