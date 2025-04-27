import React from "react";
import { motion } from "framer-motion";
import vpn from '../assets/files.png';
import copeople from '../assets/copeople.png';
import Footer from './Footer';
import hacker from '../assets/hackerrank.png';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <motion.div
      className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow-lg"
      style={{
        transition: "box-shadow 0.3s ease-in-out", // Smooth transition for box shadow
      }}
      variants={fadeIn}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 15px 40px rgba(231, 10, 247, 0.5)", // Shadow appears only on hover
        transition: { duration: 0.3 },
      }}
    >
      {title === 'File Organizer' && (
        <a href="#">
          <img className="w-full rounded-t-lg h-auto object-cover" src={vpn} alt="" />
        </a>
      )}
      {title === 'Hackerrank Automation' && (
        <a href="#">
          <img className="w-full rounded-t-lg h-auto object-cover" src={hacker} alt="" />
        </a>
      )}
      {title === 'AI Trip-Planner' && (
        <a href="#">
          <img className="w-full rounded-t-lg h-auto object-cover" src={copeople} alt="" />
        </a>
      )}
      <div className="p-4 sm:p-6">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-2 pl-2">
          {technologies.map((tag, index) => (
            <p key={`${index}-${tag}`} className="text-[14px] text-blue-500">
              #{tag}
            </p>
          ))}
        </div>
        <a
          href={git}
          className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div
      className="relative bg-black"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
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

      {/* Projects Section */}
      <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            links={item.links}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </motion.div>
  );
};

export const project = [
  {
    title: 'AI Trip-Planner',
    description:
      'An AI Trip Planner with intelligent search capabilities and response generation by LLM, for personalized itineraries based on user-entered city and additional details.',
    image: { vpn },
    git: 'https://github.com/Aayush-kumar07/Trip-Planner',
    technologies: ['MongoDb', 'Express', 'ReactJS', 'NodeJS'],
  },
  {
    title: 'Hackerrank Automation',
    description:
      'Developed JavaScript script for seamless login, question selection, and code submission, improving efficiency, using Puppeteer to automate HackerRank tasks.',
    image: { vpn },
    git: 'https://github.com/Aayush-kumar07/HackerRank-Automation',
    technologies: ['JavaScript', 'Puppeteer', 'NodeJS'],
  },
  {
    title: 'File Organizer',
    description:
      'Automates file sorting into subfolders by extension into designated directories, using JavaScript and Node.Js packages.',
    image: { copeople },
    git: 'https://github.com/Aayush-kumar07/File-System-Organizer',
    technologies: ['JavaScript', 'NodeJS'],
  },
];

export default Projects;