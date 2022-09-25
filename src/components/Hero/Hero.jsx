import React from "react";
import Header from "../Header/Header";
import heart from "./../../assets/heart.png";
import heroman from "./../../assets/hero_image.png";
import heroback from "./../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
import "./Hero.css";
const Hero = () => {
  const transition = { type: "tween", duration: 3 };
  const mobileview = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur h-blur"></div>
      <div className="left-h">
        <Header />
        <div className="ads">
          <motion.div
            initial={{ left: mobileview ? "160px" : "200px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
        </div>
        <div>
          <span className="quote">
            If you want something you’ve never had, you must be willing to do
            something you’ve never done
          </span>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={3} start={1} delay="1" prefix="+" />
            </span>
            <span>Experts Coach</span>
          </div>
          <div>
            <span>
              <NumberCounter end={200} start={100} delay="1" prefix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={5} start={1} delay="1" prefix="+" />
            </span>
            <span>Fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="join-btn">
          <Link to="join" span={true} smooth={true}>
            Join Now
          </Link>
        </button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "3rem" }}
          transition={{ ...transition, type: "tween" }}
          className="heart-rate"
        >
          <img src={heart} alt="heart" className="heart" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>
        <img src={heroman} className="hero-image" alt="man" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "17rem" }}
          transition={{ ...transition, type: "tween" }}
          src={heroback}
          className="hero-back"
          alt="man"
        />
      </div>
    </div>
  );
};

export default Hero;
