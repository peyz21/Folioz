import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleMouseEnter = (techName) => {
    setHoveredTech(techName);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center my-10`}>
          Tech Skillz.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
          <div 
            className="w-28 h-28 relative" 
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(technology.name)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />
            {hoveredTech === technology.name && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 p-2 bg-tertiary text-white rounded-md">
                {technology.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
