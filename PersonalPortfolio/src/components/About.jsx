import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div>
        <h2 className={styles.sectionHeadText}>A Bit About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px] px-5"
      >
        Hello there! As a third year student, I am currently immersed in the
        dynamic world of Computer Science, where my fascination lies in the
        cutting-edge realms of technology and cloud infrastructure. My
        enthusiasm for web development and cloud computing is not just about
        understanding the latest trends; it's about diving deep, challenging the
        norms, and creatively solving complex puzzles. I'm excited about
        contributing to transformative projects that reshape our digital
        experiences and leave a lasting impact in the tech world.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-10 sm:text-[20px] text-[18px] text-white tracking-wider"
      >
        What I'm Excited About
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full teal-darkgreen-gradient p-[1px] rounded-[5px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[5px] py-5 px-12 min-h-[260px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(About, "about");
