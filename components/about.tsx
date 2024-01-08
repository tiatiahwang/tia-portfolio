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
        <span className='italic'>When I&apos;m not coding </span>, I enjoy working out and spending time with my dog. I
        also enjoy <span className='font-medium'>learning new things</span>. I am currently learning about{' '}
        <span className='font-medium'>React Native</span>.
      </p>
    </motion.section>
  );
};

export default About;
