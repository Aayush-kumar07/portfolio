import React from "react";
import "../App.css";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";
import Footer from "./Footer";

const ServiceCard = ({ service }) => (
  <div className="sm:w-[250px] w-full">
    <div className="w-full green-pink-gradient p-[1px] rounded-[20px]">
      <div
        className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{ background: "#151030" }}
      >
        <img
          src={service.icon}
          alt="some_icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
              Introduction
            </h2>
            <p className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]">
              👨‍💻 Hi, I'm{" "}
              <a
                className="text-green-300 hover:text-green-500 duration-300"
                href="https://www.linkedin.com/in/aayush-kumar-371952270/"
                target="_blank"
              >
                Aayush Kumar
              </a>
              , a graduate from the Birla Institute of Technology, Mesra with
              BTech in Computer Science and Engineering (2024). My passion lies in
              developing intelligent, full-stack applications and leveraging AI
              to create innovative solutions.
              <br />
              <br />
              🚀 With experience as an R&D intern at Genpact and an SDE intern
              at PHN Technology, I've owned my skills in a wide range of
              technologies including HTML, CSS, JavaScript, React, Node.js,
              FastAPI, Langchain, RAG Pipeline, Docker, Nginx, Azure OpenAI, MySQL, MongoDB. From building an AI-driven trip planner
              to automating HackerRank tasks, I thrive on tackling complex
              problems and delivering impactful projects.
              <br/>
              <br/>
              ✍️ Beyond coding, I enjoy exploring new technologies and gaming. I'm always eager to learn and share my insights. My goal is to continue pushing the boundaries of what's possible with technology and create solutions that make a difference.
            </p>

            <ButtonLink
              url="https://drive.google.com/file/d/1cDR9pP7h16zvw2FpwA7lRDMPog7MUR70/view?usp=sharing"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>
          <div className="mt-20 flex justify-center flex-wrap gap-7">
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
