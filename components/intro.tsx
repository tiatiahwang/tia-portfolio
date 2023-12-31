'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  BsArrowRight,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useSelectedContext } from '@/context/selected-context';
import useSectionInView from '@/hook/use-section-in-view';

const Intro = () => {
  const { ref } = useSectionInView('Home', 0.5);
  const { setSelected, setTimeOfLastClick } =
    useSelectedContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
      >
        Hello, my name is{' '}
        <span className='font-bold'>Tia Hwang</span>.
        <br />
        I&apos;m a{' '}
        <span className='font-bold'>
          Front-End Developer
        </span>{' '}
        with <span className='font-bold'>about a year</span>{' '}
        of experience. I enjoy building{' '}
        <span className='italic'>sites & apps</span>.<br />
        My focus is{' '}
        <span className='underline'>React and Next.js</span>
        .
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        // transition={{ delay: 0.1 }}
        className='flex flex-col sm:flex-row justify-center items-center gap-3 px-4 text-lg font-medium'
      >
        <Link
          onClick={() => {
            setSelected('Contact');
            setTimeOfLastClick(Date.now());
          }}
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here{' '}
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>
        <a
          className='group cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full 
                    outline-none focus:scale-110 hover:scale-110 active:scale-105 transition 
                    borderBlack dark:bg-white/10'
          href='/Tia_Hwang.pdf'
          download
        >
          Download CV{' '}
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>
        <a
          className='cursor-pointer bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full 
                    outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition
                    borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://www.linkedin.com/in/tiatiahwang/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a
          className='cursor-pointer bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full 
                    outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition 
                    borderBlack dark:bg-white/10 dark:text-white/60'
          href='https://github.com/tiatiahwang'
          target='_blank'
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
