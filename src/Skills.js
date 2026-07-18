import { motion } from "framer-motion"

const Skills = () => {
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
    <motion.div id="Skills" className="Skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={variantContainer}>
      <motion.div variants={variantItem} className="SkillContainer">
        <div className="SectionHeader">My Main Skills</div>
        <motion.ul variants={variantContainer}>
          <motion.li variants={variantItem}>C++</motion.li>
          <motion.li variants={variantItem}>Python</motion.li>
          <motion.li variants={variantItem}>Javascript</motion.li>
          <motion.li variants={variantItem}>HTML</motion.li>
          <motion.li variants={variantItem}>CSS</motion.li>
          <motion.li variants={variantItem}>React</motion.li>
        </motion.ul>
      </motion.div>
      <motion.div variants={variantItem} className="SkillContainer">
        <div className="SectionHeader">I'm also familiar with...</div>
        <motion.ul variants={variantContainer}>
          <motion.li variants={variantItem}>Git</motion.li>
          <motion.li variants={variantItem}>Vue</motion.li>
          <motion.li variants={variantItem}>Unity</motion.li>
          <motion.li variants={variantItem}>Jira</motion.li>
          <motion.li variants={variantItem}>SQLite</motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
}

export default Skills;