import React from "react";
import ReactDOM from "react-dom";

import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import FeaturedClasses from "./components/FeaturedClasses";

const classesRepo = [
  {
    picture: "StrengthImg.jpg",
    name: "STRENGTH & STAMINA",
    desc:
      "In Fit Gymz Strength and Stamina class, we will delve deep into building the fittest body you can. The class aims to not only shape you up, but also instruct and inform you in the right methods to do weightlifting and working out.",
    timeOfDay: "21:00"
  },
  {
    picture: "FlexPost.jpg",
    name: "FLEXIBILITY POSTURES",
    desc:
      "Learn how to maintain a comfortable and healthy posture, with our comprehensive class that goes through the most popular Yoga and Pilates postures. These postures are gears to make your body more flexibile and agile.",
    timeOfDay: "22:00"
  },
  {
    picture: "GoalsImg.jpg",
    name: "ACHIEVING YOUR GOALS",
    desc:
      "Getting in shape forces you to face your biggest challenges, and sticking to a regular routine for a long period of time. This class will make sure you know how to focus on the right exercises and workouts to reach your goals.",
    timeOfDay: "21:00"
  }
];

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <FeaturedClasses classes={classesRepo} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
