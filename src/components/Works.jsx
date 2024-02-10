import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectsCard = ({ name, description, tags, image, source_code_link, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{max: 45, scale: 1, speed: 450}}>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Works
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience. Each project is briefly described with a link to the source code and a live demo. It reflects my ability to solve compex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
            <ProjectsCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")