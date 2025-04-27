import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { services } from "../constants";
import ButtonLink from "./ButtonLink";
import Footer from "./Footer";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, rotateX: -15, rotateY: -15, scale: 0.8 },
  visible: {
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0px 10px 30px rgba(231, 10, 247, 0.5)",
    transition: { duration: 0.3 },
  },
};

const textReveal = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ServiceCard = ({ service }) => (
  <motion.div
    className="sm:w-[250px] w-full"
    variants={cardVariants} // Apply 3D rotation and spring animation
    initial="hidden"
    whileInView="visible"
    whileHover="hover" // Add hover effect
    viewport={{ once: true, amount: 0.5 }}
  >
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
  </motion.div>
);

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer} // Apply stagger animation to the container
      className="relative bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
      id="about"
    >
      {/* Particle Animation Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-2 h-2 bg-white rounded-full"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "30%" }}
        />
        <motion.div
          className="absolute w-3 h-3 bg-pink-500 rounded-full"
          animate={{
            x: [0, -150, 150, 0],
            y: [0, 150, -150, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "50%", left: "70%" }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            x: [0, 200, -200, 0],
            y: [0, -200, 200, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "80%", left: "40%" }}
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col justify-around">
        <motion.div
          className="sm:px-16 px-2"
          variants={fadeIn} // Apply fade-in animation
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold mt-2 overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={textReveal} // Text reveal animation
          >
            Introduction
          </motion.h2>
          <motion.p
            className="mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]"
            variants={fadeIn} // Fade-in for paragraph
          >
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
            ✍️ Beyond coding, I enjoy exploring new technologies and gaming. I'm always eager to learn and share my insights. My goal is to continue pushing the boundaries of what's possible with technology and create solutions that make a difference.
          </motion.p>

          <ButtonLink
            url="https://drive.google.com/file/d/1lnK0RaDFFXsFCcd79KcsJRjFCAC4lsT4/view?usp=drivesdk"
            text="View Resume →"
            padding={`p-3`}
          />
        </motion.div>
        <motion.div
          className="mt-20 flex justify-center flex-wrap gap-7"
          variants={staggerContainer} // Apply stagger animation to service cards
        >
          {services.map((service) => (
            <ServiceCard service={service} key={service.title} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;