import React from 'react'
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles.js";
import {serives} from "../styles.js"
import {fadeIn, textVariant} from "../utils"

import 
const About = () => {
  return (
    <>
      <motion.div variants={textVarient()} >
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
    </>
  )
}

export default About