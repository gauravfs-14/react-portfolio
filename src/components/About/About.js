import React from "react";
import "./about.css";
import Card from "./Card";

function About(props) {
  return (
    <>
      <div className="header">
        <h1 className="center">About</h1>
        <h2 className="center hover-color">Get to know about me!</h2>
      </div>
      <div className="abt-content">
        <div className="abt-card">
          <Card
            cardHeading="Who is Gaurab?"
            cardText="He is a passionate Front-End Web Developer situated in Pokhara, Nepal. Detail-oriented skilled at different tools of UI/ UX. Sociable who chats with customers to make them feel like home. Front-End Developer experienced at working with different front-end technologies. Also competent in using different CMS like blogger, wordpress, wix, etc."
          />
          <Card
            cardHeading="What are his interests?"
            cardText="Being a motivated self-started, he is a flexible and efficient developer mainly associated with with front-end developement. Mainly interested in playing with different technologies regarding development. Focused towards delivering value to the clients. Besides, also interested in listening to music, creating content, writing blogs, etc."
          />
          <Card
            cardHeading="What languages he speaks?"
            cardText="As a developer, learning doesn't stop. Discussing the language he speaks, he can speak general human language like English, Nepali, Hindi. But beign a developer, it's not enough. Discussing computer languages, he can speak  HTML, CSS, JavaScript, React.js, PhP, C, etc. also flexible with different technologies like Bootstrap, Tailwind CSS, Node.js, etc. and constantly adding."
          />
        </div>
      </div>
    </>
  );
}

export default About;
