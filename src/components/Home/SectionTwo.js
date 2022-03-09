import React from "react";
import LazyLoad from "react-lazyload";
import Works from "../Works/Works";

function SectionTwo(props) {
  const workData = [
    {
      link: props.john,
      text: "HTML, CSS, JavaScript",
      github:
        "https://github.com/gauravfs-14/animated-portfolio-homepage-with-darkmode-toggle",
    },
    {
      link: props.fb,
      text: "React.Js Clone",
      github: "https://github.com/gauravfs-14/facebook_clone",
    },
    {
      link: props.glass,
      text: "Glassmorphism In CSS",
      github: "https://github.com/gauravfs-14/glassmorphism-design",
    },
    {
      link: props.portfolio,
      text: "HTML, CSS, JavaScript",
      github: "https://github.com/gauravfs-14/full-portfolio-tutorial",
    },
    {
      link: props.twitter,
      text: "React.Js Clone",
      github: "https://github.com/gauravfs-14/twitter_clone",
    },
    {
      link: props.gym_web,
      text: "Tailwind CSS",
      github: "https://github.com/gauravfs-14/fit-wet",
    },
    {
      link: props.john2,
      text: "HTML, CSS, JavaScript",
      github: "https://github.com/gauravfs-14/gaurabchhetri",
    },
    {
      link: props.js_clock,
      text: "JavaScript Project",
      github: "https://github.com/gauravfs-14/JS-Clock",
    },
    {
      link: props.npl_web,
      text: "HTML, CSS, JavaScript",
      github: "https://github.com/gauravfs-14/Nepal-Website",
    },
    {
      link: props.rps_game,
      text: "JavaScript Project",
      github: "https://github.com/gauravfs-14/rock-paper-scissors-game",
    },
    {
      link: props.yt,
      text: "React.Js Clone",
      github: "https://github.com/gauravfs-14/youtube_clone",
    },
    {
      link: props.insta,
      text: "React.Js Clone",
      github: "https://github.com/gauravfs-14/instagram_clone",
    },
    {
      link: props.text,
      text: "React.Js and Bootstrap",
      github: "https://github.com/gauravfs-14/text-utils",
    },
    {
      link: props.new_react,
      text: "React.Js with API",
      github: "https://github.com/gauravfs-14/react-news-app",
    },
    {
      link: props.weather_react,
      text: "React.Js with API",
      github: "https://github.com/gauravfs-14/react_weather_app",
    },
    {
      link: props.img_react,
      text: "React.Js with API",
      github: "https://github.com/gauravfs-14/react_image_gallary_pixabay_api",
    },
  ];

  return (
    <>
      <div className="section-2">
        <h1 className="center">Some Works of {props.fname}</h1>
        <div className="img">
          {workData.map((item) => (
            <LazyLoad once className="container">
              <Works links={item.link} text={item.text} github={item.github} />
            </LazyLoad>
          ))}
        </div>
      </div>
    </>
  );
}

export default SectionTwo;
