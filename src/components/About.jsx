import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { github, linkedin } from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        I am a skilled software developer based in Canada, with a passion for building software that improves the lives of those around me.
        I have a strong foundation in web development, and I am always looking to expand my skillset and learn new technologies.
        I recently graduated from an accelerated computer science program from the British Columbia Institute of Technology,
        and I am seeking opportunities to work with a team of talented developers to build amazing software.
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className='flex items-center'
      >
        <div className='mt-5 w-12 h-12 rounded-full flex cursor-pointer'>
          <img
            className='mr-4'
            onClick={() => window.open("http://github.com/al-zivkovic", "_blank")}
            src={github}
            alt='github'
          />
          <img
            onClick={() => window.open("https://www.linkedin.com/in/aleksandar-zivkovic-04bb2620b/", "_blank")}
            src={linkedin}
            alt='linkedin'
          />
        </div>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");