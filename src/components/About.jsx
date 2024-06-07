import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, about } from '../constants';
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

const downloadCV = () => {
  const cvFilePath = "/public/AleksandarZivkovic-Resume.pdf";

  fetch(cvFilePath)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = cvFilePath.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch(error => console.error('Error downloading CV:', error));
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
        {about.english_description}
      </motion.p>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className='flex items-center'
      >
        <div className='mt-5 w-13 h-12 rounded-full flex'>
          <img
            className='mr-4 cursor-pointer'
            onClick={() => window.open("http://github.com/al-zivkovic", "_blank")}
            src={github}
            alt='github'
          />
          <img
            className='mr-5 cursor-pointer'
            onClick={() => window.open("https://www.linkedin.com/in/aleksandar-zivkovic-04bb2620b/", "_blank")}
            src={linkedin}
            alt='linkedin'
          />
          <button
            className='bg-purple-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-purple-800 transition-all duration-300 ease-in-out'
            onClick={() => downloadCV()}
          >
            Download CV
          </button>
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