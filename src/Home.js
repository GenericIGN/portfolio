import { motion } from "framer-motion"

const Home = () => {
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
    <motion.div id="Home" className="Home"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={variantContainer}>
      <div className="ItemContainer">
        <div className="Item">
          <div className="ItemSpacer" />
          <motion.div className="portfolio_container" variants={variantItem}>
            <img id="portfolio_img" src="portfolio_img.jpg" alt="pic of me" draggable="false" />
          </motion.div>
          <motion.div className="TextContainer" variants={variantItem}>
            <div className="NameHeader">Jun Ryul Choi</div>
            <div className="SubNameHeader">cjunryul@gmail.com</div>
            <a href="choijun_resume.pdf" download>
              <div id="ResumeDownload" className="SubNameHeader">Download resume as PDF</div>
            </a>
          </motion.div>
          <div className="ItemSpacer" />
          <div className="ItemSpacer" />
        </div>

        <div className="Item">
          <div className="ItemSpacer" />
          <motion.div className="TextContainer" variants={variantItem}>
            <div className="NameHeader">Education</div>
          </motion.div>
          <motion.div className="TextContainer" variants={variantItem}>
            <h2>University of Michigan | Ann Arbor, MI (September, 2018 - July, 2022)</h2>
            <h2>Bachelor of Science in Computer Science | 3.15 GPA</h2>
          </motion.div>
          <div className="ItemSpacer" />
        </div>
      </div>
    </motion.div >
  );
}

export default Home;