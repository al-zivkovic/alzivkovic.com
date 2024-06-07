import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I offer</p>
        <h2 className={styles.sectionHeadText}>Services.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        I am available for freelance work and I offer a wide range of services.
        <br />
        <br />
        I am willing to help you with your project, no matter how big or small it is.
        <br />
        <br />
        Please feel free to contact me for a quote or to discuss your project.
      </motion.p>
    </>
  )
}

export default SectionWrapper(Services, "services");