import React from "react";
import "../App.css";
import "./Hero.css";
import { Link } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>
        Multiply your BET 3x <br></br>with this game backed by <br></br>
        token
      </h1>
      <div className="hero-play">
        <Link
          to="/"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Play Now
        </Link>
      </div>
      <div className="hero-container-pot">
        <p>Bankroll value</p>
        <label>
          {/* put the ACE info here */}
          <IoLogoUsd />
          10,462 USD
        </label>
      </div>
    </div>
  );
}

export default Hero;
