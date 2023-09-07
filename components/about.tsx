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
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    >
      <SectionHeading title='About Me' />
      <p className='mb-3'>
        혼자 공부로 기본 입문. 부트캠프로 심화과정. 6개월
        일. My core stack is{' '}
        <span className='font-medium'>
          React, Next.js, Prisma
        </span>
        . I am currently looking for a{' '}
        <span className='font-medium'>
          front-end position
        </span>{' '}
        as a software developer.
      </p>
      <p>
        <span className='italic'>
          When I&apos;m not coding{' '}
        </span>
        , I enjoy watching YouTube and playing with my dog.
        I also enjoy{' '}
        <span className='font-medium'>
          learning new things
        </span>
        . I am currently learning about{' '}
        <span className='font-medium'>flutter</span>.
      </p>
    </motion.section>
  );
};

export default About;
