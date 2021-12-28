import React from "react";
import "../Home/home.css";
import Typewriter from "typewriter-effect";
import profile from "../img/profile.jpg"
import glass from "../img/glass.jpg"
import gs_web from "../img/gs-web.png"
import gym_web from "../img/gym-web.png"
import john from "../img/john.jpg"
import john2 from "../img/john2.jpg"
import js_clock from "../img/js-clock.png"
import npl_web from "../img/npl-web.png"
import portfolio from "../img/portfolio.png"
import rps_game from "../img/rps-game.png"
import text from "../img/text.jpg"
import twitter from "../img/twitter.jpg"
import yt from "../img/yt.jpg"
import fb from "../img/fb.jpg"
import insta from "../img/insta.jpg"


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
      <h1 className="center">
          Some Works of {props.fname}
        </h1>
<div className="img">
        
        <div className="container">
  <img src={glass} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">Glassmorphism</div>
  </div>
</div>

<div className="container">
  <img src={gs_web} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">Tailwind CSS</div>
  </div>
          </div>
          
          <div className="container">
  <img src={gym_web} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">Tailwind CSS</div>
  </div>
          </div>
          
          <div className="container">
  <img src={john} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">HTML, CSS, JavaScript</div>
  </div>
          </div>
          
          <div className="container">
  <img src={john2} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">HTML, CSS, JavaScript</div>
  </div>
          </div>
          
          <div className="container">
  <img src={js_clock} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">HTML, CSS, JavaScript</div>
            </div>
          </div>
          
          <div className="container">
  <img src={npl_web} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">HTML, CSS, JavaScript</div>
            </div>
          </div> 

          <div className="container">
  <img src={portfolio} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">HTML, CSS, JavaScript</div>
            </div>
          </div>

          <div className="container">
  <img src={rps_game} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">HTML, CSS, JavaScript</div>
            </div>
          </div>
          <div className="container">
  <img src={yt} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">React.Js Clone</div>
            </div>
          </div>

          <div className="container">
  <img src={insta} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">React.Js Clone</div>
            </div>
          </div>

          <div className="container">
  <img src={fb} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">React.Js Clone</div>
            </div>
          </div>

          <div className="container">
  <img src={twitter} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">React.Js Clone</div>
            </div>
          </div>

          <div className="container">
  <img src={text} alt="" className="image"></img>
  <div className="overlay">
    <div className="text">React.Js and Bootstrap</div>
            </div>
          </div>

</div>
      </div>
    </>
  );
}

export default Home;
