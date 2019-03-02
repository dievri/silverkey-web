import React from "react";

const Download = () => {
  return (
    <section className="bg-light text-muted py-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-4 py-3">
            <i className="fab fa-windows fa-4x" />
          </div>
          <div className="col-sm-4 py-3">
            <i className="fab fa-linux fa-4x" />
          </div>
          <div className="col-sm-4 py-3">
            <i className="fab fa-apple fa-4x" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
