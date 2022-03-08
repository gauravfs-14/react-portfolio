import React from "react";
import "../Home/home.css";
import Typewriter from "typewriter-effect";
import profile from "../img/profile.jpg";
import glass from "../img/glass.jpg";
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
import new_react from "../img/news_react.png";
import weather_react from "../img/weather_react.png";
import img_react from "../img/image_react.png";

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
          <Works
            links={john}
            text="HTML, CSS, JavaScript"
            github="https://github.com/gauravfs-14/animated-portfolio-homepage-with-darkmode-toggle"
          />
          <Works
            links={fb}
            text="React.Js Clone"
            github="https://github.com/gauravfs-14/facebook_clone"
          />
          <Works
            links={glass}
            text="Glassmorphism in CSS"
            github="https://github.com/gauravfs-14/glassmorphism-design"
          />
          <Works
            links={portfolio}
            text="HTML, CSS, JavaScript"
            github="https://github.com/gauravfs-14/full-portfolio-tutorial"
          />
          <Works
            links={twitter}
            text="React.Js Clone"
            github="https://github.com/gauravfs-14/twitter_clone"
          />
          <Works
            links={gym_web}
            text="Tailwind CSS"
            github="https://github.com/gauravfs-14/fit-wet"
          />
          <Works
            links={john2}
            text="HTML, CSS, JavaScript"
            github="https://github.com/gauravfs-14/gaurabchhetri"
          />
          <Works
            links={js_clock}
            text="JavaScript Project"
            github="https://github.com/gauravfs-14/JS-Clock"
          />
          <Works
            links={npl_web}
            text="HTML, CSS, JavaScript"
            github="https://github.com/gauravfs-14/Nepal-Website"
          />
          <Works
            links={rps_game}
            text="JavaScript Project"
            github="https://github.com/gauravfs-14/rock-paper-scissors-game"
          />
          <Works
            links={yt}
            text="React.Js Clone"
            github="https://github.com/gauravfs-14/youtube_clone"
          />
          <Works
            links={insta}
            text="React.Js Clone"
            github="https://github.com/gauravfs-14/instagram_clone"
          />
          <Works
            links={text}
            text="React.Js and Bootstrap"
            github="https://github.com/gauravfs-14/text-utils"
          />
          <Works
            links={new_react}
            text="React.Js with API"
            github="https://github.com/gauravfs-14/react-news-app"
          />
          <Works
            links={weather_react}
            text="React.Js with API"
            github="https://github.com/gauravfs-14/react_weather_app"
          />
          <Works
            links={img_react}
            text="React.Js with API"
            github="https://github.com/gauravfs-14/react_image_gallary_pixabay_api"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
