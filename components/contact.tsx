'use client';

import { motion } from 'framer-motion';
import { FaPaperclip } from 'react-icons/fa';
import useSectionInView from '@/hook/use-section-in-view';
import SectionHeading from './section-heading';

const Contact = () => {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      ref={ref}
      id='contact'
      className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading title='Contact Me' />
      <p className='text-gray-700 -mt-6'>
        Please contact me directly at{' '}
        <a
          className='underline'
          href='mailto:tiahwang44@gmail.com'
        >
          tiahwang44@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form className='mt-10 flex flex-col'>
        <input
          className='h-14 px-4 rounded-lg borderBlack outline-none focus:border-black focus:border-2'
          type='email'
          name='senderEmail'
          required
          maxLength={500}
          placeholder='Your Email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 resize-none outline-none focus:border-black focus:border-2'
          name='message'
          required
          maxLength={5000}
          placeholder='Your Message'
        />
        <button
          type='submit'
          className='group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105'
        >
          Submit{' '}
          <FaPaperclip className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{' '}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
