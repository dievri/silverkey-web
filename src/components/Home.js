import React from "react";

const Home = () => {
  return (
    <section className="container py-5 text-center" id="home-section">
      <div className="row">
        <div className="col-sm-6 py-2">
          <button className="btn btn-outline-primary btn-block">
            Create Space
          </button>
        </div>
        <div className="col-sm-6 py-2">
          <button className="btn btn-outline-primary btn-block">
            Join Space
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
