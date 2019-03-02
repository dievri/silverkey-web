import React from "react";

const Video = () => {
  return (
    <section className="container text-center py-5">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/N0h1X2Kua7E"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
};
export default Video;
