import React from "react";
import Card from "../About/Card";

function Services(props) {
  return (
    <>
      <div className="header">
        <h1 className="center">Services</h1>
        <h2 className="center hover-color">
          The following are the services I provide!
        </h2>
      </div>
      <div className="abt-content">
        <div className="abt-card">
          <Card
            cardHeading="Custom Website"
            cardText="I can provide customer with a custom website without using any of the CMS like Blogger, Wordpress, etc. with the own design language of the clients."
          />
          <Card
            cardHeading="UI/ UX Design"
            cardText="Being a front-end developer, I can design and develop a UI for the clients with satisfaction. To be clear, I use FIGMA to deign and develop UI and UX."
          />
          <Card
            cardHeading="CMS Website"
            cardText="In case, clients want a CMS website, then I can build them one with technologies like Blogger, Wordpress, Wix, etc. according to the requirements of clients."
          />
        </div>
      </div>
    </>
  );
}

export default Services;
