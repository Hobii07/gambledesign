import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import { AiFillHeart } from "react-icons/ai";
import { BsDiamondFill } from "react-icons/bs";
import { ImSpades } from "react-icons/im";
import { GiClubs } from "react-icons/gi";

function Cards() {
  return (
    <div className="cards">
      <h1>Choose a Card!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Link to="/" className="card-container-ace">
              <div className="card-container-info">
                <span>A</span>
                <div className="heart-diamond-one">
                  <AiFillHeart />
                </div>
                <div className="heart-diamond-two">
                  <AiFillHeart />
                </div>
                <span>A</span>
                <div className="heart-diamond-three">
                  <AiFillHeart />
                </div>
              </div>
            </Link>

            <Link to="/" className="card-container-ace">
              <div className="card-container-info">
                <span>A</span>
                <div className="spade-club-one">
                  <ImSpades />
                </div>
                <div className="spade-club-two">
                  <ImSpades />
                </div>
                <span>A</span>
                <div className="spade-club-three">
                  <ImSpades />
                </div>
              </div>
            </Link>

            <Link to="/" className="card-container-ace">
              <div className="card-container-info">
                <span>A</span>
                <div className="heart-diamond-one">
                  <BsDiamondFill />
                </div>
                <div className="heart-diamond-two">
                  <BsDiamondFill />
                </div>
                <span>A</span>
                <div className="heart-diamond-three">
                  <BsDiamondFill />
                </div>
              </div>
            </Link>

            <Link to="/" className="card-container-ace">
              <div className="card-container-info">
                <span>A</span>
                <div className="spade-club-one">
                  <GiClubs />
                </div>
                <div className="spade-club-two">
                  <GiClubs />
                </div>
                <span>A</span>
                <div className="spade-club-three">
                  <GiClubs />
                </div>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
