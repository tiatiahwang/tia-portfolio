'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='/tia.jpg'
              alt='Tia Pic'
              width={240}
              height={240}
              quality={95}
              priority={true}
              className='rounded-full h-28 w-28 border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.2,
              duration: 0.7,
            }}
            className='text-3xl absolute bottom-0 right-0'
          >
            👋🏻
          </motion.span>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
      >
        <span className='font-bold'>
          Hello, I&apos;m Tia.
        </span>{' '}
        I&apos;m a{' '}
        <span className='font-bold'>
          front-end developer
        </span>{' '}
        with <span className='font-bold'>1 year</span> of
        experience. I enjoy building{' '}
        <span className='italic'>sites & apps</span>. My
        focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.p>
    </section>
  );
};

export default Intro;
