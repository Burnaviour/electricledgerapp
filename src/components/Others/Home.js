import React from "react";
import v1 from "../assets/video.mp4";

export default function Home() {
  return (
    <>
      <section className="videoPlayground ">
        {/* <div className = "overlay"></div> */}
        <video src={v1} autoPlay loop muted />
      </section>
      <div className="video--text">
        <h1>Powering the future with blockchain technology</h1>
        <p>
          Introducing the world's first block chain based electricity system,
          powered by a private block chain network.
        </p>
      </div>
    </>
  );
}
