import React from "react";
import "../Home/home.css";
import Typewriter from "typewriter-effect";
import profile from "../img/profile.jpg";
import glass from "../img/glass.jpg";
import gs_web from "../img/gs-web.png";
import gym_web from "../img/gym-web.png";
import john from "../img/john.jpg";
import john2 from "../img/john2.jpg";
import js_clock from "../img/js-clock.png";
import npl_web from "../img/npl-web.png";
import portfolio from "../img/portfolio.png";
import rps_game from "../img/rps-game.png";
import text from "../img/text.jpg";
import twitter from "../img/twitter.jpg";
import yt from "../img/yt.jpg";
import fb from "../img/fb.jpg";
import insta from "../img/insta.jpg";
import Works from "../Works/Works";

function Home(props) {
  return (
    <>
      <div className="header home-header">
        <h1 className="center">
          {props.fname} {props.lname}
        </h1>
        <h2 className="center hover-color">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("UI /UX designer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Youtuber")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Blogger")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        </h2>
        <a href="mailto:gchhetri734@gmail.com" className="center btn-home">
          <button className="home-btn center">Message {props.fname}</button>
        </a>
      </div>
      <div className="section-1">
        <img src={profile} alt="" />
        <div className="desc">
          <h1>Hello Howdy!</h1>
          <p>Do what you want Not what you can!</p>
        </div>
      </div>
      <div className="section-2">
        <h1 className="center">Some Works of {props.fname}</h1>
        <div className="img">
          <Works links={john} text="HTML, CSS, JavaScript" />
          <Works links={fb} text="React.Js Clone" />
          <Works links={glass} text="Glassmorphism in CSS" />
          <Works links={gs_web} text="Tailwind CSS" />
          <Works links={portfolio} text="HTML, CSS, JavaScript" />
          <Works links={twitter} text="React.Js Clone" />
          <Works links={gym_web} text="Tailwind CSS" />
          <Works links={john2} text="HTML, CSS, JavaScript" />
          <Works links={js_clock} text="JavaScript Project" />
          <Works links={npl_web} text="HTML, CSS, JavaScript" />
          <Works links={rps_game} text="JavaScript Project" />
          <Works links={yt} text="React.Js Clone" />
          <Works links={insta} text="React.Js Clone" />
          <Works links={text} text="React.Js and Bootstrap" />
        </div>
      </div>
    </>
  );
}

export default Home;
