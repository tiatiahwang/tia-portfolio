'use client';

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import useSectionInView from '@/hook/use-section-in-view';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id='about'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className='max-w-[45rem] text-center leading-8 mb-40 md:mb-0 scroll-mt-28'
    >
      <SectionHeading title='About Me' />
      <p>
        My core stack is <span className='font-medium'>React.js and Next.js</span>
        .<br /> I am currently looking for a <span className='font-medium'>Front-End Developer position.</span>
      </p>
      <p>
        <span className='italic'>When I&apos;m not coding </span>, I enjoy working out and spending time with my dog.
        <br /> I also enjoy <span className='font-medium'>working with others</span>.<br /> I am currently{' '}
        <span className='font-medium'>collaborating with others</span> on a side project <br />
        to launch a community website tailored for runners.
      </p>
    </motion.section>
  );
};

export default About;
