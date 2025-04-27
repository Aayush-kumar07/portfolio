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
              , a quick learner and adaptable Software Engineer with 1.5+ years of experience in building AI solutions on AWS,
              automating cloud workflows using Python, and developing responsive web applications with React.js and Next.js.
              Experienced in containerizing applications using Amazon EKS and ECS, familiar with CI/CD tools like Jenkins and
              Harness, and having basic knowledge of infrastructure-as-code tools like Terraform and Ansible. Strong
              collaborator with a track record of delivering robust software in agile environments.
              <br />
              <br />
              🚀 With experience as a Software Engineer at Boomi, an R&D intern at Genpact, and an SDE intern
              at PHN Technology, I've honed my skills in a wide range of
              technologies. At Boomi, I designed and implemented AI Agents in Amazon Bedrock using Lambda Functions and KnowledgeBase with S3 as a datasource, enhancing automation capabilities with Guardrails. I automated AWS workflows using Python (Boto3), created scalable CloudFormation templates, and contributed to front-end microservices using React.js and Next.js, achieving 100% Jest test coverage. Additionally, I mentored interns, improving team productivity and project handoffs.
              <br />
              <br />
              My expertise spans HTML, CSS, JavaScript, React, Node.js, FastAPI, Langchain, RAG Pipeline, Docker, Nginx, Azure OpenAI, MySQL, MongoDB, and AWS services like Lambda, S3, CloudFormation, and EventBridge. From building AI-driven solutions to automating complex workflows, I thrive on tackling challenges and delivering impactful projects.
              <br />
              <br />
              ✍️ Beyond coding, I enjoy exploring new technologies and gaming. I'm always eager to learn and share my insights. My goal is to continue pushing the boundaries of what's possible with technology and create solutions that make a difference.
            </p>

            <ButtonLink
              url="https://drive.google.com/file/d/1lnK0RaDFFXsFCcd79KcsJRjFCAC4lsT4/view?usp=drivesdk"
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
