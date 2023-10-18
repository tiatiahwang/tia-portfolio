'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import useSectionInView from '@/hook/use-section-in-view';
import { skillsData } from '@/lib/data';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView('Skills');
  return (
    <section
      ref={ref}
      id='skills'
      className='max-w-[53rem] scroll-mt-28 mb-40 md:mb-0'
    >
      <SectionHeading title='My Skills' />
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80'
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
