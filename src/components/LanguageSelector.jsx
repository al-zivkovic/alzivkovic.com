import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { languages } from '../constants';
import { SectionWrapper } from '../hoc';

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    return (
        <motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
            >
                Select your language:
            </motion.p>
            <motion.div
                variants={fadeIn("", "", 0.1, 1)}
                className='flex justify-center items-center space-x-4 mt-4'
            >
                {languages.map((language, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 rounded-[20px] ${selectedLanguage === language.code ? 'bg-tertiary text-white' : 'bg-white text-secondary'} border-2 border-tertiary`}
                        onClick={() => setSelectedLanguage(language.code)}
                    >
                        {language.name}
                    </button>
                ))}
            </motion.div>
        </motion.div>
    )
};

export default SectionWrapper(LanguageSelector, "language_selector");