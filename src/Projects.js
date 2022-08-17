import { motion } from "framer-motion"

const Projects = () => {
  const variantContainer = {
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.1 }
    },
    hidden: {
      opacity: 0,
    }
  }
  const variantItem = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", duration: 0.4, bounce: 0.4, ease: "linear" }
    },
    hidden: {
      opacity: 0,
      scale: 0.3
    }
  }
  return (
    <motion.div id="Projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={variantContainer}>
      <div className="ProjectWrapper">
        <motion.div className="SectionHeader" variants={variantItem}>Projects</motion.div>
        <motion.div className="ProjectContainer" variants={variantItem}>
          <a href="WebBuildP1/index.html"><img className="ProjectImage" src="loz_thumb.jpg" alt="legend of zelda screenshot" /></a>
          <div>
            <h1>Legend of Zelda NES Dungeon Remake</h1>
            <p>This project was done over two weeks with a partner for my university's gamedev capstone course.</p>
            <p>We were tasked with making the dungeon as feature complete as possible.</p>
            <p>In addition, we also made a bonus level with a colorful custom mechanic!</p>
            <p>Click <a href="WebBuildP1/index.html">HERE</a> or on the image to be taken to a web build!</p>
          </div>
        </motion.div>
        <motion.div className="ProjectContainer" variants={variantItem}>
          <div>
            <h1>Project ION</h1>
            <p>This project was done over six weeks in a team of four for my university's gamedev capstone course.</p>
            <p>We built this puzzle-stealth game from scratch, iterating based on feedback gathered between six week-long sprints.</p>
            <p>We are quite proud of what we created, and our game even placed sixth in the UM + EMU Games Showcase of 2022!</p>
            <p>Click <a href="https://root-access.itch.io/project-ion">HERE</a> or on the image to be taken to the itch.io page!</p>
          </div>
          <a href="https://root-access.itch.io/project-ion"><img className="ProjectImage" src="ion_thumb.png" alt="project ion screenshot" /></a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Projects;