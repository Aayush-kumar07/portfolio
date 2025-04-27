import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { experiences } from '../constants';
import Footer from './Footer';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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

const Experience = () => {
  // Scroll to the top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="experience bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden relative"
      id="experience"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Particle Background */}
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
            ease: 'easeInOut',
          }}
          style={{ top: '20%', left: '30%' }}
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
            ease: 'easeInOut',
          }}
          style={{ top: '50%', left: '70%' }}
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
            ease: 'easeInOut',
          }}
          style={{ top: '80%', left: '40%' }}
        />
      </div>

      {/* Experience Section */}
      <motion.div
        className="pt-12 sm:px-16"
        variants={fadeIn}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
          Work Experience.
        </h2>
      </motion.div>
      <VerticalTimeline className="mt-9">
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            className="relative vertical-timeline-element--work"
            contentStyle={{
              background: '#1d1836',
              color: '#fff',
              transition: 'transform 0.3s ease-in-out',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            date={experience.duration}
            iconStyle={{
              background: '#fff',
              transition: 'transform 0.3s ease-in-out',
            }}
            icon={
              <motion.a
                className="flex justify-center items-center w-full h-full"
                href={experience.url}
                target="_blank"
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-[60%] h-[60%] object-contain"
                />
              </motion.a>
            }
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-white text-[24px] font-bold">{experience.role}</h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {experience.company}
              </p>
            </motion.div>

            <motion.ul
              className="mt-5 list-disc ml-5 space-y-2"
              variants={fadeIn}
            >
              {experience.points.map((point, index) => (
                <motion.li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                  whileHover={{ scale: 1.05, color: '#FFD700' }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Footer />
    </motion.div>
  );
};

export default Experience;