import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container py-5 text-center" id="home-section">
      <div className="row">
        <div className="col-sm-6 py-2">
          <Link to="/create" className="text-dark link">
            <button className="btn btn-outline-primary btn-block">
              Create Space{" "}
            </button>
          </Link>
        </div>
        <div className="col-sm-6 py-2">
          <Link to="/join" className="text-dark link">
            <button className="btn btn-outline-primary btn-block">
              Join Space
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
