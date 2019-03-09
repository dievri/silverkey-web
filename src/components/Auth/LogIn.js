import React from "react";

const LogIn = () => {
  return (
    <div className="container mt-5">
      <form className="border border-info rounded signup p-2 mx-auto my-auto">
        <h3 className="text-center">Log In</h3>
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
            type="password"
            id="password"
            className="form-control"
            placeholder="password"
          />
        </div>
        <button type="submit" className="btn btn-info btn-block">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
