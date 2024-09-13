import React from "react";
import "./Home.css";
import { NavPublic } from "../NavPublic/NavPublic";
import { TextSection } from "../Custom/TextSection";
import home from "../../assest/img/home.png";
import feature from "../../assest/img/feature.png";
import card1 from "../../assest/img/card1.png";
import card2 from "../../assest/img/card2.png";
import card3 from "../../assest/img/card3.png";
import card4 from "../../assest/img/card4.png";
import card5 from "../../assest/img/card5.png";
import { ImageSection } from "../Custom/ImageSection";
import { HelpCenter } from "../Custom/HelpCenter";
import { Footer } from "../Footer/Footer";
import { SignUp } from "../SignUp/SignUp";
import { SignIn } from "../Signin/SignIn";
import DataFetch from "../Apicalls/DataFetch";

function Home() {
  const textSection = [
    {
      image: home,
      heading: "Stay Organized Stay Creative",
      text: "Join millions of people to capture ideas, organize life, and do something creative everyday.",
    },
    {
      image: feature,
      heading: "Organize all aspects of your life",
      text: "Get to-dos out of your mind, and get them done in less time.",
    },
  ];

  const helpCenter = [
    {
      image: card1,
      text: "Beginner's Guide",
    },
    {
      image: card2,
      text: "Best Practices",
    },
    {
      image: card3,
      text: "FAQ",
    },
    {
      image: card4,
      text: "Design Principles",
    },
    {
      image: card5,
      text: "What's New",
    },
  ];

  return (
    <div className="container-fuild">
      <DataFetch />
      <NavPublic />
      <div className="mt-5">
        {textSection.map((section, index) => (
          <div
            key={index}
            className={`even ${
              index % 2 === 0 ? "text-left" : "text-right bg-body-tertiary"
            } d-flex justify-content-center gap-2 flex-wrap flex-grow`}
          >
            <TextSection text={section.text} heading={section.heading} />
            <ImageSection image={section.image} />
          </div>
        ))}
      </div>
      <HelpCenter helpCenter={helpCenter} />

      <div className="d-flex justify-content-center gap-2 flex-wrap flex-grow">
        <SignUp />
        <SignIn />
      </div>
      <Footer />
    </div>
  );
}

export { Home };
